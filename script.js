'use strict';

const btns = document.querySelectorAll('button');

console.log(btns[0].classList.length); // кількість класів в елементу
console.log(btns[0].classList.item(0)); // повертає клас blue який знаходиться під певним індексом
console.log(btns[0].classList.item(1)); // повертає клас some який знаходиться під певним індексом
console.log(btns[0].classList.add('red')); // додає клас red
console.log(btns[0].classList.add('blue')); // видаляє клас blue
console.log(btns[0].classList.toggle('blue')); // 