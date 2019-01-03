/* LET and CONST */
console.log("LET and CONST");

let variable = "test";
console.log(variable);

variable = "another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);

// Block scope
function reset() {
  let variable = null;
  console.log(variable); //null
}

reset();
console.log(variable); //another value


/* ARROW FUNCTIONS */
console.log('ARROW FUNCTIONS');

const addNumbers = function (number1: number, number2: number): number {
  return number1 + number2;
};

console.log(addNumbers(10, 2));


// const multiplyNumbers = (number1: number, number2: number): number => {
//   return number1 * number2;
// };

//OR

const multiplyNumbers = (number1: number, number2: number): number => number1 * number2;

console.log(multiplyNumbers(10, 5));


/* DEFAULT PARAMS */
console.log('DEFAULT PARAMS');

const countdown = (start: number = 10): void => { //returns nothing
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log("Done!", start);
}
countdown(20);


/* REST & SPREAD OPERATORS */
console.log('REST & SPREAD OPERATORS');

function printInfo(...info: [string, number]) {
  console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}

printInfo("Meg", 28);