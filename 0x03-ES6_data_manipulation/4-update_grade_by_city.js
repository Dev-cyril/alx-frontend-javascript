export default function updateStudentGradeByCity (list, city, grade) {
	const result = list.filter(nm => nm.location === city);
	result.map((e) => (
		grade.map((f) => (
			if (e.id == f.studentId) {
				e.grade = f.grade
			}
		));
	));
	return result;
}
