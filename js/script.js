'use strict';
 
function powIterated(x, n) {
    let result = 1;
    if (n === 0) {
        return 1;
    } else {
        for (let i = 0; i < n; i++) {
            result *= x;
            console.log(`i: ${i}, result: ${result}`);
        };        
        return result
    }
};

// powIterated(2, 5);

const x = 2,
    n = 8;


function powRecursion(x, n) {
    if (n === 0) {
        return 1;
    } else {
        return x * powRecursion (x, n - 1);
    }
};

console.log(`Math.pow: ${Math.pow(x, n)}, powRecursion: ${powRecursion(x, n)}`);
console.log(`Math.pow: ${Math.pow(2, -2)}`);