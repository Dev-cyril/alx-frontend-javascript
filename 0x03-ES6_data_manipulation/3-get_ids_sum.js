export default function getStudentIdsSum (getListStudents) {
	const result = getListStudents.id.reduce(
		(acc, curr) => acc + curr, 0,
	);
	return result;
}
