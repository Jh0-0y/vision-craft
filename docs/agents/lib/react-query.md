---
title: React Query
description: React Query 사용 규칙. Rust에서 읽는 값을 화면에 쓸 때
---

# React Query

## 규칙
- `QueryClient`는 창마다 하나다(`src/shared/components/queries/RQProvider.tsx`). 기본값: `staleTime` 60초, `gcTime` 120초, 창 포커스 때 다시 읽지 않음.
- 읽기 훅은 `useXxx()`로 `useQuery`를 감싸고, 쓰기 훅은 `useXxxUpdate({ onSuccess, onError })`로 `useMutation`을 감싼다. 훅은 쓰기 좋은 이름으로 값을 돌려준다(`{ theme, isLoading }`, `{ updateTheme, isLoading }`).
- 쓰기가 성공하면 다시 읽지 않고 `setQueryData`로 캐시를 바로 고친다.
- 쓰기 훅의 인자 타입은 `@/shared/queries`의 `QueryMutationHandle<T>`다.
- devtools는 개발 모드에서만 붙는다.
