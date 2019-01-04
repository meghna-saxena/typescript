class Person {
  name: string
  private type: string;
  protected age: number = 27;

  constructor(name: string, public username: string) { 
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType("Cool guy!")
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person("Meg", "Meggie");
console.log(person.name, person.username);
person.printAge();

