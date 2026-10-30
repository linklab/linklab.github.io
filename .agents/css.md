# CSS·SCSS 유지관리

## 기준 파일

- `biome.css.json`은 공통 Biome 설정을 상속하고 CSS·SCSS만 검사한다.
  JavaScript 명령과 검사 대상을 섞지 않는다.
- 전역 스타일은 `assets/css/site.css`, 공통 유틸리티는 `assets/css/utilities.css`, 페이지별 스타일은 `assets/css/pages/`에서 관리한다.
- 페이지 CSS는 front matter의 `stylesheets` 목록에 `href`와 필요한 `media`를 지정한다.
  `_includes/head.html`이 순서대로 로드한다.
- 구조 검사는 `.github/lint-rules/no-inline-css.yml`을 사용한다.
  정적 `<style>`·`style` 속성을 다시 추가하지 않는다.

## 수정 원칙

- `#site-page` 범위와 스타일시트 로딩 순서를 유지한다.
  기존 클래스·스타일의 우선순위를 변경하지 않도록 검증한다.
- 공통 스타일은 읽을 수 있는 클래스 이름으로 재사용한다.
  전체 속성에 `!important`를 붙이지 않는다.
- 동적으로 계산하는 높이·위치·배경과 외부 위젯의 런타임 스타일은 정적 HTML 검사와 구분한다.
  아코디언 높이 처리와 표시·숨김 동작을 함께 확인한다.
- `style.min33a6.css`와 `vendor-icons.css`는 분리된 외부 코드다.
  Bootstrap·fullPage·Themify와 함께 포맷·린트 대상에서 제외하며 임의 수정하지 않는다.
- 브라우저 폴백과 아이콘 글꼴의 개별 lint 예외는 이유를 확인하고 유지한다.
  오류를 숨기려고 파일 전체를 제외하지 않는다.
- Sass 값·믹스인은 `_sass/minima/_settings.scss`에서 공유한다.
  구식 `@import`·전역 색 함수·슬래시 나눗셈을 추가하지 않는다.
- `assets/main.scss`는 Jekyll front matter와 `@use`만 담는 진입점이다.
  실제 스타일은 검사 대상 SCSS에 둔다.
  Biome가 front matter를 파싱하지 못하므로 이 진입점은 Jekyll 빌드로 검증한다.

## 검증

1. `npm run fix:css`로 안전한 수정만 적용하고 `npm run check:css`로 경고까지 검사한다.
   `--unsafe`는 자동화하지 않는다.
2. `bundle exec jekyll build` 후 `npm run check:css:structure`를 실행한다.
3. `npm run check:js`, `npm run check:js:structure`와 기존 UTF-8 검사도 유지한다.
4. 화면·계산된 스타일·아코디언·표시/숨김을 데스크톱과 모바일에서 비교한다.
   반복 포맷 실행 시 변경이 없어야 한다.
5. CI는 사용자 승인 후 연결한다.
   가능한 수정의 커밋과 남은 오류의 배포 차단을 실제 GitHub에서 확인하기 전에는 단계 전체를 완료 처리하지 않는다.
