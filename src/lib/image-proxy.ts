function normalizeSource(url: string): string {
  const source = url.trim();
  if (!source) return "";
  if (source.startsWith("//")) {
    return `https:${source}`;
  }
  return source;
}

export function getProxiedImage(
  url?: string,
  _variant?: string,
): string {
  void _variant;
  if (!url) return "";
  return normalizeSource(url);
}
