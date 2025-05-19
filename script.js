'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

const width = box.clientWidth;
const height = box.clientHeight;

const offsetWidth = box.offsetWidth;
const offsetHeight = box.offsetHeight;
const scrollHeight = box.scrollHeight;

console.log(width, height);
console.log(offsetWidth, offsetHeight);
console.log(scrollHeight);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
}); 

console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style);
console.log(style.display);

console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);

// window.scrollBy(0, 400); // Відносно поточного положення
// window.scrollTo(0, 400); // Відносно початкового положення