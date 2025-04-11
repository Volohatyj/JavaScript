'use strict';
let inputVV = '';

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