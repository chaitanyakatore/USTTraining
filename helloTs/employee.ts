interface employee {
    id: number,
    name: string,
    department: string,
    salary: number,
    address: string,
    married: boolean,
    projects: string[],
    
}

let employee1 : employee = {
    id: 1,
    name: "John Doe",
    department: "IT",
    salary: 50000,
    address: "123 Main St",
    married: true,
    projects: ["Project A", "Project B"]
}

console.log(employee1);