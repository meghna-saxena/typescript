// Exercise 1
var double = (value: number): number => {
  return value * 2;
};
console.log(double(10));

// Exercise 2
var greet = (name: string = "Max") => {
  console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3
// var numbers = [-3, 33, 38, 5];
// console.log(Math.min.apply(Math, numbers));

var numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4
// var newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbers);
// console.log(newArray);

var newArray = [55, 20];
newArray = [...newArray, ...numbers];
console.log(newArray);

// Exercise 5
// var testResults = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
// console.log(result1, result2, result3);

var testResults = [3.89, 2.99, 1.38];
var [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6
// var scientist = { firstName: "Will", experience: 12 };
// var firstName = scientist.firstName;
// var experience = scientist.experience;
// console.log(firstName, experience);

var scientist = { firstName: "Will", experience: 12 };
var { firstName, experience } = scientist
console.log(firstName, experience);