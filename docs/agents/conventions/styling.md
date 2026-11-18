---
title: 화면 꾸미기
description: CSS를 쓰는 규칙. 화면을 만들거나 스타일을 바꿀 때
---

# 화면 꾸미기

## 규칙
- 네이티브 CSS + CSS Modules로 꾸민다. 컴포넌트 스타일은 컴포넌트 옆 `<이름>.module.css` 하나에 두고 `import styles from "@/<경로>/<이름>.module.css"`로 가져와 `className={styles.<클래스>}`로 쓴다.
- `src/app/globals.css`에는 색이 아닌 바탕 규칙만 둔다(높이, 여백, 텍스트 선택, `color-scheme`).
- 디자인 토큰과 색은 CSS 변수로 한 곳에 둔다. 컴포넌트 CSS는 그 변수만 쓰고 색 값을 직접 쓰지 않는다.
- 토큰 파일 위치와 값: 미정
- CSS 프레임워크(Tailwind, daisyUI 등)는 쓰지 않는다.

## 테마
- `ThemeProvider`가 `<html data-theme="light|dark">`을 정한다. CSS는 이 속성을 보고 바꾼다. 지금은 `color-scheme`만 바꾼다.
