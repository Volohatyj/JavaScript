"use strict"

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) == 'string') {
        return(str.split("").reverse().join(""))
    } else {
        return 'Ошибка!'
    }
}


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// const baseCurrencies = [];
// const additionalCurrencies = [];


function availableCurr(arr, missingCurr) {
    let available = 'Доступные валюты:\n';
    if (arr.length == 0) {
        return 'Нет доступных валют'
    };
    arr.forEach(element => {
        if (element != missingCurr) {
            available += `${element}\n`;
        }
    });
    return available;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB'));


console.log(reverse(someString));