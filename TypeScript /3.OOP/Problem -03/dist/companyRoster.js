"use strict";
class Employee {
    constructor(name, salary, position, department, email, age) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = age;
    }
    toString() {
        return `${this.name} ${this.salary} ${this.email} ${this.age}`;
    }
    static parseEmployeeData(data) {
        let [name, salary, position, department, email, age] = data.split(" ");
        return new Employee(name, Number(salary), position, department, email, Number(age));
    }
    static getAverageSalary(employees) {
        return employees.reduce((acc, e) => acc + e.salary, 0) / employees.length;
    }
}
class Department {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getAverageSalary() {
        return Employee.getAverageSalary(this.employees);
    }
}
class Company {
    constructor() {
        this.departments = [];
    }
    addEmployee(employee) {
        let department = this.departments.find((d) => d.name === employee.department);
        if (!department) {
            department = new Department(employee.department);
            this.departments.push(department);
        }
        department.addEmployee(employee);
    }
    getAverageSalary() {
        return Employee.getAverageSalary(this.departments.reduce((acc, d) => acc.concat(d.employees), []));
    }
}
function companyRoster(input) {
    const company = new Company();
    input.forEach((line) => {
        const employee = Employee.parseEmployeeData(line);
        company.addEmployee(employee);
    });
    const highestSalaryDepartment = company.departments.sort((a, b) => b.getAverageSalary() - a.getAverageSalary())[0];
    return `Highest Average Salary: ${highestSalaryDepartment.name}\n${highestSalaryDepartment.employees
        .sort((a, b) => b.salary - a.salary)
        .map((e) => e.toString())
        .join("\n")}`;
}
// Test
console.log(companyRoster([
    "4",
    "Peter 120.00 Dev Development",
    "Tina 333.33 Manager Marketing 33",
    "Sam 840.20 ProjectLeader Development",
    "George 0.20 Freeloader Nowhere 18",
]));
