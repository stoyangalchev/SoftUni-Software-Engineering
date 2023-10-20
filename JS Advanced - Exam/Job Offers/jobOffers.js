class JobOffers {
  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
    this.jobCandidates = [];
  }
  jobApplication(candidates) {
    let result = "You successfully added candidates: ";
    let res1 = [];
    for (let el of candidates) {
      let [name, education, yearsExperience] = el.split("-");
      yearsExperience = Number(yearsExperience);
      let findJobCandidate = this.jobCandidates.find((x) => {
        return x.name == name;
      });
      if (findJobCandidate == undefined) {
        this.jobCandidates.push({ name, education, yearsExperience });
        res1.push(name);
      } else {
        if (findJobCandidate.yearsExperience < yearsExperience) {
          findJobCandidate.yearsExperience = yearsExperience;
        }
      }
    }
    return result + res1.join(", ") + ".";
  }
  jobOffer(chosenPerson) {
    let [name, minimalExperience] = chosenPerson.split("-");
    minimalExperience = Number(minimalExperience);
    let findJobCandidate = this.jobCandidates.find((x) => {
      return x.name == name;
    });
    if (findJobCandidate == undefined) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if (minimalExperience > findJobCandidate.yearsExperience) {
      throw new Error(
        `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
      );
    } else {
      findJobCandidate.yearsExperience = "hired";
      return `Welcome aboard, our newest employee is ${name}.`;
    }
  }
  salaryBonus(name) {
    let findJobCandidate = this.jobCandidates.find((a) => a.name == name);
    if (findJobCandidate) {
      if (findJobCandidate.education == "Bachelor") {
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
      } else if (findJobCandidate.education == "Master") {
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
      } else if (
        findJobCandidate.education != "Master" ||
        findJobCandidate.education != "Bachelor"
      ) {
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
      }
    } else {
      throw new Error(`${name} is not in the candidates list!`);
    }
  }

  candidatesDatabase() {
    let sorted = this.jobCandidates.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    let result = ["Candidates list:"];

    if (this.jobCandidates.length == 0) {
      throw new Error(`Candidate Database is empty!`);
    } else {
      for (let el of sorted) {
        result.push(`${el.name}-${el.yearsExperience}`);
      }
    }
    return result.join("\n");
  }
}

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(
  Jobs.jobApplication([
    "John Doe-Bachelor-10",
    "Peter Parker-Master-5",
    "Jordan Cole-High School-5",
    "Daniel Jones- Bachelor-18",
  ])
);
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());
