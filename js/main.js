"use strict"

const arr = [10, 2, 30, 40, 5];

arr.sort(sortNum);

function sortNum(a, b) {
    return a-b;
}

console.log(arr);
arr.pop(); // видаляє останній елемент
arr.push(10); // додає елемент в кінець масиву

arr.forEach(function(value, i, arr) {
    console.log(`${i}: ${value} is inside the list ${arr}`);
})

console.log(arr);

// for (let value of arr) {
//     console.log(value);
// }
