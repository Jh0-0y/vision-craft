---
title: 아키텍처
description: 프로젝트 전체 구조. 전체 구조를 알아야 할 때
---

# 아키텍처

## 데스크탑 앱

```
React 화면 (src/)
  └─ call("명령", 인자)  ── Tauri invoke ──▶  Rust 명령 (src-tauri/src/domain/<이름>/commands.rs)
                                               └─ 도메인 로직 (domain/<이름>/mod.rs)
                                                    └─ SQL (domain/<이름>/repository.rs) ─▶ SQLite app.db
  ◀─ 이벤트 (<영역>://<이름>) ── app.emit ───  Rust
```

- 화면은 Rust 명령으로만 데이터를 읽고 쓴다. 화면에는 시스템 권한(`core:default` 밖)을 열지 않는다.
- Rust는 두 층이다. `app/`은 앱 껍데기(창, 트레이, macOS 메뉴, 자동 실행, 자동 업데이트, 공유 상태)이고 도메인이 아니다. `domain/<이름>/`은 기능이다. 공용 기반은 `shared/`(DB, 오류)다.
- 프런트도 같은 이름으로 나눈다: `src/domain/<이름>/`이 Rust의 `domain/<이름>/`과 짝이다.
- 창은 `main`과 `settings` 두 개가 `tauri.conf.json`에 있다. 두 창 모두 `src/app/App.tsx`를 불러오고, 창 이름(`settings`)을 보고 설정 화면 또는 메인 화면을 고른다. 창마다 JS 실행 환경이 따로라, 창 사이 상태는 Rust 이벤트로 맞춘다([events](conventions/events.md)).
- 창을 닫으면 숨기고 트레이에 남는다. 앱은 하나만 뜬다(두 번째 실행은 기존 창을 앞으로).
- 앱 데이터는 OS의 앱 데이터 폴더(식별자 `com.ooy.app` 기준)의 `app.db`에 있다.
- 자동 업데이트는 GitHub Releases의 `latest.json`을 확인한다([versioning](version/versioning.md)).

## 그 밖의 영역

미정
