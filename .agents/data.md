# YAML·JSON·워크플로 유지관리

## 도구와 범위

- `biome.data.json`과 `npm run fix:data`로 자체 YAML·JSON·JSONC를 포맷하고 안전한 린트 수정을 적용한다.
  `npm run check:data`로 Biome와 yamllint를 함께 검사한다.
- Biome는 공백·줄바꿈·구문과 JSON 중복 키를 검사한다.
  YAML 중복 키·앵커 검사는 `.yamllint.yml`의 안정 버전 규칙으로 보완하며 공백 규칙을 중복 적용하지 않는다.
- yamllint는 `.github/requirements-lint.txt`로 설치한다.
  `npm run check:workflows`는 PATH에 설치한 actionlint 1.7.12로 모든 GitHub Actions 워크플로의 참조·입력·표현식 등을 검사한다.
  별도 ShellCheck·Pyflakes 연동은 사용하지 않는다.
- 잠금 파일·외부 아이콘 데이터·의존성·생성 결과·작업 폴더는 제외한다.
  자체 favicon manifest와 숨김 설정 파일은 포함한다.
- HTML·Markdown의 front matter와 코드 예제는 이 명령으로 다시 포맷하지 않는다.
  각 문서 포맷터의 기존 보존 규칙을 유지한다.

## 변경과 검증

- 데이터의 값·순서·자료형과 YAML 앵커·블록 문자열의 의미를 보존한다.
  워크플로 조건·권한·실행 순서·커밋 후 검사·배포 차단 흐름은 포맷 변경으로 바꾸지 않는다.
- 구문 오류·중복 키·앵커 오류·잘못된 워크플로 참조는 자동으로 추측해서 고치지 않는다.
  가능한 포맷 수정을 먼저 커밋하고 최종 검사에서 남은 오류를 실패로 처리해야 한다.
- 수정 후 모든 기존 검사와 Jekyll 빌드를 실행하고 두 번째 수정에 추가 변경이 없는지 확인한다.
  데이터·워크플로의 파싱 결과와 빌드 산출물을 변경 전후로 비교한다.
- 승인 전에는 파일 수정과 로컬 검증까지만 진행한다.
  CI 연결 후에는 실제 자동 수정·원격 커밋과 남은 오류의 배포 차단을 검증하고 테스트 이력을 제거한다.
- CI는 고정 버전 yamllint와 SHA-256을 검증한 actionlint를 설치한다.
  데이터 포맷 수정은 기존 자동 커밋 전에 실행하고, 커밋 후 데이터·워크플로 검사에 실패하면 빌드·배포를 시작하지 않는다.
- `.github/workflows/`는 자동 수정에서 제외한다.
  Biome와 인코딩 수정기는 이 경로를 변경하지 않으며, yamllint·actionlint·UTF-8 검사로 오류를 검출한다.
