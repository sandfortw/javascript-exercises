const container = document.querySelector('#container');

// a <p> with red text that says “Hey I’m red!”
const redP = document.createElement('p');
redP.textContent = 'Hey I\'m red!';
redP.style.color = 'red';
container.appendChild(redP);

// an <h3> with blue text that says “I’m a blue h3!”
const blueH3 = document.createElement('H3');
blueH3.textContent = 'I’m a blue h3!';
blueH3.style.color = 'blue';
container.appendChild(blueH3);

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const pinkDiv = document.createElement('div');
pinkDiv.setAttribute('style', 'background: pink; border-color: black; border-style: solid');
const element1 = document.createElement('h1');
element1.textContent = 'I\’m in a div';
pinkDiv.appendChild(element1);

const element2 = document.createElement('p');
element2.textContent = 'ME TOO!';

pinkDiv.appendChild(element2);
container.appendChild(pinkDiv);

// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   alert("Hello World");
// });

// function alertFunction() {
//   alert("YAY! YOU DID IT!");
// };

function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector('#btn')
// btn.onclick = alertFunction;
btn.addEventListener('click', alertFunction);

// btn.addEventListener('click', function (e) {
//   console.log(e);
// });

// btn.addEventListener('click', function (e) {
//   console.log(e.target);
// });

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});