---
title: 브랜치
description: 브랜치를 따는 곳과 흐름. 브랜치를 만들 때
---

# 브랜치

## 규칙
- 작업은 `develop`에서 브랜치를 따서 한다.
- 작업 브랜치는 `develop`으로 PR을 올린다([pr](pr.md)).
- `main`에서 직접 작업하지 않는다.

## 저장소에서 확인되는 것
- 원격 브랜치는 `main`과 `develop`이다. GitHub 기본 브랜치는 `main`이다.
- 지금까지의 작업 브랜치 이름 모양: `chore/remove-template-docs`, `chore/strip-template`, `docs/branching-rule` (`종류/설명`).
- `.github/workflows/bump-version.yml`은 `develop`과 `main`에 push될 때 돈다.
  - `develop`: 머지된 PR마다 버전을 올리는 커밋(`chore: bump version to X.Y.Z [skip ci]`)을 `develop`에 push한다. `main`에서 온 PR(역머지)만 건너뛴다.
  - `main`: `hotfix/*` 브랜치에서 온 PR만 버전을 올린다.

## 미정
- 브랜치 이름 규칙(종류 목록)
- `develop`을 `main`에 올리는 때와 방법
- `hotfix/*` 브랜치를 쓰는지와 그 흐름
