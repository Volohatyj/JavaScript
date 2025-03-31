"use strict"

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        return "hello"
    }
};

// const rhyan = {
//         health: 100
//     }
    
// Object.setPrototypeOf(rhyan, soldier);
const rhyan = Object.create(soldier);

console.log(rhyan.sayHello());