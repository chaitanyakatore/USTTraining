import { EmployeeClass } from './Employee';
import { EmployeeManager } from './EmployeeManager';

const employees: EmployeeClass[] = [
    new EmployeeClass(1, "Alice", "Engineering", 101, 70000, new Date('2020-01-15'), "Software Engineer"),
    new EmployeeClass(2, "Bob", "Engineering", 101, 80000, new Date('2019-03-22'), "Senior Software Engineer"),
    new EmployeeClass(3, "Charlie", "Marketing", 102, 60000, new Date('2021-06-10'), "Marketing Specialist"),
    new EmployeeClass(4, "Diana", "HR", 103, 55000, new Date('2022-05-15'), "HR Manager")
];

const employeeManager = new EmployeeManager(employees);


const engineeringSalary = employeeManager.employeeSalaryByDepartment("Engineering");
console.log(`Total salary for Engineering department: $${engineeringSalary}`);

const marketingSalary = employeeManager.employeeSalaryByDepartment("Marketing");
console.log(`Total salary for Marketing department: $${marketingSalary}`);

const hrSalary = employeeManager.employeeSalaryByDepartment("HR");
console.log(`Total salary for HR department: $${hrSalary}`);
