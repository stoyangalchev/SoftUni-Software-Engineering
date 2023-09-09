// class Company {
//   objectWithConstructor = {};
//   departmentName;

//   lastResul = [];
//   result = [];
//   finalObject = new Set();
//   highestAverageSalaryRounded = 0;
//   constructor(departments) {
//     this.departments = new Set();
//   }

//   addEmployee(name, salary, position, department) {
//     if (name == "" || salary == "" || position == "" || department == "") {
//       return "Invalid input!";
//     }
//     if (salary < 0) {
//       return "Invalid input!";
//     }
//     this.departments.add({
//       name: name,
//       salary: salary,
//       position: position,
//       department: department,
//     });
//     return `New employee is hired. Name: ${name}. Position: ${position}`;
//   }
//   bestDepartment() {
//     this.departments.forEach((x) => {
//       if (!this.objectWithConstructor.hasOwnProperty(x.department)) {
//         this.objectWithConstructor[x.department] = 0;
//       } else {
//         this.objectWithConstructor[x.department] += 1;
//       }
//     });
//     const sortable = Object.entries(this.objectWithConstructor).sort(
//       ([, a], [, b]) => b - a
//     );
//     this.departmentName = sortable[0][0]; //ConStruction

//     this.departments.forEach((x) => {
//       // console.log(x);
//       if (x.department == this.departmentName) {
//         this.finalObject.add(x); //Set(4) {size: 4, {name: 'St…ir', …}, {…}, {…}, {…}}
//       }
//     });

//     this.finalObject = Array.from(this.finalObject).sort(
//       (a, b) => b.salary - a.salary || a.name.localeCompare(b.name)
//     );

//     //[{"name":"Stanimir","salary":2000,"position":"engineer","department":"Construction"},

//     this.finalObject.forEach((x) => {
//       this.highestAverageSalaryRounded += Number(x.salary);
//     });
//     this.highestAverageSalaryRounded =
//       this.highestAverageSalaryRounded / this.finalObject.length; //1500

//     for (let i = 0; i < 1; i++) {
//       this.result.push(`Best Department is: ${this.departmentName} `);
//       this.result.push(
//         `Average salary: ${this.highestAverageSalaryRounded.toFixed(2)}`
//       );

//       this.finalObject.forEach((x) => {
//         this.result.push(`${x.name} ${x.salary} ${x.position}`);
//       });
//     }
//     return this.result.join("\n");
//   }
// }

class Company {
  constructor() {
    this.departments = new Map();
  }
  addEmployee(username, salary, position, department) {
    if (!username || !salary || salary < 0 || !position || !department) {
      throw new Error("Invalid input!");
    }

    let newEmployee = { username, salary, position, department };

    if (this.departments.has(department)) {
      this.departments.get(department).push(newEmployee);
    } else {
      this.departments.set(department, [newEmployee]);
    }

    return `New employee is hired. Name: ${username}. Position: ${position}`;
  }

  bestDepartment() {
    let totalSalary = (department) => {
      let totalSalary = department[1].reduce((acc, b) => {
        return (acc += b.salary);
      }, 0);
      let averageSalary = (totalSalary / department[1].length).toFixed(2);
      department.push(averageSalary);
      return averageSalary;
    };

    let bestDepartment = [...this.departments].sort(
      (a, b) => totalSalary(b) - totalSalary(a)
    )[0];
    let sortBySalaryAndName = bestDepartment[1].sort(
      (a, b) => b.salary - a.salary || a.username.localeCompare(b.username)
    );

    let result = `Best Department is: ${bestDepartment.shift()}\n`;
    result += `Average salary: ${bestDepartment.pop()}\n`;
    sortBySalaryAndName.forEach(
      (e) => (result += `${e.username} ${e.salary} ${e.position}\n`)
    );

    return result.trim();
  }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
