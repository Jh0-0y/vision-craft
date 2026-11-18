---
title: 빌드·실행
description: 빌드·실행·테스트 명령. 명령을 실행할 때
---

# 빌드·실행

처음 한 번 `mise install`로 도구를 설치한다. 셸에서 mise를 켜지 않았으면 명령 앞에 `mise exec --`를 붙인다.

| 할 일 | 명령 |
|---|---|
| 도구 설치 | `mise install` |
| 의존성 설치 | `yarn install` |
| 개발 실행 | `yarn tauri dev` (Vite 1420 포트 + Rust 빌드 후 앱 실행) |
| 타입 검사 | `yarn typecheck` |
| 프런트·스크립트 테스트 | `yarn test` (`node --test`) |
| 린트 | `yarn lint` (`src/`만) |
| 포맷 검사 | `yarn exec prettier --check .` |
| 포맷 고치기 | `yarn exec prettier --write .` |
| Rust 검사 | `cd src-tauri && cargo check` |
| Rust 테스트 | `cd src-tauri && cargo test` |

- `package.json`의 `prettier` 스크립트는 `src/`만 `--write`한다. 저장소 전체는 위 `yarn exec prettier` 명령을 쓴다.
- macOS 빌드에는 Xcode Command Line Tools가 필요하다.
- 릴리스 빌드: 미정([versioning](version/versioning.md))
