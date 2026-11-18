---
title: rusqlite
description: SQLite 접근 규칙. DB를 읽고 쓸 때
---

# rusqlite

## 규칙
- `rusqlite`는 `bundled`로 SQLite를 함께 빌드한다.
- 연결은 하나를 `AppState.db: Mutex<Connection>`로 공유한다. 명령에서 `state.db.lock()`으로 꺼낸다.
- SQL은 `domain/<이름>/repository.rs`에만 쓴다. 값은 `params!`나 `?1`로 넘긴다(문자열을 이어 붙이지 않는다).
- 스키마 변경은 [sqlite-migrations](../conventions/sqlite-migrations.md).
