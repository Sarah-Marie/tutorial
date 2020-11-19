//const number = 34;
//let pants = 2.456;
//pants = "are great";
//const number2 = 2.456;

//const add = number + number2;
//const sub = number - number2;
//const mult = number * number2;
//const div = number / number2;
//console.log(add);
//console.log(sub);
//console.log(mult);
//console.log(div);

// modulus operator (%) gets the remainder

/*let number = 40;
number += 5;
number -= 5;

const slices = 10;
const children = 4;
//const amount = slices / children;
const amount = slices % children;

const random = 4 + 6 + 10 * 10;
const random2 = (4 + 6 + 10) * 10;
console.log(random);
console.log(random2);
console.log(amount);

//console.log(number);

//Implicit type conversion

//Math operation on a string

const value = name - lastName;
console.log(value);

let number3 = 10;
let number4 = 25;
number4 = "pants";
const result2 = number3 - number4;
console.log(result2);

//Arrays, Functions, and Objects
//arrays - [], 0 index based

const friend1 = "Anna";
const friend2 = "Anna";
const friend3 = "Anna";
const friend4 = "Anna";

const friends = ["john", "peter", "bob", "susy", 45, undefined, null];

let bestFriend = friends[2];
friends[4] = "anna";
console.log(friends);
console.log(friends[4]);

console.log(bestFriend);

console.log(friends[0]);

//Functions- declare, invoke

const bob = "Bob";
const susy = "Susy";
const anna = "Anna";

function greet(name) {
  //logic
  console.log("Hello There " + name);
}

//greet bob
greet("Bob");
//greet anna
greet("Anna");

//greet susy
greet("Susy"); */
//params- when declare/define

// 1 inch 2.54 cm
//const wallHeight = 80;
//function calculate(value) {
//const newValue = value * 2.54;

//return value * 2.54;
//}

//const width = calculate(100);
//const height = calculate(wallHeight);

//const dimensions = [width, height];
//console.log(dimensions);
//diff- hoisting, use- arrow func, libraries

// function definition/declaration
/*
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);
//function expressions
const add = function (num1, num2) {
  return num1 + num2;
}
//const thirdValue = add(5, 6);
const thirdValue = add(5, 6);
const values = [firstValue, secondValue, thirdValue];
console.log(values);

const multiply = (num1, num2) => num1 * num2;
//gatsby library/react
exports.nameOfMethod = function() {

}*/

//Arrays, functions, and objects
//objects- key/value pairs methods
// dot notation
//create object in javascript
/*const person = {
 name: 'john',
 lastName: 'peters',
 age:40,
 education:false,
 married:true,
 siblings:['anna', 'susan', 'peter'],
 //this is a method 
 greeting:function () {
   console.log('Hello my name is JOHN');

 },
};

//or greeting() which is shorthand instead of greeting:function()

const age = person.age;
console.log(age);

console.log(person.name);
console.log(person.siblings[2]);
person.greeting(); */

//Conditional statements
// >, <, >=, <=, ==, ===, !=, !==

//if(condition) {
//code to execute if condition is met
//}

/*const value = 2 > 1;
const value2 = 1 > 2;
if(value2) {
  console.log('hello world');
}
else{
  console.log('hello people');
}*/
// else if and ! (this is not)
/*
const num1 = 6;
const num2 = 6;
const result = num1 >= num2;

const value = true;

if(!value){
  console.log('value is true');
}*/

/*if (num1 > num2) {
  console.log('first number is bigger than second');
} 
else if(result){
  console.log('first number equal to a second');
}
else {
  console.log('second number is bigger than first');
}*/

// == checks only value
// === checks value and type

/*const num1 = 6;
const num2 = 10;
//if num1 = num2  = is the assignment == is equality === checking equality and type -matters when returning numbers into string for example
// !== (is not equal to)
const value = num1 == num2;
const value2 = num1 === num2;

console.log(value);
console.log(value2);*/

//logical operators
// (|| - OR), (&& - AND), !

/*const name = 'peter';
const age = 24;

if(name === 'bob' || age === 24) {
  console.log('hello there user');
} else {
  console.log('wrong values');
}*/

//Switch
//dice values : 1-6
/*
const dice = 3;

//switch (lots of react uses redux, which uses switch statements)

switch(dice) {
  case 1:
    console.log('you got one');
break;

case 2:
  console.log('you got two');
break;
case 2:
console.log('you got three');
break;
default:
  console.log('you did not roll the dice');
}*/
//else if "else" checks all the conditions I did not meet
/*
if (dice === 1) {
  console.log('you got one');
}
else if (dice === 2) {
  console.log('you got two');
}
else (dice < 1 || dice > 6) {
  console.log('you did not roll the dice');
}*/

//all if
/*if (dice === 1) {
  console.log('you got one');
} if (dice === 2) {
  console.log('you got two');
}
if (dice < 1 || dice > 6) {
  console.log('you did not role the dice');
}*/

//Loops
//repeatedly run a block of code while condition is true
//while loop
//turn off autosave
/*

let amount = 10;

while (amount > 0) {
  console.log('I have ' + amount + " dollars and I am going to the mall");
  amount==;
} */

