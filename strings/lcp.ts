export function lcp(s: string, t: string) {
  const n = Math.min(s.length, t.length);
  for (let i = 0; i < n; i++) {
    if (s.charAt(i) !== t.charAt(i)) {
      return i;
    }
  }
  return n;
}
