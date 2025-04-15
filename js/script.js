'use strict';
 
function factorial(n) {
    let result = 1
    if (n <= 0) {
        return result;
    } else if (!Number.isInteger(n)) {
        return 'Nan';
    }; 
    if (n == 1) {
        return result;
    } else {
        result *= n*factorial(n-1); 
    };
    return result;
};

console.log(factorial(0.1));