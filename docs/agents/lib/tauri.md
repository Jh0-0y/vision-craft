---
title: Tauri
description: Tauri 2와 플러그인 사용 규칙. 창·트레이·플러그인을 다룰 때
---

# Tauri

## 규칙
- 플러그인은 `lib.rs`에서 등록한다: `single-instance`(맨 먼저), `log`, `autostart`(macOS LaunchAgent), `updater`.
- 화면 권한은 `core:default`만 연다. 플러그인 기능은 Rust 명령으로 감싸 화면에 준다.
- 창은 `tauri.conf.json`에서 `create: false`로 두고, `setup`에서 공유 상태(`AppState`)를 넣은 뒤 `window::build_all`로 만든다. 상태가 준비되기 전에 화면이 명령을 부르지 않게 하기 위해서다.
- 창을 닫으면 숨긴다(`hide_on_close`). 앱 종료는 트레이 "종료"로 한다.
- macOS만의 동작(앱 메뉴, Dock 클릭 시 창 다시 열기, 트레이 템플릿 아이콘)은 `#[cfg(target_os = "macos")]`로 나눈다.
- 번들 대상은 `app`, `dmg`, `nsis`이고 `createUpdaterArtifacts`가 켜져 있다.
