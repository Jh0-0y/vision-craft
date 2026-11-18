---
title: PR
description: PR 대상 브랜치, 제목·본문과 버전 표시. PR을 열 때
---

# PR

## 규칙
- 작업 브랜치의 PR은 `develop`으로 올린다. `main`으로 바로 올리지 않는다([branching](branching.md)).
- AI 작성자 표시를 넣지 않는다. 제목과 본문 모두 해당한다. 자세한 것은 [forbidden](../forbidden.md).

## 저장소에서 확인되는 것
- `develop`에 PR이 머지되면 `bump-version.yml`이 버전을 올리는 커밋을 `develop`에 넣는다.
- 버전 크기는 머지된 PR의 제목과 라벨로 정한다. 제목에 `[major]` 또는 라벨 `major` → major, `[minor]` 또는 라벨 `minor` → minor, 그 밖은 patch.
- PR 번호는 머지 커밋 메시지(`Merge pull request #N …`) 또는 스쿼시 커밋 끝(`(#N)`)에서 읽는다.

## 미정
- 제목·본문 형식, 리뷰 규칙
- `develop` → `main` PR의 때와 방법
