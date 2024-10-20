export interface Employee {
    id: number;
    name: string;
    department: string;
    department_id: number;
    salary: number;
    hire_date: Date;
    designation: string;
}

export class EmployeeClass implements Employee {
    constructor(
        public id: number,
        public name: string,
        public department: string,
        public department_id: number,
        public salary: number,
        public hire_date: Date,
        public designation: string
    ) {}
}
