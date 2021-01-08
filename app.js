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
/*
const listItems = document.getElementsByClassName("special");

console.log(listItems);

listItems[2].style.color = "blue"; */

// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

//querySelector('any css'); -selects single
//querySelectorAll('any css')- selects all
/*
const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';

const item = document.querySelector('.special');
//console.log(item);

const lastItem = document.querySelector("li:last-child");
//console.log(lastItem);

const list = document.querySelectorAll('.special');
console.log(list);

list.forEach(function(item){
  console.log(item);
  item.style.color = 'white';
}); */

// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

//childNodes - returns all childNodes including whitespace which is treated as a text node

//children
//firstChild
//lastChild
/*
const result = document.querySelector('#result');
const allChildren = result.childNodes;
//console.log(allChildren);

const children = result.children;
console.log(children);

console.log(result.firstChild);
console.log(result.lastChild); */

// parentElement;
/*
const heading = document.querySelector('h2');
//console.log(heading.parentElement.parentElement.parentElement.parentElement);
const parent = heading.parentElement;
parent.style.color = 'red'; */

// previousSibling
// nextSibling
//return whitespace
/*
const first = document.querySelector('.first');
const second = (first.nextSibling.nextSibling.style.color = 'red');
console.log(second);

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);
console.log(last.nextSibling.nextSibling); */

//previousElementSibling
//nextElementSibling
/*
const first = document.querySelector('.first');

first.nextElementSibling.style.color = "red";
const last = document.querySelector('#last'); */

//nodeValue
//textContent
/*
const item = document.getElementById('special');
const value = item.firstChild.nodeValue;
const easyValue = item.textContent;

console.log(easyValue); */

// getAttribute();
// setAttribute();
/*
const first = document.querySelector('.first');
const idValue = first.getAttribute('id');
//console.log(idValue);

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink);


const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = 'I also have a class of firsts';
console.log(last);

const links = document.querySelectorAll('.first');
console.log(links); */

// className
//classList

//const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

//const classValue = first.className;
//console.log(classValue);

//second.className = 'colors text';
//third.classList.add('text');
 //const classValue = third.classList;
 //console.log(classValue);

 /*
 third.classList.add('text', 'colors');
 third.classList.remove('text');

 let result = third.classList.contains('colors');
 if(result) {
   console.log('Hello World');
   
 }else{
   console.log('does not have the class');
 }

 const classValue = third.classList;
 console.log(classValue);
*/

// createElement('element');
// createTextNode('text content');
// element.appendChild(childElement)

// insertBefore('element', 'location');

//const result = document.querySelector('#result');
//const first = document.querySelector('.red');
// create empty element

/*
const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv, result);
//document.body.appendChild(bodyDiv);

//result element
const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

//result.insertBefore(heading, first);

const smallHeading = document.createElement('h6');
const smallText = document.createTextNode('I am a small heading text');
smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);


//result.appendChild(heading);

console.log(result.children); */

// prepend
// innerText

/*
const heading = document.createElement('h2');
heading.innerText = `I am a dynamic heading`;

document.body.prepend(heading); */

// remove
// removeChild
/*
const result = document.querySelector('#result');
//result.remove();
const heading = result.querySelector('h6');
result.removeChild(heading);
console.log(heading);
*/

//innerHTML
//textContent 
/*

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

const randomVar = 'random value';

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">${randomVar}</li>
      <li>List Item</li>`;

document.body.appendChild(ul);     

div.textContent = 'hello world';
div.innerHTML = `<li class="item">${randomVar}</li>
      <li>List Item</li>`; */


// CSS      
/*
const random = document.querySelector('.random');
//random.style.backgroundColor = 'blue';
//random.style.color = "white";
//random.style.fontSize = '3rem';
//random.style.textTransform = "capitalize";


random.classList.add('title');

random.classList.add('paragraph'); */

// select element
//addEventListener()
//what event, what to do(the callback function)

/*

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

function changeColors(){
  let hasClass = heading.classList.contains('red');
  if(hasClass){
    heading.classList.remove('red');
  }
  else{
    heading.classList.add('red');
  }

}

btn.addEventListener('click', changeColors); 
*/

// click- fires after full action occurs
//mousedown- button is pressed
//mouseup- button is released
// mouseenter- moved onto an element
//mouseleave- moved out of an element
/*
const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
  console.log('you clicked me');
})
btn.addEventListener('mousedown', function(){
  console.log('down');
})
btn.addEventListener('mouseup', function(){
  console.log('up');
});

heading.addEventListener('mouseenter', function(){
  heading.classList.add('blue');
});
heading.addEventListener('mouseleave', function(){
  heading.classList.remove('blue');
}) */

//keypress- when key is pressed
//keydown- when key is down
//keyup- when key is released
/*
const nameInput = document.getElementById('name');

nameInput.addEventListener('keypress', function(){
  console.log('you pressed a key');
});
*/

//event object argument e,evt
//info about triggered event
//event.type
//event.currentTarget
//this keyword
//preventDefault() - prevents default behavior
/*
const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');


heading.addEventListener('click', function(event){
console.log(event.currentTarget);
console.log(this);
});

btn.addEventListener('click', function(event){
  event.currentTarget.classList.add('blue');
  console.log(event.type);
});

function someFunc(e){
e.preventDefault();
}
link.addEventListener('click', someFunc);
*/

//currentTarget- always refers to the element to which the event handler has been attached to
//target-identifies the element on which the event occured.
/*
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    //console.log(e.currentTarget);
    //e.currentTarget.style.color = 'green';
    console.log('target',e.target);
    console.log('currentTarget', e.currentTarget);
    e.target.style.color = 'green';
  });
});
*/

//Allows select dynamic elements
// event propogation- order the events are fired
// event bubbling- clicked element first then bubbles up- default
// event capturing- fires at the root and fires until it reaches target
/*
const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e){
  console.log('current target', e.currentTarget);
  //console.log('target', e.target);
  //if(e.target.classList.contains('link')){
  //  console.log('you clicked on the link');
 // }
}
function stopPropogation(e){
  console.log('you clicked on a list');
  e.stopPropogation();
}



container.addEventListener('click', showBubbling, {capture: true});
document.addEventListener('click', showBubbling, {capture: true});
window.addEventListener('click', showBubbling, {capture: true});
list.addEventListener('click', showBubbling, {capture: true});
*/

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
//const heading = document.querySelector('.heading');
//console.log(heading);

function sayHello(){
  console.log('Hello, there');
}

btn.addEventListener('click', function(){
  const element = document.createElement('h1');
  element.classList.add('heading');
  element.textContent = `I'm inside the container`;
  container.appendChild(element);
});

container.addEventListener('click', function(e){
  if(event.target.classList.contains('heading')){
    console.log('hello there');
  }
});
//heading.addEventListener('click', sayHello);


