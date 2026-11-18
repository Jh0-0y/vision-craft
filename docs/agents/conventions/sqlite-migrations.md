---
title: SQLite 마이그레이션
description: DB 스키마를 바꾸는 규칙. 표나 열을 바꿀 때
---

# SQLite 마이그레이션

## 규칙
- 스키마는 `src-tauri/src/shared/migrations/NNNN_<설명>.sql` 파일로 바꾼다. 번호는 마지막 다음이다.
- 새 파일은 `shared/db.rs`의 `MIGRATIONS` 목록 끝에 더한다.
- 배포된 파일은 고치지 않는다. 바꿀 것이 있으면 새 파일을 더한다.
- 적용 위치는 `PRAGMA user_version`으로 기록한다. 파일 하나를 트랜잭션 하나로 적용한다.
- DB의 `user_version`이 앱이 아는 것보다 크면 열기를 거부한다(`SCHEMA_TOO_NEW`).
