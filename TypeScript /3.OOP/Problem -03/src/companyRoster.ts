class Employee {
  public name: string;
  public salary: number;
  public position: string;
  public department: string;
  public email?: string;
  public age?: number;

  constructor(
    name: string,
    salary: number,
    position: string,
    department: string,
    email?: string,
    age?: number
  ) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
    this.email = email;
    this.age = age;
  }

  public toString(): string {
    return `${this.name} ${this.salary} ${this.email} ${this.age}`;
  }

  public static parseEmployeeData(data: string): Employee {
    let [name, salary, position, department, email, age] = data.split(" ");
    return new Employee(
      name,
      Number(salary),
      position,
      department,
      email,
      Number(age)
    );
  }

  public static getAverageSalary(employees: Employee[]): number {
    return employees.reduce((acc, e) => acc + e.salary, 0) / employees.length;
  }
}

class Department {
  public name: string;
  public employees: Employee[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  public getAverageSalary(): number {
    return Employee.getAverageSalary(this.employees);
  }
}

class Company {
  public departments: Department[] = [];

  public addEmployee(employee: Employee): void {
    let department = this.departments.find(
      (d) => d.name === employee.department
    );
    if (!department) {
      department = new Department(employee.department);
      this.departments.push(department);
    }
    department.addEmployee(employee);
  }

  public getAverageSalary(): number {
    return Employee.getAverageSalary(
      this.departments.reduce(
        (acc: Employee[], d) => acc.concat(d.employees),
        []
      )
    );
  }
}

function companyRoster(input: string[]): string {
  const company = new Company();
  input.forEach((line) => {
    const employee = Employee.parseEmployeeData(line);
    company.addEmployee(employee);
  });

  const highestSalaryDepartment = company.departments.sort(
    (a, b) => b.getAverageSalary() - a.getAverageSalary()
  )[0];

  return `Highest Average Salary: ${
    highestSalaryDepartment.name
  }\n${highestSalaryDepartment.employees
    .sort((a, b) => b.salary - a.salary)
    .map((e) => e.toString())
    .join("\n")}`;
}

// Test
console.log(
  companyRoster([
    "4",
    "Peter 120.00 Dev Development",
    "Tina 333.33 Manager Marketing 33",
    "Sam 840.20 ProjectLeader Development",
    "George 0.20 Freeloader Nowhere 18",
  ])
);
