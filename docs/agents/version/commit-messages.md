---
title: 커밋 메시지
description: 커밋 메시지 모양. 커밋할 때
---

# 커밋 메시지

## 규칙
- AI 작성자 표시를 넣지 않는다(`Co-Authored-By: Claude …`, `Generated with Claude Code` 등). 자세한 것은 [forbidden](../forbidden.md).

## 저장소에서 확인되는 모양
- `종류: 설명` 한 줄, 영어, 소문자로 시작. 예: `docs: remove template docs`
- 본문이 필요하면 빈 줄 뒤에 쓴다.
- `[skip ci]`는 버전 올림 워크플로가 만드는 커밋(`chore: bump version to X.Y.Z [skip ci]`)에 붙는다. 이 표시가 있으면 워크플로가 다시 돌지 않는다.

## 미정
- 쓰는 종류 목록과 범위(scope) 표기
