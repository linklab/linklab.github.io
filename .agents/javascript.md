# JavaScript 유지관리

## 기준 파일

- 도구 버전과 실행 명령: `package.json`, `package-lock.json`.
- 검사 대상·외부 코드 제외·포맷·린트·전역 변수 예외: `biome.json`.
- 인라인 코드 검사: `.github/lint-rules/no-inline-javascript.yml`.
- 자동 수정·커밋과 배포 조건: `.github/workflows/ci.yml`, `.github/workflows/jekyll.yml`.

## 수정 원칙

- 실행 코드는 외부 `.js` 파일에 둔다.
  Liquid 값은 HTML의 `data-*` 속성으로 전달한다.
- 로딩 순서, 페이지 초기 상태, 다른 스크립트가 사용하는 전역 함수·값을 보존한다.
- 외부 라이브러리 제외 범위를 넓혀 자체 코드를 누락하지 않는다.
  `assets/js/site.js`와 강화학습 코드는 검사 대상이다.
- 기존 classic script의 `var`·재선언·타입 변환 비교·`use strict` 예외는 동작 검증 없이 변경하지 않는다.
- `--unsafe`를 자동 수정에 사용하지 않는다.
  구형 `var` 재선언에 미사용 변수 수정을 적용하면 참조가 잘못 변경될 수 있다.

## 검증 명령

1. `npm ci`로 고정된 도구를 설치한다.
   `allowScripts`를 확대하지 말고 필요한 패키지·버전만 허용한다.
2. `npm run fix:js`로 안전한 수정을 적용한다.
3. `npm run check:js`로 경고까지 검사하고 재실행 시 변경이 없는지 확인한다.
4. `bundle exec jekyll build` 후 `npm run check:js:structure`로 실제 HTML을 검사한다.
   Markdown 코드 예제와 JSON 데이터용 스크립트는 허용한다.
5. 구조를 바꾸면 해당 페이지의 초기화·이벤트·표시 내용이 유지되는지 확인한다.

## CI 변경 시 확인

- 가능한 수정은 먼저 커밋하고 최종 검사 오류는 무시하지 않는다.
  검사한 커밋 SHA로 빌드한다.
- 인라인 코드 검사는 산출물 업로드 전에 실행한다.
  PR도 빌드·검사하며 배포는 main에서만 수행한다.
- fork PR은 자동 커밋하지 않는다.
  수정이 남으면 검사에 실패해야 한다.
- 자동 수정과 미수정 오류가 섞인 입력으로 커밋·배포 차단을 검증한다.
  로컬 검증을 실제 GitHub 검증으로 기록하지 않는다.
