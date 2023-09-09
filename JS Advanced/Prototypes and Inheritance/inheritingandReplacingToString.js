function inheritingAndReplacing() {
  function Person(name, email) {
    this.name = name;
    this.email = email;
  }

  Person.prototype.toString = function () {
    return `Person (name: ${this.name}, email: ${this.email})`;
  };

  function Student(name, email, course) {
    Person.call(this, name, email);
    this.course = course;
  }
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;

  Student.prototype.toString = function () {
    return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
  };

  function Teacher(name, email, subject) {
    Person.call(this, name, email);
    this.subject = subject;
  }

  Teacher.prototype = Object.create(Person.prototype);
  Teacher.prototype.constructor = Teacher;

  Teacher.prototype.toString = function () {
    return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
  };

  return {
    Person,
    Student,
    Teacher,
  };
}

let { Person, Student, Teacher } = inheritingAndReplacing();

let person = new Person("Niki", "niki@test.com");
let student = new Student("Stoyan", "galchev@.abv", "VI");
let teacher = new Teacher("Lili", "lili@test.com", "math");

console.log(student.toString());
