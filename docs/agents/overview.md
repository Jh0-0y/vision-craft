---
title: 개요
description: 프로젝트 소개와 기술 버전. 처음 시작할 때, 버전을 확인할 때
---

# 개요

VisionCraft 데스크탑 앱. 지금은 Tauri 2와 React로 된 시작 틀이고, 메인 창에 hello 화면 하나가 뜬다.

## 데스크탑 앱

| 구분 | 무엇 | 버전 |
|---|---|---|
| 앱 틀 | Tauri | 2.12 |
| 화면 | React | 19.3 |
| 언어(화면) | TypeScript | 6.0 |
| 번들러 | Vite | 8.3 |
| 언어(앱) | Rust | 1.100 (edition 2024) |
| 런타임·패키지 | Node, yarn | 26, 4.18.1 |
| 로컬 DB | SQLite (rusqlite) | 0.40 |
| 지원 OS | macOS(Apple Silicon), Windows(x64) | 릴리스 스크립트 기준 |

도구 버전은 `mise.toml`이 정한다.

주요 라이브러리: [Tauri](lib/tauri.md), [React Query](lib/react-query.md), [zustand](lib/zustand.md), [rusqlite](lib/rusqlite.md), [Vite](lib/vite.md), [TypeScript](lib/typescript.md), [ESLint](lib/eslint.md), [Prettier](lib/prettier.md)

## 그 밖의 영역

미정
