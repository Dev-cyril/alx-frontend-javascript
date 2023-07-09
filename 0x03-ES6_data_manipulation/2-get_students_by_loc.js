export default function getStudentsByLocation(array, location) {
  const result = array.filter((nm) => nm.location === location);
  return result;
}
