---
title: TypeScript
description: TypeScript 설정과 쓰는 규칙. 타입이나 import를 쓸 때
---

# TypeScript

## 규칙
- `strict`, `noUnusedLocals`, `noUnusedParameters`가 켜져 있다.
- `verbatimModuleSyntax`가 켜져 있어 타입만 가져올 때는 `import type`을 쓴다.
- `@/*`는 `src/*`다.
- 검사 대상은 `src/`와 `vite.config.ts`다. `scripts/`는 검사하지 않는다.
- `*.module.css` 타입은 `vite/client`가 알려 준다.
