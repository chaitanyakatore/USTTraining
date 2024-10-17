var employees;
function employeeSalaryByDepartment(department) {
    var totalSalary = 0;
    for (var i = 0; i < employees.length; i++) {
        if (department == employees[i].department) {
            totalSalary += employees[i].salary;
        }
    }
    return totalSalary;
}
