export default function getListStudentIds(array) {
  const arr = [];
  if (Array.isArray(array)) {
    array.map((e) => (
      arr.push(e.id)
    ));
  }
  return arr;
}
