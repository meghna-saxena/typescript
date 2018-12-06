type BankAccount = {money: number, deposit: (val: number) => void} //since this func doesnt returns anything so add void type

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
      this.money += value;
  }
};

let myself: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

const deposit = myself.bankAccount.deposit(3000);

console.log(deposit); //undefined since the function doesnt returns anything
