---
title: 프런트 코드 구조
description: 화면 코드를 나누는 규칙. 새 기능이나 파일을 더할 때
---

# 프런트 코드 구조

## 규칙
- 기능마다 `src/domain/<이름>/` 아래 `apis/`, `queries/`, `components/`, `store/`로 나눈다. 이름은 Rust의 `domain/<이름>/`과 맞춘다.
- 여러 기능이 쓰는 것은 `src/shared/`, 순수 함수는 `src/utils/`에 둔다.
- 쿼리 키는 배열 상수로 둔다(`["settings", "theme"]`). 다른 파일에서도 쓰는 키는 `export const XXX_QUERY_KEY`로 내보낸다.
- import는 `@/` 별칭으로 쓴다. 단, `node --test`로 테스트하는 파일(`src/utils/*`, `src/shared/i18n/locale.ts`)은 다른 파일을 `import type`으로만 가져온다. `node --test`는 별칭을 풀지 못하고, 타입 import는 실행 때 사라지기 때문이다.
- 테스트는 대상 옆 `<이름>.test.ts`에 두고 `node:test`, `node:assert/strict`로 쓴다. 테스트 파일은 상대 경로(`./theme.ts`)로 import한다.
- 진입점 `main.tsx`는 첫 그리기 전에 테마·언어를 읽어 캐시에 넣는다(깜빡임 방지).
