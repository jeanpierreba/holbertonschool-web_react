interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	[propName: string]: any
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName[0]}. ${lastName}`;
};

interface studentConstructor {
	new(firstName: string, lastName: string): studentClassInterface;
}

interface studentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

const studentClass: studentConstructor = class studentClass implements studentClassInterface {
	firstName: string;
	lastName: string;
	
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework() {
		return "Currently working";
	}

	displayName() {
		return `${this.firstName}`;
	}
}

export {
	printTeacher,
	studentClass
}
