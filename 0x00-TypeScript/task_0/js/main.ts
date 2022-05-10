interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Peter',
	lastName: 'Parker',
	age: 20,
	location: 'New York'
}

const student2: Student = {
	firstName: 'Barry',
	lastName: 'Allen',
	age: 25,
	location: 'Los Angeles'
}

const studentsList: Array<Student> = [student1, student2];
const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table);

const tableHead: HTMLTableSectionElement = document.createElement('thead');
tableHead.innerHTML = '<tr><th>firstName</th><th>location</th></tr>';
table.appendChild(tableHead);
const tableBody: HTMLTableSectionElement = document.createElement('tbody');
table.appendChild(tableBody);
for (let i: number = 0; i < studentsList.length; i++) {
	const row: HTMLTableRowElement = document.createElement('tr');
	const th1: HTMLTableCellElement = document.createElement('th');
	const th2: HTMLTableCellElement = document.createElement('th');
	th1.innerHTML = studentsList[i].firstName;
	th2.innerHTML = studentsList[i].location;
	row.appendChild(th1);
	row.appendChild(th2);
	tableBody.appendChild(row);
}
