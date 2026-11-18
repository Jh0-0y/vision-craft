---
title: 버전
description: 버전 번호와 버전 올리기, 릴리스. 버전을 올리거나 릴리스할 때
---

# 버전

## 규칙
- 버전은 `X.Y.Z` 숫자 세 개다.
- 버전은 네 곳에 있고 함께 움직인다: `src-tauri/tauri.conf.json`(기준), `package.json`, `src-tauri/Cargo.toml`, `src-tauri/Cargo.lock`. 바꿀 때는 네 곳을 함께 바꾼다.
- 릴리스 태그는 `v<버전>`이다.

## 미정
- 버전을 올리는 때와 방법 (자동 올림 워크플로와 스크립트는 2026-11-18에 지웠다)

## 릴리스 (정리 전)
- `scripts/release-macos.sh`: Apple Silicon 빌드, 서명·공증, GitHub 초안 릴리스에 업로드
- `scripts/release-windows.ps1`: Windows 설치 파일 빌드, 같은 릴리스에 업로드
- `scripts/latest-json.mjs <태그>`: 릴리스의 `.sig`로 `latest.json`을 만들어 업로드
- 업데이트 공개키(`pubkey`)가 비어 있어 아직 릴리스할 수 없다. 절차와 담당은 미정.