//do while loop
//code block first, condition second
// runs at least
/*
let money = 0;

do{
  console.log("you have " + money + " dollars");
  money++;
}
while(money < 10); */

//for loop

/*let i;
for (i = 0; i < 10; i++) {
  console.log("and the number is : " + i);
}
// let number = (starting point) number >= (how long the loop will run) number-- (increase or decrease each ieteration)
for (let number = 11; number >= 0; number--) {
  console.log("and the number is : " + number);
}

//String properties and methods
//wrapper string object, don't memorize methods

let text = 'Peter Jordan';

let result = text.length; //property
console.log(result);

console.log(text.length);

console.log(text.toLowerCase()); //method
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(12));
//combine method with property
console.log(text.charAt(text.lenght - 1));
console.log(text.indexOf('e'));
console.log(text.trim());
console.log(text.startsWith('peter'));
console.log(text.trim().toLowerCase().startsWith('peter'));
console.log(text.includes('eter'));
console.log(text.includes('eter'));
console.log(text.slice(0, 2));
console.log(text.slice(-2));









const person = {
  name: 'peter', //property
  greeting() {
    //method
    console.log("Hey, I'm Peter");
  },
};
console.log(person);

console.log(person.name);
person.greeting();*/

//Template Literals- ES6+
//Backtick characters`` - above tab (left from one)
//Interpolation ${} - insert expression (value)

/*const name = 'john';
const age = 25;
const sentence = "Hey, it's " + name + ' and he is ' + age + ' years old';


const value = `Hey, it's ${name} and he is ${age} years old. And here is some simple math ${ 
  4 + 4
}`;
console.log(value);
console.log(sentence);*/

//Array Properties and Methods
/*let names = ['john', 'bobo', 'barry', 'olga', 'ben', 2, 3, 4];

//length  -1 always returns the last value
console.log(names.length);
console.log(names[names.length - 1]);

//concat
const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames);
console.log(allNames);
//reverse
console.log(allNames.reverse());

//unshift -inserts new elements at the start of the array
allNames.unshift('susy');
allNames.unshift('anna');
console.log(allNames);

//shift -removes first element from array and returns it
allNames.shift();
allNames.shift();
console.log(allNames);

//push -rmeove end of list
allNames.push('susy');
console.log(allNames);

//pop -also removes items from the end of the array
allNames.pop();
console.log(allNames);

//splice -grabs specific items out of the array-mutates original array

const specificNames = allNames.splice(2, 1);
console.log(specificNames);
console.log(allNames);*/

//Arrays and for loop

//Exercise - Full Name

/*const names = ['anna', 'susy', 'bob'];
const lastName = 'shakeandbake';
let newArray = [];

//for loop to iterate through array 
for(let i = 0;i < names.length;i++) {
  console.log(i);
  console.log(names[i]);
  //newArray.push(names[i]);
  //const fullName = `${names[i]} ${lastName}`;
  //newArray.push(fullName); OR
  newArray.push(`${names[i]} ${lastName}`);
}
console.log(names);
console.log(newArray);
*/

//Functions, return, if, arrays, for loop
/*
const gas = [20, 40, 100, 30];
const food = [10, 40, 50];
const fastfood = [24, 19, 16, 30, 15];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log(`Whoa!  You are spending way too much`);
    return total;
  }
  console.log(`You are good.  Total is less than 100`);

  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 500, 1]);
const fastfoodTotal = calculateTotal(fastfood);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
  fastfood: fastfoodTotal,
}); */

//Reference vs. Value
//Primitive Data Types
// String, number, symbol, boolean, undefined, null,
//arrays, functions, objects = object
//type of

//When assigning primitive data type value to a variable any changes are made directly to that value
//without afffecting original value

//when assigning non-primitive data type value to a variabel is
//done by reference so any changes will affect all the references
/*
const number = 1;
const number2 = number;

console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = { name: "bob" };
let person2 = { ...person };
person2.name = "susy";

console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);*/
//Null and undefined
//both represent "no value"

//undefined- "javascript can not find value for this"

//variable without value
//missing function arguments
//missing object properties

/*let number = 20 + null //20 + 0

console.log(number);

let number3 = 20 + undefined;
console.log(number3);*/

//truthy and falsy
// "", '', ``, 0, -0, NaN, false, null, undefined
/*
const bool1 = true;
const bool2 = 2 > 1;

const text = 'john';

if(text) {
  console.log(`hey the value is truthy`)
}
else {
  console.log(`hey the value is falsy`);
}

//nul- "developer sets the value"
*/

//Unary operator - typeof
/*

let text = "some text";
console.log(typeof text); //operand

//binary operator - assignment

let number = 3;
let number2 = 2 + 5;

//ternary operator
//condition ? (runs if true) : (runs if false)
const value = 2 > 1;

value ? console.log("value is true") : console.log("value is false");*/

/*
if(value) {
 console.log('value is true');

}
else {
  console.log('value is false';)
}*/

//Global Scope vs Local Scope
//any variable outside code block { } is said to be in Global Scope
//can be accessed anywhere in the program
//Gotchas: name collisons, modify by mistake

