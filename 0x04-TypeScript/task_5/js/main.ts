interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student {
  firstName: 'Cyril';
  lastName: 'Idu';
  age: 77;
  location: 'Nigeria';
}

const student2: Student {
  firstName: 'James';
  lastName: 'Odum';
  age: 10;
  location: 'London';
}

let studentsList: Student [] = [student1, student2]

const table = document.createElement('table');
const table_bdy = document.createElement('tbody');
table.appendChild(table_bdy);

for (const item of studentsList) {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = item.firstName;
  locationCell.textContent = item.location;

  row.appendChild(nameCell)
  row.appendChild(locationCell)

  table_bdy.appendChild(row);
}

document.body.appendChild(table);
