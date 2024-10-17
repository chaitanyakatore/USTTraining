interface employee {
    id: number;
    name: string;
    department: string;
    department_id: number;
    salary: number;
    hire_date: Date;
    designation: string;
}

let employees: employee[];

function employeeSalaryByDepartment(department: string) : number{
    let totalSalary: number = 0;
    for(let i = 0; i < employees.length; i++){
        if(department == employees[i].department){
            totalSalary += employees[i].salary;
        }
    }

    return totalSalary;
}