/*let names = "bobo";
name = "peter";

function calculate() {
  //some other code...
  console.log(name);
  name = "orange";
  function inner() {
    name = "inner name value";
    console.log(`this is from inner function ${name}`);
  }
  inner();
}
calculate();

if (true) {
  console.log(name);
  name = "pants";
}
console.log(`my name is ${name} and I'm awesome`);*/

// Local Scope
// can not be accessed from outside code blocks
// if - NOT VAR
/*
let name = "bobo";

function calculate() {
  const name = "john";
  const age = 25;
  //code goes here
  becomesGlobal = "global variable";
}

calculate();
console.log(becomesGlobal);

if (true) {
  const name = "john";
}

{
  const name = "john";
  const special = "special";
}
console.log(special);
console.log(`my name is ${name} and I'm awesome`);*/

//Variable Loop
// {} - code block
/*
const globalNumber = 5;

function add(num1, num2) {
  const globalNumber = 20;
  const result = num1 + num2 + globalNumber;
  function multiply() {
    const globalNumber = 100;
    const multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  multiply();
  return result;
}

console.log(add(3, 4));
*/

/*function greetMorning(name) {
  const myName = "john";
  console.log(`Good Morning ${name}, my name is ${myName}`);
}

function greetAfternoon(name) {
  const myName = "john";
  console.log(`Good Afternoon ${name}, my name is ${myName}`);
}*/
/*
// callback function
function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}

// higher order function -we want to make this flexible
function greet(name, cb) {
  const myName = "john";
  console.log(`${cb(name)}, Je m'apelle ${myName}`);
}
greet("bobo", morning);
greet("peter", afternoon);*/

//  Callback functions, Higher Order Functions, Functions as First Class Objects/Citizens

//Functions are first class objects- stored in a variable (expression), passed
//as an argument to another function, return from the function (closure)

//Higher Order Function- Accepts another function as an argument or returns another function as a result

//Callback Function - passed to another function as an argument and executed inside that function

// ARRAY ITERATORS
// Powerful Array Methods
//forEach, map, filter, find, reduce
//Iterate over array -no for loop required
//Accept CALLBACK function as an argument, calls CALLBACK against each item in an array.
//Reference Item in the Callback Paramater.

//const numbers = [0, 1, 2, 3, 4];

//show all numbers

//forEach

// does not return new array
/*
const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susie", age: 30, position: "the boss" },
];

function showPerson(person) {
  console.log(person.position.toUpperCase());
}

//people.forEach(showPerson);

people.forEach(function (item) {
  console.log(item.name.toUpperCase());
}); */

//MAP

//Returns a new array
//does not change size of the original array
//uses values from original array when making new one
/*
const people = [
  { name: "bob", age: 20, position: "developer", experience: "junior" },
  { name: "peter", age: 25, position: "designer", experience: "junior" },
  { name: "susie", age: 30, position: "the boss", experience: "senior" },
];

const ages = people.map(function (person) {
  return person.age + 20;
});

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join("");
console.log(names); */

//filter

//Does return a new array
//can manipulate the size of new array
//returns based on condition
/*
const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "Jim Bob", age: 68, position: "retired consultant" },
  { name: "Katie", age: 32, position: "human resources" },
  { name: "Anna", age: 36, position: "CEO" },
];

const youngPeople = people.filter(function (person) {
  return person.age <= 35;
});

const developers = people.filter(function (person) {
  return person.position === "developer";
});

//console.log(developers);

console.log(youngPeople); */

//Find
//returns single instance -(in this case, object)
//returns first match, if no match will return "undefined"
//great for getting unique value
/*
const people = [
  { name: "bob", age: 20, position: "developer", id: 1 },
  { name: "Jim Bob", age: 68, position: "retired consultant", id: 2 },
  { name: "Katie", age: 32, position: "human resources", id: 3 },
  { name: "Anna", age: 36, position: "CEO", id: 4 },
];

const names = ["bob", "Jim Bob", "katie", "Anna"];
const person = people.find(function (person) {
  return person.id === 3;
});

console.log(
  names.find(function (name) {
    return name === "bob";
  })
);

console.log(person);
*/

//Reduce
// iterates, callback function
//reduces to a single value- number, array, object
// 1 parameter ('acc')- total of all calculations
// 2 parameter ('curr')- current iteration/value
/*
const people = [
  { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
  {
    name: "Jim Bob",
    age: 68,
    position: "retired consultant",
    id: 2,
    salary: 400,
  },
  { name: "Katie", age: 32, position: "human resources", id: 3, salary: 250 },
  { name: "Anna", age: 36, position: "CEO", id: 4, salary: 210050 },
];

const total = people.reduce(function (acc, currItem) {
  console.log(`total: ${acc}`);
  console.log(`current money : ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 500);

console.log(total); */

//Math
//Standard built-in objects -always available
//floor rounds down
//ceiling rounds up

//const number = 4.56789;
//const result = Math.ceil(number);

//const number = 25;
//const result = Math.sqrt(number);

//const result = Math.PI;

const result = Math.max(4, 5, 6, 7, 8, 9, 100, 200, 1000);
console.log(result);
