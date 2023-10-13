class SmartHike {
    constructor(username) {
        this.username = username,
            this.goals = {},
            this.listOfHikes = [],
            this.resources = 100
    };

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        } else {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`
        }
    };

    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.goals.hasOwnProperty(peak) && this.resources == 0) {
            throw new Error(`You don't have enough resources to start the hike`);
        }

        let tempResources = (Number(time) * 10);

        if (this.resources - tempResources < 0) {
            return `You don't have enough resources to complete the hike`;
        }
        this.resources -= tempResources;
        this.listOfHikes.push({ peak, time, difficultyLevel });
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }
    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }
        return `You have rested for ${time} hours and gained ${time * 10}% resources`
    };

    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`
        }
        if (criteria == 'all') {
            let allHikes = [];
            this.listOfHikes.forEach((h) => {
                allHikes.push(`${this.username} hiked ${h.peak} for ${h.time} hours`)
            });
            const msg = 'All hiking records:\n' + allHikes.join('\n');
            return msg;

        }
        const listByCriteria = [];
        this.listOfHikes.forEach(el => {
            if (el.difficultyLevel === criteria) {
                listByCriteria.push(el)
            }
        });

        if (listByCriteria.length == 0) {
            return `${this.username} has not done any ${criteria} hiking yet`
        }

        const sortList = listByCriteria.sort((a, b) => {
            return Number(a.time) - Number(b.time);
        });


        return `${this.username}'s best ${criteria} hike is ${sortList[0].peak} peak, for ${sortList[0].time} hours`

    }
}
const newHike = new SmartHike('Vili');
console.log(newHike.addGoal('Musala', 2925))
console.log(newHike.addGoal('Rui', 1706))
console.log(newHike.hike("Musala", 8, "hard"))
console.log(newHike.hike("Rui", 3, "easy"))
console.log(newHike.hike("Everest", 12, "hard"))

// Vili has not done any easy hiking yet
// Vili's best hard hike is Musala peak, for 8 hours
// All hiking records:
// Vili hiked Musala for 8 hours