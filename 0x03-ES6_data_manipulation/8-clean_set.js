export default function cleanSet(set, string) {
  let txt = '';
  for (const item of set) {
    if (string.length > 0 && item.includes(string)) {
      txt += `${item.replace(string, '')}-`;
    }
  }
  return (txt.slice(0, -1));
}
