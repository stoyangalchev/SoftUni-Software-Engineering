function schoolRegistry(arr) {
  let schoolRegister = {};
  for (let line of arr) {
    let tokens = line.split(", ");
    let grade = Number(tokens[1].split(": ")[1]) + 1;
    // "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    let name = tokens[0].split(": ")[1];
    let score = Number(tokens[2].split(": ")[1]);

    if (score > 3) {
      let student = { name, score };

      if (!schoolRegister.hasOwnProperty(grade)) {
        schoolRegister[grade] = [];
      }
      schoolRegister[grade].push(student);
    }
  }
  let sortedGrades = Object.keys(schoolRegister).sort((a, b) => a - b);
console.log(sortedGrades);
  for (let grade of sortedGrades) {
    let students = schoolRegister[grade];
    console.log(`${grade} Grade`);
    console.log(`List of students: ${students.map((s) => s.name).join(", ")}`);
    console.log(
      `Average annual score from last year: ${average(
        students.map((s) => s.score)
      ).toFixed(2)}`
    );
    console.log();
  }

  function average(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }
}
console.log(schoolRegistry([
  "Student name: George, Grade: 5,Graduated with an average score: 2.75",
  "Student name: Alex, Grade: 9,Graduated with an average score: 3.66",
  "Student name: Peter, Grade: 8,Graduated with an average score: 2.83",
  "Student name: Boby, Grade: 5,Graduated with an average score: 4.20",
  "Student name: John, Grade: 9,Graduated with an average score: 2.90",
  "Student name: Steven, Grade: 2,Graduated with an average score: 4.90",
  "Student name: Darsy, Grade: 1,Graduated with an average score: 5.15",
]));
