class Triathlon {
  constructor(competitionName) {
    this.competitionName = competitionName;
    this.participants = {};
    this.listOfFinalists = [];
  }

  addParticipant(participantName, participantGender) {
    let hasPropertyParticipant =
      this.participants.hasOwnProperty(participantName);

    if (!hasPropertyParticipant) {
      this.participants[participantName] = participantGender;
      return `A new participant has been added - ${participantName}`;
    } else {
      return `${participantName} has already been added to the list`;
    }
  }
  completeness(participantName, condition) {
    condition = Number(condition);
    let hasPropertyParticipant =
      this.participants.hasOwnProperty(participantName);
    let completedCount = Math.floor(condition / 30);
    if (!hasPropertyParticipant) {
      throw new Error(
        `${participantName} is not in the current participants list`
      );
    }
    if (condition < 30) {
      throw new Error(
        `${participantName} is not well prepared and cannot finish any discipline`
      );
    }
    if (condition <=89) {
      return `${participantName} could only complete ${completedCount} of the disciplines`;
    } else {
      this.listOfFinalists.push({
        participantName,
        participantGender: this.participants[participantName],
      });

      delete this.participants[participantName];
      return `Congratulations, ${participantName} finished the whole competition`;
    }
  }
  rewarding(participantName) {
    let findParticipant = this.listOfFinalists.find((x) => {
      return x.participantName == participantName;
    });

    if (findParticipant == undefined) {
      return `${participantName} is not in the current finalists list`;
    } else {
      return `${participantName} was rewarded with a trophy for his performance`;
    }
  }
  showRecord(criteria) {
    let result = `List of all ${this.competitionName} finalists:`;
    let sortedListFinalist = this.listOfFinalists.sort((a, b) => {
      return a.participantName.localeCompare(b.participantName);
    });
    let findParticipant = this.listOfFinalists.find((x) => {
      return x.participantGender == criteria;
    });
    if (this.listOfFinalists.length == 0) {
      return `There are no finalists in this competition`;
    }
    if (criteria == "male") {
      if (findParticipant == undefined) {
        return `There are no ${criteria}'s that finished the competition`;
      } else {
        return `${findParticipant.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
      }
    }
    if (criteria == "female") {
      if (findParticipant == undefined) {
        return `There are no ${criteria}'s that finished the competition`;
      } else {
        return `${findParticipant.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
      }
    }
    if (criteria == "all") {
      sortedListFinalist.forEach((x) => {
        result += `\n${x.participantName}`;
      });
      return result;
    }
  }
}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));

console.log(contest.completeness("Sasha", 70));
console.log(contest.completeness("George", 20));


// const contest = new Triathlon("Dynasmos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));