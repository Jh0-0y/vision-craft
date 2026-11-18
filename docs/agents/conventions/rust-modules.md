---
title: Rust 모듈 구조
description: Rust 코드를 나누는 규칙. Rust 파일을 더할 때
---

# Rust 모듈 구조

## 규칙
- `app/`은 앱 껍데기(창, 트레이, 메뉴, 자동 실행, 업데이트, 공유 상태)다. 기능 로직을 넣지 않는다.
- 기능은 `domain/<이름>/`에 둔다: `commands.rs`(Tauri 명령), `mod.rs`(다른 코드가 쓰는 공개 함수), `model.rs`(타입), `repository.rs`(SQL만).
- `shared/`는 `tauri`를 import하지 않는다.
- 테스트는 같은 파일 아래 `#[cfg(test)] mod tests`에 둔다. DB 테스트는 `shared::db::open_in_memory()`를 쓴다.
- 포맷은 `src-tauri/rustfmt.toml`(edition 2024, 줄 100자, Unix 줄바꿈)을 따른다.
