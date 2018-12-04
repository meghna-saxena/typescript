# What is Typescript?

- JS offers features like constructor function, dynamic types, prototypes  
- TS(Typescript) works as a wrapper over ES5/6 to compile down to JS in the end and introduces new features like `generics`, `interfaces`
- TS is `strongly-typed language`, which means to be specific about the type of variable
- TS doesnt run in the browser, we need a compiler. 

# Why TS and How to use it?
https://www.typescriptlang.org => Playground

```
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);
```

# Installing TS
`npm -g install typescript`


# Using TS
- Command `tsc filename` (script.ts) => runs TS compiler


- TypeScript is a JavaScript superset - it comes with its own compiler and adds features which are not part of next-gen JS (e.g. types).

- Babel is just a compiler which can compiled next-gen JS (per the standard) to current-gen JS. It doesn't add any features that are
not part of official drafts or implementations.

# Setting up the workspace
- npm init
- npm install lite-server --save-dev
  - Its a light weight server for hosting html file
  - No need to reload everytime
  - Add `start` script in package.json
    ->  ``` "scripts": {
              "start": "lite-server"
            }
        ```

- tsc --init => created `tsconfig.json` which says its a typescript project,
so while running `tsc`, it compiles all the TS files, we dont need to specify the file name everytime.


# Using types for a better code

## Introduction
- How to keep the best of both worlds:
Dynamic types of JS and Strong types/static type of TS

- In JS we're not explicit about types of a variable when its created.

## Type basics
- string 
let myName = 'Meg'; 
//`implicit static type checking` where you're not defining string type, 
but TS will infer this variable to be of type string

myName = 28; //compilation error when run tsc

* Note: 'name' is treated in a special way by TypeScript. So avoid setting variable name as 'name'

- number
```
let myAge = 28;
myAge = 'Meg'; //gives error
```
* TS accepts both integers and floats as type number

- boolean
```
let hasHobbies = false;
hasHobbies = 1; //gives error, even if 1 == true, since TS checks for type boolean, and 1 is a number.
```

## Assigning Types Exlicitly
Why its important?

```
let myAge;
myAge = 28; //doesnt throws err
myAge = '28'; //doesnt throws err 
```

While compiling TS treats this variable as `type any`, so we're back to JS world, instead of type checking.

To overcome this:
```
let myAge: number;
myAge = 28; //doesnt throws err
myAge = '28'; //throws error
```

## Arrays and Types

```
let hobbies = ["Cooking", "Drawing"];
console.log(hobbies[0]); //Cooking

let hobbies = ["Cooking", "Drawing"];
console.log(typeof hobbies); //object (array is an object)

let hobbies = ["Cooking", "Drawing"];
hobbies = [100, 200]; //throws err, it expects type to be array of strings

let hobbies: any[] = ["Cooking", "Drawing"];
hobbies = [100, 200]; //works!
hobbies = 100; //throws err, since its not an array
```

## tuples
- Another type available in TS
- Tuples are arrays w/ mixed types and a limited no. of items

```
let address: [string, number] = ["SuperStreet", 99]; //if you're sure, its an array of 2 items, w/ string first and number second, in this specific order, create type tuple, otherwise type any[]

let address: [string, number] = [99, "SuperStreet"]; //throws error since order is important!
```

- Data structure w/ mixed value in specific format.


## Enums
- Another new type added with TS are `enums`
- Makes number more expressive

Consider a case, where there are many colors and you want to check in a switch/if statements which one was chosen.
So you can create switch where you check for string 'red' or 'green' or 'blue', but it will occupy more memory for
information your computer doesnt needs.

You can also have 0, 1, 2, 3 where each no. represents for specific color. Other advantages includes, less changes of typos etc.
But its difficult to remember which value the no. holds, so we create enums.

create enum w/ `enum` keyword, name of the enum

```
enum Color {
  Gray, //0
  Green, //1
  Blue //2
}
```
These values behid the scenes stands for some integers

//use enum as type

```
let myColor: Color = Color.Green;
console.log(myColor); // 1
```

When you've to override the default values of enums:

```
enum Color {
  Gray, //0
  Green = 100, //100
  Blue //101 (continues incrementing from the last no. of item prior to this one, so if we want it 2, 
  set Blue = 2, the next item will then be 3)
}
```

- enums are generally useful when working with data which may assume multiple states. Consider the state of a server. It may be "offline", "online" or in "maintenance". You could store that state as a string. But you could also simply assign a number to each state (since you don't really care about the string in your program).

```
let STATE_OFFLINE = 0;
let STATE_ONLINE = 1;
let STATE_MAINTENANCE = 2;
```

// use it

```
if (myState = STATE_OFFLINE) { ... }
To make this a bit easier to read, you could use an enum:

enum ServerState {
 Offline = 0,
 Online,
 Maintenance
}
 
// use it
if (myState = ServerState.Offline) { ... }
```


## The "Any" type
- Any is the most flexible type in TS

let car: any = "BMW"; //string
car = { brand: "BMW", series: 3 }; //reassigned as object


## Understanding the created JS code
- The role of TS is to be aware of types and put warning during compilation.
- In JS file created after compiling TS file, we dont see any type
- The only type we see is `enum` which is created as self-executing function and the color object, 
so that we can have mapping over it.


## Using types in Functions (arguments & return values)

```
let myName = 'Meg';

function returnMyName(): string { //refers the type of returned value
  return myName;
}

console.log(returnMyName());
```

* Special type regarding the return function or return type is `void` type

```
function sayHello() {
  console.log("Hello);
}
```

This function doesnt returns anything. It doesnt have return statement.
You can be explicit this way:

```
function sayHello(): void { //means return nothing
  console.log("Hello);
  return myName; //throws err string is not void
}
```


## Argument types
```
function multiply(value1, value2): number {
  return value1 * value2;
}

console.log(multiply(2, 'Meg')); //doesnt throws error, since it returns NaN which is treated as type number
```

To avoid this =>

```
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

console.log(multiply(2, 'Meg')); //throws err
```

## Functions as types
```
let myMultiply;

myMultiply = sayHello; //without parentheses because dont want to set it equal to the return value of these functions,
but instead to the functions themselves.
myMultiply();

myMultiply = multiply; 
myMultiply(2, 5);
```

How to specify which function to be assigned to a variable
In sayHello(), there are no args and no return statement
In multiply(), there are 2 args, both are number, and returns a number

```
let myMultiply: (val1: number, val2: number) => number; //for assigning func type use ()

myMultiply = sayHello; //throws error
myMultiply();

myMultiply = multiply; //executes!
myMultiply(2, 5);
```

Typechecking never hurts as it can ensure that you're calling a function correctly and/ or that you're defining a function correctly.
This is especially useful when using interfaces (another TS feature). There, you define "blueprints" for JS objects and as such an
object may also have functions, it can be useful to define how such a function should look like.


## Objects and types
