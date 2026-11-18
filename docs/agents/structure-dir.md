---
title: 폴더 구조
description: 폴더별 역할. 파일을 어디에 둘지 정할 때
---

# 폴더 구조

| 폴더 | 역할 |
|---|---|
| `src/app/` | 진입점 `main.tsx`, 화면 `App.tsx`(+`App.module.css`), 바탕 CSS `globals.css` |
| `src/domain/<이름>/apis/` | Rust 명령을 부르는 함수(`<이름>.ts`)와 주고받는 타입(`<이름>.dto.ts`) |
| `src/domain/<이름>/queries/` | React Query 훅(`<이름>.tsx`) |
| `src/domain/<이름>/components/` | 그 기능의 화면 조각 |
| `src/domain/<이름>/store/` | 그 기능의 zustand 슬라이스 자리(지금은 비어 있음) |
| `src/shared/api/` | Rust 호출 창구 `call()`과 `AppError` 타입 |
| `src/shared/providers/` | 테마(`theme/`), 언어(`i18n/`) 공급자 |
| `src/shared/i18n/` | 화면 문구 사전(`en.ts`, `ko.ts`)과 언어 결정(`locale.ts`) |
| `src/shared/store/` | zustand 저장소(`rootStore.ts`)와 공용 슬라이스(`error/`) |
| `src/shared/components/queries/` | React Query 공급자 |
| `src/shared/queries/`, `src/shared/hooks/` | 공용 쿼리 타입, 공용 훅 |
| `src/utils/` | 순수 함수와 그 테스트(`*.test.ts`) |
| `src-tauri/src/app/` | 앱 껍데기: `window.rs`, `tray.rs`, `menu.rs`, `autostart.rs`, `updater.rs`, `i18n.rs`(트레이·메뉴 문구), `state.rs` |
| `src-tauri/src/domain/<이름>/` | `commands.rs`(Tauri 명령), `mod.rs`(로직), `model.rs`, `repository.rs`(SQL) |
| `src-tauri/src/shared/` | `db.rs`(연결·마이그레이션), `migrations/`, `error.rs` |
| `src-tauri/capabilities/` | 창별 권한 |
| `src-tauri/icons/` | 앱·트레이 아이콘 |
| `scripts/` | 릴리스 스크립트와 그 테스트 |
| `docs/agents/` | 이 지침 |

`@/`는 `src/`를 가리킨다(`tsconfig.json`, `vite.config.ts`).
