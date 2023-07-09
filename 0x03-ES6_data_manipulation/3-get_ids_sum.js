export default function getStudentIdsSum(getListStudents) {
  const arr = [];
  if (Array.isArray(getListStudents)) {
    getListStudents.map((e) => (
      arr.push(e.id)
    ));
  }

  const result = arr.reduce(
    (acc, curr) => acc + curr, 0,
  );
  return result;
}
