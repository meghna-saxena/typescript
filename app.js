"use strict";
/* LET and CONST */
console.log("LET and CONST");
var variable = "test";
console.log(variable);
variable = "another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// Block scope
function reset() {
    var variable = null;
    console.log(variable); //null
}
reset();
console.log(variable); //another value
/* ARROW FUNCTIONS */
console.log('ARROW FUNCTIONS');
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 2));
// const multiplyNumbers = (number1: number, number2: number): number => {
//   return number1 * number2;
// };
//OR
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 5));
/* DEFAULT PARAMS */
console.log('DEFAULT PARAMS');
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown(20);
/* REST & SPREAD OPERATORS */
console.log('REST & SPREAD OPERATORS');
function printInfo() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
printInfo("Meg", 28);
