---
title: 창 사이 이벤트
description: Rust 이벤트로 창 사이 상태를 맞추는 규칙. 여러 창이 같은 값을 써야 할 때
---

# 창 사이 이벤트

## 규칙
- 이벤트 이름은 `<영역>://<이름>`이다. 예: `settings://theme-changed`, `settings://locale-changed`, `update://status`.
- 이름은 Rust 쪽 상수(`THEME_CHANGED`, `UPDATE_STATUS` 등)로 둔다.
- 값을 바꾸는 Rust 명령이 모든 창에 이벤트를 보낸다(`app.emit`). 화면은 `listen`으로 받아 React Query 캐시에 `setQueryData`로 넣는다.
- `listen`은 `useEffect` 안에서 부르고, 정리할 때 해제한다.

## 왜
- Tauri 창마다 JS 실행 환경과 React Query 캐시가 따로다. 한 창에서 바꾼 값은 이벤트 없이는 다른 창에 보이지 않는다.
