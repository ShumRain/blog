/**
 * Shared URL parsing utilities.
 * Used by search-command and optional social URL parsing helpers.
 */

const X_HOSTS = new Set(["x.com", "twitter.com", "mobile.twitter.com"]);
const BLOG_HOSTS = new Set(["shumrain-blog.shumrainchen.workers.dev"]);

export function parseXUrl(rawUrl: string): URL | null {
  try {
    const url = new URL(rawUrl);
    const hostname = url.hostname.toLowerCase().replace(/^www\./, "");
    if (!X_HOSTS.has(hostname)) return null;
    return url;
  } catch {
    return null;
  }
}

export function extractTweetIdFromUrl(rawUrl: string): string | null {
  const url = parseXUrl(rawUrl);
  if (!url) return null;
  const match = url.pathname.match(/^\/(?:i\/status|[^/]+\/status)\/(\d+)/);
  return match?.[1] ?? null;
}

export function parseBlogUrl(rawUrl: string): URL | null {
  try {
    const url = new URL(rawUrl);
    const hostname = url.hostname.toLowerCase().replace(/^www\./, "");
    if (!BLOG_HOSTS.has(hostname)) return null;
    return url;
  } catch {
    return null;
  }
}
