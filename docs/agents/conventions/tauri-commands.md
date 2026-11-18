---
title: Tauri 명령
description: 화면과 Rust 사이 명령 호출 규칙. Rust 명령을 더하거나 부를 때
---

# Tauri 명령

## 규칙
- 화면은 `@/shared/api`의 `call<T>(명령, 인자)`로만 Rust를 부른다. `call()`은 실패를 `AppError`로 바꿔 던진다.
- 명령 하나에 `domain/<이름>/apis/<이름>.ts`의 함수 하나를 둔다(`getTheme`, `setTheme` …). 인자·반환 타입은 같은 폴더 `<이름>.dto.ts`에 둔다.
- Rust 명령은 `domain/<이름>/commands.rs`에 얇게 둔다: 상태를 꺼내 `mod.rs`의 함수를 부르고, 필요하면 이벤트를 보낸다. 로직은 `mod.rs`에 둔다.
- 반환은 `AppResult<T>`다. 앱 껍데기 명령 중 플러그인 오류를 그대로 넘기는 것(`autostart.rs`, `updater.rs`)은 `Result<_, String>`을 쓴다.
- 새 명령은 `src-tauri/src/lib.rs`의 `generate_handler!` 목록에 등록한다.
- 명령 이름은 Rust 함수 이름(snake_case)이고, 화면 함수 이름은 camelCase다(`get_theme` ↔ `getTheme`).
- Rust와 화면이 같은 모양을 써야 하는 타입은 Rust 쪽 `serde` 설정(`rename_all`)과 `*.dto.ts`를 함께 고친다.
