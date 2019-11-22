# Understand TypeScript:

## What is Typescript?

JavaScript comes w/ lot of features like: constructor functions, prototypes, dynamic types etc.

Now, we're highlighting the word `types` here, sicne in JS a variable can be string and then reassigned holding a value of a number type.
This feature is specifically ES5, and then came ES6 which introduced new features like `class` keyword etc.

So for getting the other missing features which are there in other programming langauges but not in JavaScript, typescript came in:

- TS (Typescript) works as a wrapper over ES5/6 to compile down to JavaScript in the end and introduces new features like `generics`, `interfaces` which all gets compiled to ES5 code to run in browser.
- The most important feature is:
  -  TS is `strongly-typed language`, which means to be specific about the type of variable.

*Remember:* TS doesn't runs in the browser, we need a compiler. 
____

# Why TypeScript and How to use it?

  - Go to -> https://www.typescriptlang.org 
    - Click on `Playground`

    - Select `Classic JavaScript` or `using classes`, and describe the difference b/w passing object as an argument when expecting a string.

*Classic Javascript*

```
function Greeter(greeting) { // constructor function
  // explicitly define the type (greeting: string) as parameter

    this.greeting = greeting;
}

Greeter.prototype.greet = function() { // extend w/ prototype
    return "Hello, " + this.greeting;
}

// Oops, we're passing an object when we want a string. This will print 
// "Hello, [object Object]" instead of "Hello, world" without error.

new Greeter({message: "world"});  //[object Object]
//let greeter = new Greeter("world");  //string
instantiate object

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
};

document.body.appendChild(button);
```

Similary in ES6 classes:

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
________

# Installing TypeScript

