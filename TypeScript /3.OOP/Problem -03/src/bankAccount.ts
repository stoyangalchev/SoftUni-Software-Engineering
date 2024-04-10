class BankAccount {
  private _id: number;
  private _balance: number;
  private _interestRate: number = 0.02;

    constructor() {
        this._id = 1;
        this._balance = 0;
    }

    setInterestRate(interest: number): void {
        this._interestRate = interest;
    }

    getInterest(id: number, years: number): void {
        let interest = this._balance * this._interestRate * years;
        console.log(interest.toFixed(2));
    }

    deposit(id: number, amount: number): void {
        if (id === this._id) {
            this._balance += amount;
            console.log(`Deposited ${amount} to ID${id}`);
        } else {
            console.log('Account does not exist');
        }
    }

    get id(): number {
        return this._id;
    }

    get balance(): number {
        return this._balance;
    }

    get interestRate(): number {
        return this._interestRate;
    }

    set id(value: number) {
        this._id = value;
    }

    set balance(value: number) {
        this._balance = value;
    }

    set interestRate(value: number) {
        this._interestRate = value;
    }

}
const bankAccount = new BankAccount();
let input = [
    'Create',
    'Deposit 1 20',
    'Deposit 3 20',
    'Deposit 2 10',
    'SetInterest 1.5',
    'GetInterest 1 1',
    'GetInterest 2 1',
    'GetInterest 3 1',
    'End'
];
let index = 0;

while (input[index] !== 'End') {
    let [command, firstArgument, secondArgument] = input[index].split(' ');
    let id = Number(firstArgument);
    let amount = Number(secondArgument);

    switch (command) {
        case 'Create':
            console.log(`Account ID${bankAccount.id} created`);
            break;
        case 'Deposit':
            bankAccount.deposit(id, amount);
            break;
        case 'SetInterest':
            bankAccount.setInterestRate(id);
            break;
        case 'GetInterest':
            bankAccount.getInterest(id, amount);
            break;
    }

    index++;
}




