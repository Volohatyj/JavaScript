'use strict';
let inputVV = '';

<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('dataInput');
    const outputElement = document.createElement('p');
    document.body.appendChild(outputElement);

    inputElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const inputValue = inputElement.value;
            outputElement.textContent = 'Ви ввели: ' + inputValue;
            inputElement.value = '';
            processInput(inputValue);
            console.log(`inputValue * 2 (всередині обробника): ${inputVV * 2}`); // Виводимо одразу після введення
        }
    });

    function processInput(data) {
        console.log('Обробка введених даних (з main.js):', data);
        inputVV = data; // Використовуємо оператор присвоєння
        // Ваш складний код обробки даних
    }
    // Інший ваш JavaScript код може бути тут
});

// Цей console.log виконається ДО того, як користувач щось введе
console.log(`inputValue * 2 (до введення): ${inputVV * 2}`);
=======
// console.log('document.body');
// console.log(document.body);
// console.log(document.body.childNodes);
// console.log(document.body.lastChild);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.documentElement);

// console.log(document.querySelector('#current'));
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]'));
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').nextSibling.nextSibling);

const childNodes = document.body.childNodes;
for (let node of childNodes) {
    if (node.nodeName != '#text') {
        console.log(node);
    };
};
>>>>>>> 6918016d794e093921b8060d1fcc65e6c4d167cf
