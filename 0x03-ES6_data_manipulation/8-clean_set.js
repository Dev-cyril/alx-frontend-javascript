export default function cleanSet (set, string) {
	let txt = ''
	for (const item of set) {
		if (string in item) {
			item.replace(string, '')
			txt += item + '-';
		}
	}
	return (txt.slice(0, -1));
}
