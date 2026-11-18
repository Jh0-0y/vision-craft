---
title: Vite
description: Vite 개발 서버와 빌드 설정. 개발 서버나 빌드를 바꿀 때
---

# Vite

## 규칙
- 개발 서버 포트는 1420으로 고정한다(`strictPort`). `tauri.conf.json`의 `devUrl`과 같아야 한다.
- `docs/`는 감시하지 않는다. 문서가 바뀌어도 앱을 다시 불러오지 않게 하기 위해서다.
- 빌드 결과는 `dist/`이고 대상은 `es2022`다.
- 화면에 들어가는 환경 변수 접두어는 `VITE_`, `TAURI_ENV_`다.
