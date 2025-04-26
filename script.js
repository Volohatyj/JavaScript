'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

/*
boxesQuery[0].remove();
boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
    // boxesGet[boxesGet.length] = div; // Не правильний підхід. Видає помилку. Ми не можемо на пряму змінювати HTMLCollection
}

console.log('boxesQuery:');
console.log(boxesQuery);
console.log('boxesGet:');
console.log(boxesGet);
// console.log(document.body.children);

// Створення масиву з масиво-подібного об'єкту
console.log('Array.from(boxesGet):');
console.log(Array.from(boxesGet)); // => отримуємо звичайний масив, він статичний і не слідкує за змінами в DOM-дереві

const boxesQuery2 = document.querySelectorAll('.box');
console.log(boxesQuery2);
*/

// Іноді серед всіх елементів портібно знайти тільки той що підходить за певними параметрами
boxesQuery.forEach(box => {
    if (box.matches('.this')) {
        console.log("This One!");
        console.log(box.outerHTML);
    }
});

// По всьому ланцюжку наверх шукає зазначений селектор ("wrapper") і виводить всі його дочірні елементи. Корисно, коли є складна розгалужена верстка
console.log(boxesQuery[0].closest('.wrapper'));