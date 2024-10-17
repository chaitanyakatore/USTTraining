import { Employee, EmployeeClass } from './Employee';

export class EmployeeManager {
    private employees: EmployeeClass[] = [];

    constructor(initialEmployees: EmployeeClass[]) {
        this.employees = initialEmployees;
    }

    public addEmployee(employee: EmployeeClass): void {
        this.employees.push(employee);
    }

    public employeeSalaryByDepartment(department: string): number {
        return this.employees
            .filter(emp => emp.department === department)
            .reduce((total, emp) => total + emp.salary, 0);
    }

    public getEmployees(): EmployeeClass[] {
        return this.employees;
    }
}
