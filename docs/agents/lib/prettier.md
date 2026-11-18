---
title: Prettier
description: 코드 포맷 규칙. 포맷을 맞추거나 검사할 때
---

# Prettier

## 규칙
- Prettier 기본값을 쓴다. 설정 파일은 없다.
- `.prettierignore`에 `docs/`가 있다. `.gitignore`에 있는 것도 Prettier가 건너뛴다.
- 커밋 전에 `yarn exec prettier --check .`가 통과해야 한다.
- Prettier가 다루지 않는 파일(`.rs`, `.sh`, `.ps1`, `.toml`)은 해당 도구의 규칙을 따른다(Rust는 `rustfmt.toml`).
