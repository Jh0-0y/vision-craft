---
title: PR
description: PR 제목·본문과 버전 표시. PR을 열 때
---

# PR

## 규칙
- AI 작성자 표시를 넣지 않는다. 제목과 본문 모두 해당한다. 자세한 것은 [forbidden](../forbidden.md).

## 저장소에서 확인되는 것
- `bump-version.yml`이 머지된 PR의 제목과 라벨로 버전 크기를 정한다. 제목에 `[major]` 또는 라벨 `major` → major, `[minor]` 또는 라벨 `minor` → minor, 그 밖은 patch.
- PR 번호는 머지 커밋 메시지(`Merge pull request #N …`) 또는 스쿼시 커밋 끝(`(#N)`)에서 읽는다.

## 미정
- 대상 브랜치, 제목·본문 형식, 리뷰 규칙
