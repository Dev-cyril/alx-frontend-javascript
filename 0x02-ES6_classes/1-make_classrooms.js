import ClassRoom from "./classroom.js";

export default function initializeRooms() {
  const fs = new ClassRoom(19);
  const sec = new ClassRoom(20);
  const th = new ClassRoom(34);

  const arr = [fs, sec, th];

  return arr;
}
