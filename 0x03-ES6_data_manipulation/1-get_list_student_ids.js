export default function getListStudentIds (array) {
	let arr = [];
	array.map((e) => (
		arr.psuh(e.id)
	))
	return arr
}
