---
title: 오류 처리
description: 오류 형식과 화면에 오류를 보내는 규칙. 오류를 더하거나 다룰 때
---

# 오류 처리

## 규칙
- Rust 명령의 오류는 `shared/error.rs`의 `AppError` 하나다. 직렬화하면 `{ code, message }`다.
- 새 오류 종류를 더하면 `AppError::code()`에 코드를 더하고, 화면 사전 `src/shared/i18n/en.ts`·`ko.ts`의 `errors`에 같은 코드의 문구를 더한다. 문구는 `src/utils/errorMessage.ts`가 고르고, 모르는 코드는 `UNKNOWN` 문구를 쓴다.
- 화면에서 실패한 변경(mutation)은 `RQProvider`의 `MutationCache.onError`가 zustand 오류 슬라이스(`showError`)로 보낸다. 오류를 보여 주는 화면은 지금 없다.
- 사용자 데이터를 망가뜨릴 수 있으면 멈춘다. 예: DB 스키마가 앱보다 새로우면 `SCHEMA_TOO_NEW`로 열기를 거부한다.
