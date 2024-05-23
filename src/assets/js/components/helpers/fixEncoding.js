export function fixEncoding(str) {
  return str.replace(/&#039;+/g, "'").replace(/&quot;+/g, '"');
}
