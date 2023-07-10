export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateName(name);
    this._length = this._validateLength(length);
    this._students = this._validateStudent(students);
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = this._validateName(value);
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = this._validateLength(value);
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }
  set students(value) {
    this._students = this._validateStudent(value);
  }

  // Validation for name
  _validateName(name) {
    if (typeof name === 'string') {
      return name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Validation for length
  _validateLength(length) {
    if (typeof length === 'number') {
      return length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Validation for students
  _validateStudent(student) {
    if (Array.isArray(student) && student.every((item) => typeof item === 'string')) {
      return student;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
