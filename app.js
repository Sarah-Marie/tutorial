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
