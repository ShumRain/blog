# AGENTS.md

Guidance for coding agents working on ShumRain Blog.

## Priorities

1. Follow direct user instructions first.
2. Keep changes minimal, targeted, and consistent with the existing code.
3. Preserve the free-tier setup unless the user explicitly asks to enable paid or token-backed services.

## Commands

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm build
pnpm dev
pnpm deploy:vinext
```

The first version intentionally leaves AI chat, analytics, comments, social fetching, KV, and paid image services disabled.
