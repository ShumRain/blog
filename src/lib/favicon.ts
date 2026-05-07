export function getFaviconUrlForDomain(domain: string): string {
  const normalizedDomain = domain.trim().toLowerCase();
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(normalizedDomain)}&sz=32`;
}

export function getFaviconUrlForSite(siteUrl: string): string | null {
  if (!siteUrl) return null;

  try {
    return getFaviconUrlForDomain(new URL(siteUrl).hostname);
  } catch {
    return null;
  }
}
