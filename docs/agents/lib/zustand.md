---
title: zustand
description: zustand 저장소와 슬라이스 규칙. 화면 전역 상태를 더할 때
---

# zustand

## 규칙
- 저장소는 `src/shared/store/rootStore.ts`의 `useStore` 하나다. 상태는 슬라이스로 나눠 여기에 펼쳐 넣는다.
- 슬라이스는 상태 타입(`xxx.state.ts`)과 만드는 함수(`slice.ts`)로 둔다. 만드는 함수 타입은 `SlicePattern<XxxState, BoundState>`다.
- 새 슬라이스는 `rootStore.ts`에 `...createXxxSlice(...a)`를 더하고 `BoundState`에 타입을 더한다.
- 상태는 immer 미들웨어로 고친다(`set((state) => { state.x = … }, false, "영역/동작")`). 세 번째 인자는 devtools에 보이는 동작 이름이다.
- devtools는 개발 모드에서만 켜진다.
- 기능 하나에만 쓰는 슬라이스는 `src/domain/<이름>/store/`에 둔다.
