'use strict'
function sayHello(name) {
   return `Привет, ${name}!`
};

console.log(sayHello("Anton"));

function returnNeighboringNumbers(num) {
   let data = [];
   data.push(num - 1);
   data.push(num);
   data.push(num + 1);
   return data
}

console.log(returnNeighboringNumbers(5))

function getMathResult(num1, num2) {
   result = '';
   if (typeof(num2) != 'number' || num2 <= 0) {
      return num1;
   };
   for (i=1; i < num2 + 1; i++) {
      result += num1 * i;
      if (i < num2) {
         result += '---';
      }
      // console.log(i, num1 * i)
   }
   return result
}

console.log(getMathResult(5, -1));

console.log(typeof(0) === 'number');