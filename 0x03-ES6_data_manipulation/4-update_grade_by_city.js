export default function updateStudentGradeByCity(list, city, grade) {
  const result = list.filter((nm) => nm.location === city);
  result.map((e) => {
    for (const f of grade) {
      e.grade = e.id === f.studentId ? f.grade : 'N/A';
    }
  });
  return result;
}