- Open `CLI` (A command-line interface or command language interpreter.
- You need to have `node` installed on your local machine, and specifially npm installed.
- Globally install typescript by running:
  - `npm -g install typescript`
  - It fetches latest version and install on local machine.
  - On mac or linux you may need a `sudo` before entering this command.

___

# Using TypeScript
Small live example:

Steps:
- Make a project folder w/ basic html structure `index.html` and a `script.ts` file. 
  - `.ts is the file extension.`
- Paste the code from `classic javascript` playground stuff from official tslang site in your script.ts file.
- Import script.js in your html file inside body tag, becuase js runs in browser not ts.
- Compile the ts file w/ the following command:
  - >`tsc filename`. 
  Example `tsc script.ts` => runs TS compiler
  - If any errors are there, it would be seen in the console during this compilation time.
- After running the above command we see `script.js` in our project folder which has complied js code. 

___________

- TypeScript is a JavaScript superset - it comes with its own compiler and adds features which are not part of next-gen JS (e.g. types).

- Babel is just a compiler which can compiled next-gen JS (per the standard) to current-gen JS. It doesn't add any features that are
not part of official drafts or implementations.

# Setting up the workspace
- npm init -> creates `package.json`
- npm install lite-server --save-dev
  - Its a light weight server for hosting html file
  - No need to reload everytime
  - Add `start` script in package.json
    ->  ``` "scripts": {
              "start": "lite-server"
            }
        ```

- `tsc --init` => created `tsconfig.json` which says its a typescript project,
so while running `tsc`, it compiles all the TS files, we dont need to specify the file name everytime.

- Run `tsc -w`for watch mode


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

## Assigning Types Explicitly
Why its important?

Till now we were inferring types, how to assign types explicitely?

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

- enums are generally useful when working with data which may assume multiple states. Consider the state of a server. It may be "offline", "online" or in "maintenance". You could store that state as a string. But you could also simply assign a number
 to each state (since you don't really care about the string in your program).

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

* Othe  r examples includes: days in a week, months in a year, starbucks coffee cup sizes

## The "Any" type
- Any is the most flexible type in TS.
- Generic parent type

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

Typechecking never hurts as it can ensure that you're calling a function correctly and/ or that you're 
defining a function correctly. This is especially useful when using interfaces (another TS feature). 
There, you define "blueprints" for JS objects and as such an object may also have functions, it can be useful to define how such a function should look like.


## Objects and types

```
let userData = {
  name:'Meg',
  age: 28
};
```

Behind the scenes TS infers the type this variable should have, i.e object with a name field which is of type string
and age field of type number.

`userData = {};` //throws error since it should contain name (type string) and age (type number) fields.

```
userData = {
  a: 'Hello',
  b: 22
}; //throws error because names of properties dont match
```

* So names dont matter in functions, there only types and order of args matter, but in object names of properties also matters!
And the reason is => in function, the order is important. The first arg should be a number, second 
should be a number and so on. But in object, the order is unclear, order might change behind the scenes.

Explicit types of object

```
let userData: {} = { //if empty obj
  name:'Meg',
  age: 28
};

or 

let userData: {name: string, age: number} = {
  name:'Meg',
  age: 28
};
```

It is considered a good practice to be explicit about the types you use. But it also has the advantage, 
that you can initialize object properties as null and still make sure that TypeScript understands which property
this object would normally contain.


## EXAMPLE: Putting it all together in a complex object

```
let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};
```

- complex is an obj, w/ data and output properties, data is array of numbers and output property is a function 
with one argument all with type boolean; name of arg is not important and the func returns array of numbers.

So if we reassgin =>

`complex = {}; //throws err`


Note: 
'this' implicitly has type 'any' because it does not have a type annotation.
`noImplicitAny: false` in the config file reoslves the issue


## Creating custom types w/ types aliases

- Complex types like above have an issue. Imagine we have another property or another variable:

```
let complex2: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};
```

Now, if we have to change the type of data as `any[]`, it will be cumbersome to change at places.
So we can assign the type to one word which can be reused.

We'll later learn about classes, which allows to create objects or blueprints of an object, but here we can use type alias to store a type

// type alias

- Create alias with `type` keyword and then name of your choice

```
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};
```

The convention is to give your types names that start with uppercase characters. This keeps them in line 
with all the built-in types.

* Notes:

> Aliases vs Interface

- An interface really is like a contract you sign => "I will have a property named 'age' which is of type number".
- An alias kind of does the same, but may only be used as Type.

So they do the same thing if we use them as types like this:

```
interface Aged {
    age: number;
}
 
type Aged = {
    age: number;
};
 
someObj: Aged = {
    name: string; // => Error
};
```

But what if we want to "force" a class to have "age" property?

```
class SomeClass: Aged {}  doesn't work!

Here only an interface helps us:

class SomeClass implements Aged {} 
```

Because `we can only implement interfaces, not aliases`.

Note: If one can do everything with interfaces, why should we ever use type aliases?
When is it better to use type alias over interfaces?

Think of aliases as little helpers if you're "too lazy" to write an interface. If you really only want to create a shortcut for `{name: string}`, creating an interface might just be overkill.

## Allowing multiple types w/ Union Types

- Be explicit about the types, use number, string, any. But sometimes you need in-between solution. Your type will be string
or number, but certainly not boolean, and so you'll think of using `any` even though you know type will be either `string` or 
`number`. That's where `union types` comes into play.

```
let myAge: number | string = 27; //You may also chain more than 2 types!
myAge = "27"; 
myAge = true; //throws err
```

* Other info:
You can define optional arguments like this: 

```
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
```

## Checking for types during runtime
- use `typeof` 

```
let finalValue = "A string";
if(typeof finalValue == "number") { //remember to put type inside quotation marks
  console.log("finalValue is a number"); //doesnt executes
}
```

* Notes: 

```
let a: number[];
a = [1,2];
console.log(typeof a);
```

- Types are only known to TS, not the JS (which is what runs in the browser though). So typeof doesnt prints on browser
console. You can do this however - 
`console.log(a instanceof Array)` // prints true because a is an instance of the Array constructor function/ "type"

How to check the created custom types. i.e I need to check if atom is of type dropBomb.

// Both console logs does not do it.

```
type dropBomb = {x: number, y:number};

let atom: dropBomb;
atom = {x:2, y:3};

console.log(typeof atom);
console.log(atom instanceof dropBomb);
```

Check for the custom TypeScript types like the ones declared with Type Aliases?
Use `instanceof` to check whether a variable is of a certain type:

`person instanceof Person`

Since types are TS only feature, you can't use these types at runtime in JS


## The never type (added in TS 2.0)

```
function neverReturns(): never {
  throw new Error('An error msg');
}
```

This func. never finishes. It doesnt return the void, it instead never returns anything.
This func has an error and therefore it never returns.

```
function fail(message: string):never { throw new Error(message); }
 
function foo(x: string | number): boolean | undefined {
      if (typeof x === "string") {
            return true;
      } else if (typeof x === "number") {
            return false;
      }
 
      fail("Unexhaustive!");
}
 
foo('hello');
```


## Nullable types (added in TS 2.0)

```
let canBeNull = 12; //inferred to be a number
canBeNull = null; //clears the value

let canAlsoBeNull; //type any by default, but it also has value undefined
canAlsoBeNull = null; //this can lead to problem, since if any variable is reassigned to null, you have to check with complex code,
that if its value is not null then do something
```

- With TS be explicit about which should be null and which shouldn't

- Go to `tsconfig.json`, and add new field in compilerOptions `"strictNullChecks": true `

- By default since this field is absent, it is set to false.
- Now we can't reassign null to a variable.
- However uninitalized varibale with value undefined doesnt throws error when reassigned null, since undefined and null
are special values in JS

- However, if we still need to reassign a variable with value other than undefined later on, we can use `union types`

```
let canBeNull: number | null = 12; 
canBeNull = null; 

let canThisBeAny = null; //this is inferred as type null, not type any
canThisBeAny = 12; //throws err

So override this by:
let canThisBeAny: number | null = null; 
canThisBeAny = 12; //throws err
```


## Module Exercise

```
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

```

# Understanding the TS compiler
- create a .ts file

```
let myName: string = "Max";
let myAge: number = 28;
```

> Run tsc

- creates a js file
  - converts let to var
  - remove the types, since JS dont have strong typing/ explicit types

`myName = 30;` // throws compilation error, number cant be assigned to string

- If we go back to JS file, it still shows the reassignment of the variable even though we get a compilation error.
- Why it compiles? Because its a default behavior, TS compiler warns/throws error, but it compiles
nonetheless to give a chance to run the code because maybe due to some import statement in html files or other place which TS doesnt knows about, but code still works once its compiled.
However then its not a TS-friendly application.

- You can suppress this behavior:
`tsconfig.json gives compilerOptions`

## Changing the compiler behavior on errors:
- tsconfig.json is a default file which gets created by running `tsc --init`

Base options in the file -

```
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "noImplicitAny": false,
    "sourceMap": false
  },
  "exclude": {
    "node_modules"
  }
}
```

- Fix the dafult behavior of TS compiling code, even if it has type errors

Add `"noEmitOnError": true` || `"noEmit": true` inside compilerOptions, doesn't emit outputs, so no js file is created, since ts file is stopped from compiling */

## Debugging TS code using source maps

- By default 2 compiler options are:

```
  - "noImplicitAny: false",
  - "sourceMap: false"
```

Inside compilerOptions, `sourceMap` is set to false by default. If its set to true, upon running tsc, 
along with `app.js` file `app.js.map` file is also created which is sourcemap file.  

- Go to chrome dev tools -> Sources  -> app.js, app.ts.
  So we get access to ts file on the browser.
- We can make breakpoints in the ts file, so debug ts code directly in the browser


## Avoiding implicit "any"

```
let anything; //no type is declared so, type `any` is assigned implicitely
anything = 12;
```

- To prevent this behavior =>
tsconfig,json -> compilerOptions -> `noImplicitAny: true`
- It still allows to explictely set any type
eg: `let anything: any;`

- This feature has been remoed from TS 2.1 (?)

## More compiler options
- Detailed documentation on the TypeScript Compiler Config File (tsconfig.json) here: http://www.typescriptlang.org/docs/handbook/tsconfig-json.html

- Detailes on the Compiler Options can be found here: http://www.typescriptlang.org/docs/handbook/compiler-options.html


## Compiler improvements w/ TS 2.0

```
function controlMe(isTrue: boolean) {
  let result: number;
  if(isTrue) {
    result = 12;
  }
  return result;
}
```

In this case, if result is not initialized, it has value null. So there's no error.
If in compilerOptions, `strictNullChecks: true` is added, since result is not initalized 
and it expects a value to be number and not null, it throws an error


Other compiler improvements:

If we add extra parameter in the func. which is unused and add `noUnusedParameter: true`

```
function controlMe(isTrue: boolean, somethingElse: boolean) {
  let result: number;
  if(isTrue) {
    result = 12;
  }
  result = 33;
  return result;
}
```

- Results in cleaner code.

For starter projects, this can be configured in config file:

```
"noImplicitAny": true,
"noImplicitThis": true,
"noUnusedParameters": true,
"noUnusedLocals": true,
"noEmitOnError": true,
"strictNullChecks": true
```
_______________


# Typescript and ES6

Not necessarily all ES6 Features are supported by TypeScript, but quite a lot of them are.

The following `Compatibility Chart` helps you find out if you're favorite feature is supported:
http://kangax.github.io/compat-table/es6/

## let & const

- let keyword created block-scoped variable which means its contained in the block where its defined, while var keyword creates function or global-scoped variable

## What is block scope?
- Variable is accessed inside the nearest block-level only.
- `const` are immutable

```
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
```


## Arrow functions

```
/* ARROW FUNCTIONS */

const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
};
console.log(addNumbers(10, 2));


// const multiplyNumbers = (number1: number, number2: number): number => {
//   return number1 * number2;
// };

//OR

const multiplyNumbers = (number1: number, number2: number): number => number1 * number2;

console.log(multiplyNumbers(10, 5));
```

The type definition would be: const addNumbers: (number, number) => number 

- If single arg, omit parenthesis when not decalring type. But if type is declared so wrap w/ parenthesis

```
const print = (content:string):string => "print me" + content;
```

## Functions and default params
- Works w/ arrow func. as well as old func. syntax

```
const countdown = (start: number = 10): void => { //returns nothing
  console.log(start); //20
  while (start > 0) {
    start--;
  }
  console.log("Done!", start); // Done! 0
}
countdown(20);
```

## Rest & Spread Operator
- Allow to work w/ arrays and list of data, and the diff is array is kind of object where
you store multiple values whereas list of values is just a list.

Eg: 

```
Array of numbers => [1, 4, 7, -5]
List of numbers => 1, 4, 7, -5
```
We can pass list of no. to a function. 
Eg: Math.max(numbers) //won't work by passing array of no.
Instead Math.max(1, 4, 7, -5) // 7

So, if working w/ array use `spread operator` which spreads array into single value
`Math.max(...numbers)`


```
const join = (string1: string, string2: string) => {
    return string1 + string2;
}
 
const names = ["Brian ", "Romano"];
 
console.log(join(...names)); // Brian Romano
```


### Rest operator

```
function makeArray(args: number) {
  return args;
}
// doesnt works, since func expects list of args, but get only one element as argument
```

```
function makeArray(arg1: number, arg2: number) {
  return [arg1, arg2];
}

console.log(makeArray(1, 2)); // [1, 2]
// but this way isn't flexible. You dont know how many args are there.
```

So, use rest operator

```
function makeArray(name: string, ...args: number[]) {
  return args;
}
console.log(makeArray("Meg", 1, 2, 6)); // [1, 2, 6]
```


> Note: *Rest Parameters & Tuples*

Since TypeScript 3, you can also use tuples as types for rest expressions.

For example, these two function signatures are equal:

```
function printInfo(name: string, age: number) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
function printInfo(...info: [string, number]) {
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
```


## Destructuring Arrays

*Old way:*

```
const hobbies = ["Cooking", "Drawing"];
const hobby1 = hobbies[0];
const hobby2 = hobbies[1];

console.log(hobby1, hobby2);
```

*New way:*

```
const hobbies = ["Cooking", "Drawing"];
const [hobby1, hobby2] = hobbies; //assigns the value by the position of elements in the array
console.log(hobby1, hobby2);
```

- Rest operator with destructuring
You can also use rest operator like this:

`var [a, b, ...rest] = [1,2,3,4,5]; `

where `rest` will be an array with values: 3,4,5


## Destructuring objects

```
const userData = {name: "Meg", age: 28};
const userName = userData.name;
const userAge = userData.age;
```

Rewritten as:

```
const data = {username: "Meg", age: 28};
const {username, age} = data;

// For assigning diff names to the constants =>
const {username: myName, age: myAge} = data;
```


## Template literals
- Kind of extended strings with more features.

```
const userName = "Meg";
const greeting = `This is a heading!
I am ${userName}.
This is cool!`
```
//each new line, prints a new line


______________________________________________________________________

# Using classes to create objects

## Introduction
TS is compiled to old ES5 syntax

Example from TS playground:

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

will be compiled to 

```
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
```


## Creating classes & class properties

- Classes are blueprints of objects which has some properties and methods.

```
class Person {
  public name: string;
  //can prefix property name with public (accessible from outside), 
  //or we can remove it since by default its public already

  private type: string;
  // js (es5 or 6 doesnt have private property, but w/ ts we can create private property)
  //private property are only available from the object you create based on the Person class, i.e
  //only within this object

  protected age: number;
  //protected property also meets the above definition, but additionally they're also accessible from 
  //any objects/classes  which inherit from this class

  constructor(name: string) {
    this.name = name; //this.name refers to the property of class, name refers to the argument passed
  }
}
```

All these properties are set directly inside class body and not inside constructor function


Shortcut for setting up property inside class which is also setup in the constructor

```
class Person {
  name: string
  private type: string;
  protected age: number;

  constructor(name: string, public username: string) { //expects an arg username and ts creates a public property out of it
    this.name = name;
  }
}
```

Use the class by `instantiating` it which means `create an object` based on this class.

const person = new Person("Meg", "Meggie");
console.log(person);

* Age and type properties are not accessible outside the class since they are private/protected


## Class methods and access modifiers 

- If we cant access private/protected properties outside the class, why to create them in the first place?
So to use those properties, add a method to the class, and call that method from outside the class which
uses the private/protected properties

```
class Person {
  name: string
  private type: string;
  protected age: number = 27;

  constructor(name: string, public username: string) { 
    this.name = name;
  }

  printAge() {
    console.log(this.age);
  }

  setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person("Meg", "Meggie");
console.log(person.name, person.username);
person.printAge();
person.setType("Cool guy!");
```

- Methods can also be private/public. If method is set private they cant be accessed
from outside.

```
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
```


## Inheritance