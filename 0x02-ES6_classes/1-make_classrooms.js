import ClassRoom from "./0-classroom.js";

export default function initializeRooms (){

	const fs = new ClassRoom(19);
	const sec = new ClassRoom(20);
	const th = new ClassRoom(34);

	const arr = [
		`ClassRoom { _maxStudentsSize: ${fs._maxStudentsSize }}`,
		`ClassRoom { _maxStudentsSize: ${sec._maxStudentsSize }}`,
		`ClassRoom { _maxStudentsSize: ${th._maxStudentsSize} }`
	];

	return (arr);
}

