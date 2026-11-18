---
title: 설정과 비밀값
description: 설정 파일과 비밀값 다루는 규칙. 설정을 바꾸거나 더할 때
---

# 설정과 비밀값

## 규칙
- 앱 설정(창, 번들, 업데이트 주소·공개키, 식별자)은 `src-tauri/tauri.conf.json`에 둔다.
- 화면에 여는 권한은 `src-tauri/capabilities/default.json`에 둔다. 지금은 `core:default`만 연다. 시스템 기능은 플러그인 JS API를 열지 말고 Rust 명령으로 감싼다.
- 사용자가 바꾸는 앱 설정(테마, 언어, 자동 업데이트)은 SQLite `settings` 표(키·값)에 저장한다. 자동 실행 여부는 OS가 기준이다(DB에 저장하지 않음).
- 화면 코드에는 `VITE_`, `TAURI_ENV_`로 시작하는 환경 변수만 들어간다(`vite.config.ts`의 `envPrefix`).
- 업데이트 서명 비밀키와 암호, Apple 인증서·API 키는 저장소에 넣지 않는다. 릴리스 스크립트가 macOS 키체인·Windows 자격 증명 관리자·`~/.config/apple/`에서 읽는다.
- 도구 버전은 `mise.toml`에서만 바꾼다.

## 주의
- 식별자(`identifier`)를 바꾸면 앱 데이터 폴더가 바뀐다 → 이미 설치된 앱의 설정이 초기화된 것처럼 보인다.
- `plugins.updater.pubkey`가 비어 있으면 → 업데이트를 검증할 수 없어 자동 업데이트가 동작하지 않는다. 지금 비어 있다. 키를 만드는 명령은 `yarn tauri signer generate`.
