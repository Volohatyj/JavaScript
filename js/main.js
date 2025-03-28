"use strict"

const options = {
    name: 'test',
    height: 1280,
    width: 1920,
    colors: {
        border: 'black',
        bg: 'gray'
    },
    printTest: function() {
        console.log("Test");
    }
}

const {border, bg} = options.colors;
console.log(border);
console.log(bg);

options.printTest();

console.log(Object.keys(options).length);

// for (let key1 in options) {
//     if (typeof(options[key1]) === 'object') {
//         for (let key2 in options[key1]) {
//             console.log(`Key: ${key2}, value: ${options[key1][key2]}`)
//         }
//     } else {
//         console.log(`Key: ${key1}, value: ${options[key1]}`)
//     }
// }