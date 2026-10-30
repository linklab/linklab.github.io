# HTML·Liquid 유지관리

## 기준과 명령

- `package.json`과 잠금 파일의 버전을 사용한다. 포맷은 `.prettierrc.json`, 대상 제외는 `.prettierignore`, 빌드 결과 검사는 `.htmlvalidate.json`·`.htmlvalidateignore`가 담당한다.
- `npm run fix:html`로 포맷하고 `npm run check:html`로 검사한다. `bundle exec jekyll build` 후 `npm run check:html:structure`로 실제 HTML 구조를 검사한다.
- Liquid 플러그인 1.11.2·1.11.3은 잘못된 문법을 임의 보정하는 동작 때문에 사용하지 않는다. 1.10.2를 유지하고 버전 변경 시 닫히지 않은 태그·Liquid 블록·잘못된 속성 따옴표를 반드시 재검증한다.
- `.prettierrc.json`의 공백 민감도와 내장 언어 포맷 비활성화를 유지한다. HTML은 이 포맷터, JS·CSS는 각 Biome 설정이 담당한다.

## 구조

- HTML 페이지는 `.html`, 실제 Markdown 문서는 Markdown 확장자로 둔다. 파일을 옮겨도 permalink·문구·순서·주소·화면을 보존한다.
- 공통 스크립트는 `_includes/scripts.html`에서 한 번만 로드한다. 페이지별 스크립트는 사용하는 페이지에서 연결한다. 인라인 JS·정적 인라인 CSS를 추가하지 않는다.
- 메뉴 링크는 `_data/navigation.json`과 `_includes/section-links.html`, 하단 링크는 `_data/footer_links.json`에서 관리한다.
- 목록·제목을 수정할 때 기존 글꼴 상속과 간격을 확인한다. `list-content`는 목록 내부의 제목·이미지에 불필요한 목록 표시나 상자를 만들지 않으며, `plain-list`는 기존 정렬을 유지한다.
- `_config.yml`의 Liquid `error_mode: strict`와 `strict_filters: true`를 유지한다. 선택 속성 접근이 있으므로 `strict_variables`를 근거 없이 켜지 않는다.
- 외부 Themify 데모와 글꼴 바이너리만 개별 제외한다. assets 디렉터리 전체를 제외하지 않는다.

## 검증과 CI

- HTML·Liquid 구조 오류는 의미 판단이 필요하므로 포맷터가 임의로 고치게 하지 않는다. 가능한 포맷 수정은 커밋하고 남은 오류는 최종 검사·빌드에서 실패시킨다.
- 포맷 재실행 무변경, Jekyll 빌드, 기존 JS·CSS·UTF-8 검사, 콘텐츠·URL·반응형 화면·아코디언·강화학습 버튼 동작을 확인한다.
- CI 연결은 파일 변경 승인 후 진행한다. 로컬 임시 원격 검증과 실제 GitHub 자동 수정·커밋·배포 차단 검증을 구분하며, 실제 검증 후 테스트 이력을 제거한다.

- CI는 HTML·Liquid 포맷 수정 후 기존 자동 커밋에 반영하고 최종 포맷 검사를 실행한다. 수정된 커밋을 빌드하고 HTML 구조 검사까지 통과한 결과만 업로드·배포한다.
