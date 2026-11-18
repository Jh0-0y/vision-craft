---
title: ESLint
description: 린트 규칙. 린트를 돌리거나 규칙을 바꿀 때
---

# ESLint

## 규칙
- 설정은 `eslint.config.mjs` 하나다. `**/*.{ts,tsx}`에 권장 설정 세 개만 쓴다: `@eslint/js` recommended, `typescript-eslint` recommended, `eslint-plugin-react-hooks` recommended. 다른 규칙은 더하지 않는다.
- 린트 대상은 `src/`다(`yarn lint` = `eslint ./src`).
- `eslint-plugin-react-hooks` 권장 설정에는 훅 규칙 두 개와 React Compiler 규칙(예: `set-state-in-effect`, `purity`, `refs`)이 함께 들어 있다.
- `eslint`는 9, `@eslint/js`는 9로 맞춘다(`@eslint/js` 10은 `eslint` 10을 요구한다).
