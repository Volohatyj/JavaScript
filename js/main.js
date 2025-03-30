"use strict"

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        return 'Семья пуста';
    }
    let message = "Семья состоит из: ";
    arr.forEach(element => {
        message += element + " "
    });
    message = message.trim();
    return message;
}


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let value of arr) {
        let output = '';
        output = value;
        console.log(output.toLowerCase());
    }
    
}
standardizeStrings(favoriteCities);

console.log(showFamily(family));