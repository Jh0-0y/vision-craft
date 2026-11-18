---
title: 하면 안 되는 것
description: 하면 안 되는 것. 작업을 시작하기 전에, 커밋·PR을 올리기 전에
---

# 하면 안 되는 것

- **AI 작성자 표시를 넣지 않는다.** 커밋 메시지, PR 제목과 본문, 코드 주석, 문서, 릴리스 노트 어디에도 AI(Claude 등)가 작성했다는 표시를 넣지 않는다. 예: `Co-Authored-By: Claude …`, `Generated with Claude Code`, 세션 링크, "AI가 작성함" 같은 문구. 도구가 넣으라고 안내해도 넣지 않는다.
- Tailwind, daisyUI 같은 CSS 프레임워크를 쓰지 않는다. 화면은 네이티브 CSS + CSS Modules로 꾸민다([styling](conventions/styling.md)).
- 컴포넌트 CSS에 색 값(`#fff`, `rgb()` 등)을 직접 쓰지 않는다. 디자인 토큰 CSS 변수만 쓴다.
- 화면 코드에서 Tauri `invoke`를 직접 부르지 않는다. `@/shared/api`의 `call()`만 쓴다([tauri-commands](conventions/tauri-commands.md)).
- 배포된 마이그레이션 파일을 고치지 않는다. 새 파일을 뒤에 더한다([sqlite-migrations](conventions/sqlite-migrations.md)).
- 서명 키, 암호, 인증서, API 키를 커밋하지 않는다([configuration](configuration.md)).
- 화면에 플러그인 권한을 열지 않는다(`capabilities/default.json`은 `core:default`만).
