#!/usr/bin/env python3
"""Refresh the 4 'LINK 연구원' landing-page photos with a random pick
from the LINK lab iCloud shared album.

Run manually or via the scheduled GitHub Action
(.github/workflows/update-gallery.yml). Downloads replace the files
under assets/images/members/link_gallery/ in place; index.html
references those filenames directly and needs no change.
"""

import json
import random
import urllib.request
from pathlib import Path
from typing import Any

ALBUM_TOKEN = "D2Pv3-0ipoABnYhZQG6aSWSHTWQCAEQARogjZAL_TI0PSTTlxf2IRQiTpJDG8lVGLC73-hmIuX38xE"
GALLERY_DIR = Path(__file__).resolve().parent.parent / "assets/images/members/link_gallery"
PHOTO_COUNT = 4


def post_json(url: str, payload: dict[str, Any]) -> dict[str, Any]:
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"}, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        # iCloud replies with a non-standard "330 Moved" carrying a JSON
        # body that points at the actual regional host; urllib treats it
        # as an error, so read the body the same way as a normal response.
        return json.loads(e.read().decode("utf-8"))


def fetch_webstream() -> tuple[dict[str, Any], str]:
    # First call tells us which regional host actually serves this album.
    redirect = post_json(
        f"https://sharedstreams.icloud.com/{ALBUM_TOKEN}/sharedstreams/webstream",
        {"streamCtag": None},
    )
    host = redirect["X-Apple-MMe-Host"]
    return post_json(f"https://{host}/{ALBUM_TOKEN}/sharedstreams/webstream", {"streamCtag": None}), host


def is_photo(item: dict[str, Any]) -> bool:
    return all(k.isdigit() for k in item["derivatives"].keys())


def fetch_asset_urls(host: str, photo_guids: list[str]) -> dict[str, Any]:
    return post_json(
        f"https://{host}/{ALBUM_TOKEN}/sharedstreams/webasseturls",
        {"photoGuids": photo_guids},
    )


def main() -> None:
    stream, host = fetch_webstream()
    photo_items = [p for p in stream["photos"] if is_photo(p)]
    if len(photo_items) < PHOTO_COUNT:
        raise SystemExit(f"Only {len(photo_items)} photos available, need {PHOTO_COUNT}")

    chosen = random.sample(photo_items, PHOTO_COUNT)
    asset_urls = fetch_asset_urls(host, [c["photoGuid"] for c in chosen])["items"]

    GALLERY_DIR.mkdir(parents=True, exist_ok=True)

    for i, item in enumerate(chosen, start=1):
        sizes = sorted(int(k) for k in item["derivatives"].keys())
        largest = str(sizes[-1])
        checksum = item["derivatives"][largest]["checksum"]
        info = asset_urls[checksum]
        url = f"https://{info['url_location']}{info['url_path']}"

        dest = GALLERY_DIR / f"link_gallery_{i}.jpg"
        urllib.request.urlretrieve(url, dest)
        print(f"{dest.name} <- {item['photoGuid']} ({item['dateCreated']})")


if __name__ == "__main__":
    main()
