//DOM

//similar to CSS

//Select the element or group of elements you want to affect

//Decide the effect we want to apply to the selection

//many different ways
/*

document.body.style.backgroudColor = "blue";

document.body.style.color = "yellow";

document.getElementById("btn").style.color = "red";

// assign to a variable

const element = document.getElementById("element");

// do something

document.querySelector("element"); // do something

//window object

//console.log(window);

//returns a node object or a node list, which is an arraylike object

const btn = document.getElementById("btn");
const name = btn.nodeName;
const css = btn.style;

//console.log(btn);
//console.log(name);
//console.log(css);
*/

//window object = browser api
//document
//console.dir
//alert("hello");
//console.dir(document);

//Select the element or group of elements we want
//Decide the effect we want to apply to the selection
//getElementById('element')

//const hi = document.getElementById("title");
//h1.style.color = "red";

//const btn = document.getElementById("btn");

//btn.style.backgroundColor = "blue";
//btn.style.color = "white";

//document.getElementById('btn').style.backgroundColor = 'blue';
//document.getElementById('btn').style.color = 'white';

// getElementByTagName('tagname');
// node-list = array-like object
//index, length property but not array methods
/*
const headings = document.getElementsByTagName("h2");
//console.log(headings);
headings[0].style.color = "red";
//console.log(headings.length);

const items = document.getElementsByTagName("li");

//items.forEach(function () {
// console.log(item);
//});
items[2].style.color = "orange";
items[3].style.color = "blue";
const betterItems = [...items];

betterItems.forEach(function (item) {
  // console.log(item);
});

console.log(items);
console.log(betterItems); */

//Select the element or group of elements that we want
//Decide the effect we want to apply to the selection

//getElementByClassName('classname');

// node-list = array-like objects
// index, length property but not array methods

const listItems = document.getElementsByClassName("special");

console.log(listItems);

listItems[1].style.color = "blue";
