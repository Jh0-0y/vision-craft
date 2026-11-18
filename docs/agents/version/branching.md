---
title: 브랜치
description: 브랜치 이름과 흐름. 브랜치를 만들 때
---

# 브랜치

## 저장소에서 확인되는 것
- 원격 기본 브랜치는 `main`이다.
- 지금까지의 작업 브랜치 이름 모양: `chore/remove-template-docs`, `chore/strip-template` (`종류/설명`).
- `.github/workflows/bump-version.yml`은 `develop`과 `main`에 push될 때 돈다. `main`에서는 `hotfix/*` 브랜치에서 온 PR만 버전을 올리고, `develop`에서는 `main`에서 온 PR(역머지)만 건너뛴다. 이 워크플로는 `develop` 브랜치를 전제로 하지만, 지금 원격에는 `develop`이 없다.

## 규칙

미정
