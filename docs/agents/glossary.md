---
title: 용어
description: 도메인 용어와 코드 이름. 낯선 이름을 만났을 때
---

# 용어

## 코드 이름

| 이름 | 뜻 |
|---|---|
| greeting | hello 화면에 보이는 인사말. SQLite `settings` 표의 `greeting` 키 |
| `ThemePref` / `Theme` | 테마 선택: `system`, `light`, `dark` (프런트 / Rust) |
| `LocalePref` | 언어 선택: `system`, `en`, `ko`. `system`은 OS 언어를 따른다 |
| `AppError` | Rust 명령의 오류. `{ code, message }`. 코드는 `INVALID_INPUT`, `DB`, `IO`, `SCHEMA_TOO_NEW` (프런트에서 알 수 없는 오류는 `UNKNOWN`) |
| `UpdateStatus` | 업데이트 상태: `idle`, `checking`, `upToDate`, `ready`, `failed` |
| `main`, `settings` | 창 라벨 |
| `AppState` | Rust 공유 상태(SQLite 연결) |
| `UpdateState` | Rust 업데이트 상태와 받아 둔 업데이트 |

## 도메인 용어

미정
