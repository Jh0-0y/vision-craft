# VisionCraft

VisionCraft 데스크탑 앱의 저장소다. 지금은 Tauri 2와 React 19(TypeScript, Vite)로 된 시작 틀이다. 앱을 실행하면 메인 창에 hello 화면 하나가 뜬다.

## 필요한 도구

도구 버전은 [`mise.toml`](mise.toml)에 있다: Node 26, yarn 4.18.1, Rust 1.100.

```bash
mise install
```

셸에서 mise를 켜지 않았다면 아래 명령 앞에 `mise exec --`를 붙인다(예: `mise exec -- yarn install`).

macOS에서는 Xcode Command Line Tools도 필요하다.

## 설치와 실행

```bash
yarn install
yarn tauri dev
```

`yarn tauri dev`는 Vite 개발 서버(포트 1420)를 띄운 뒤 Rust 쪽을 빌드해 앱을 실행한다.

## 검사

프런트엔드:

```bash
yarn typecheck                # tsc --noEmit
yarn test                     # node --test (src/**/*.test.ts, scripts/*.test.mjs)
yarn lint                     # ESLint: @eslint/js, typescript-eslint, react-hooks 권장 설정
yarn exec prettier --check .  # Prettier 기본 설정, docs/는 .prettierignore로 제외
```

Rust:

```bash
cd src-tauri
cargo check
cargo test
```

## 폴더 구조

```
src/                    프런트엔드 (React)
  app/                  진입점(main.tsx), hello 화면(App.tsx, App.module.css), 바탕 CSS(globals.css)
  domain/<이름>/        기능별 코드: apis(Rust 명령 호출), queries(React Query 훅), components
  shared/               공용: api(Rust 호출 창구), providers(테마·언어), i18n(사전), store(zustand), components/queries(React Query 공급자)
  utils/                순수 함수와 테스트
src-tauri/              Rust (Tauri)
  src/app/              앱 껍데기: 창, 트레이, macOS 메뉴, 자동 실행, 자동 업데이트, 공유 상태
  src/domain/<이름>/    기능별 코드: commands(Tauri 명령), repository(SQL), model
  src/shared/           SQLite 연결과 마이그레이션, 오류 형식
  tauri.conf.json       창, 번들, 업데이트 설정
  capabilities/         창별 권한
scripts/                릴리스와 버전 스크립트, 그 테스트
```

`@/`는 `src/`를 가리킨다.

## 들어 있는 것

화면은 hello 하나뿐이다. 나머지는 화면 없이 로직만 들어 있다.

- **hello 화면**: SQLite(`app.db`)에 저장된 인사말을 Rust 명령 `get_greeting`으로 읽어 보여 준다. Rust와 프런트엔드가 이어져 있는지 확인하는 용도다.
- **테마**: 시스템·밝게·어둡게. 저장된 값에 따라 `ThemeProvider`가 `<html data-theme>`을 바꾸고, `globals.css`의 `color-scheme`이 그 값을 따른다. 시스템 설정이 바뀌거나 다른 창에서 바꿔도 따라간다.
- **언어**: 시스템·한국어·영어. `I18nProvider`와 사전(`src/shared/i18n`)이 있다. 트레이와 macOS 메뉴 문구는 Rust 쪽(`src-tauri/src/app/i18n.rs`)에 따로 있다.
- **설정 저장**: 테마, 언어, 자동 업데이트 여부를 SQLite에 저장한다. 데이터베이스는 OS의 앱 데이터 폴더에 생기고, 스키마는 `src-tauri/src/shared/migrations/`의 순서대로 적용된다.
- **로그인 시 자동 실행**: 켜고 끄는 Rust 명령과 쿼리 훅이 있다.
- **자동 업데이트 확인**: 앱이 GitHub Releases의 `latest.json`을 앱 시작 때와 6시간마다 확인하고 새 버전을 받아 둔다. 트레이에서 설치·재시작한다. 디버그 빌드에서는 주기 확인을 하지 않는다.
- **창과 트레이**: 창을 닫으면 숨기고 트레이에 남는다. 트레이 메뉴는 열기, 설정, 업데이트 확인, 종료다. 두 번째 실행은 기존 창을 앞으로 가져온다.
- **Rust 호출 창구와 오류**: 프런트엔드는 `src/shared/api`의 `call()`로만 Rust 명령을 부른다. 오류는 `{ code, message }` 모양으로 온다.
- **상태 관리**: Rust에서 읽은 값은 React Query로 캐시하고, 앱 전역 상태는 zustand(immer 미들웨어)로 둔다. 지금은 마지막 오류 하나만 담는다.

## 화면 꾸미기

네이티브 CSS와 CSS Modules(`*.module.css`)를 쓴다. 컴포넌트 라이브러리, 디자인 토큰, 색은 들어 있지 않다. `globals.css`에는 높이, 여백, 텍스트 선택, `color-scheme` 같은 바탕 규칙만 있다.

## 릴리스

릴리스 스크립트가 들어 있지만 아직 정리 전이다. 업데이트 서명용 공개키(`tauri.conf.json`의 `plugins.updater.pubkey`)가 비어 있어 지금 상태로는 자동 업데이트가 동작하지 않는다.

- [`bump-version-up.sh`](bump-version-up.sh): `tauri.conf.json`, `package.json`, `Cargo.toml`, `Cargo.lock`의 버전을 함께 올린다. [`.github/workflows/bump-version.yml`](.github/workflows/bump-version.yml)이 `develop`·`main`에 머지될 때 이 스크립트를 실행한다.
- [`scripts/release-macos.sh`](scripts/release-macos.sh): Apple Silicon용으로 빌드하고, 서명·공증한 뒤 GitHub 초안 릴리스에 올린다.
- [`scripts/release-windows.ps1`](scripts/release-windows.ps1): Windows 설치 파일을 빌드해 같은 릴리스에 올린다.
- [`scripts/latest-json.mjs`](scripts/latest-json.mjs): 릴리스에 올라온 서명 파일로 `latest.json`을 만들어 올린다.

## 프로젝트 지침

코드 규칙과 작업 방법은 [AGENTS.md](AGENTS.md)에서 시작한다.
