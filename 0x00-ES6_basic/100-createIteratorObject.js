export default function createIteratorObject(report) {
  const list = [...Object.values(report.allEmployees)];
  let newList = [];
  for (const i of list) {
    newList = newList.concat(i);
  }
  return newList;
}
