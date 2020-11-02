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
const wallHeight = 80;
function calculate(value) {
  const newValue = value * 2.54;

  return newValue;
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);
