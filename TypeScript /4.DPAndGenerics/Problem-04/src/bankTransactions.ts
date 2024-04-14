class CreateAccount<bankName, bankID> {
  constructor(public name: bankName, public id: bankID) {}
}

class PersonalAccount<bankName, bankID> extends CreateAccount<
  bankName,
  bankID
> {
  ownerName: string;
  money: number = 0;
  recentTransactions: object = {};
  constructor(name: bankName, id: bankID, ownerName: string) {
    super(name, id);
    this.ownerName = ownerName;
  }

  deposit(amount: number) {
    this.money += amount;
  }

  expense(amount: number, expenseType: string | undefined) {
    if (this.money >= amount) {
      if (this.recentTransactions) {
      } else {
      }
      this.money -= amount;
    } else {
      throw new Error(`You cant make ${expenseType} transaction`);
    }
  }

  showDetails() {
    let total = 0;
    for (let key in this.recentTransactions) {
      if (this.recentTransactions.hasOwnProperty(key)) {
        total += 0;
      }
    }
    return `Total money spent on expenses: ${total}`;
  }
}
