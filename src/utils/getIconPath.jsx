
export function getIconPath(key) {
  const filename = key.replace(/\s+/g, '').toLowerCase(); // or remove `.toLowerCase()` if not needed
  return `/icons/${filename}.svg`;
}
