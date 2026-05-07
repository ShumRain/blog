# ShumRain Blog

Personal blog for ShumRain, built with React, Vinext, and Cloudflare Workers.

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Deploy

```bash
pnpm exec wrangler login
pnpm deploy:vinext
```

The first version is configured for the Cloudflare Workers free tier and does not enable AI chat, analytics, comments, Telegram, Twitter fetching, KV, or paid image services.
