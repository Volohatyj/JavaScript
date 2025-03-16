'use strict'
const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

for (let i = 0; i < lines; i++) {
   result = '';
   for (let j = lines - i; j > 1; j--) {
      result += ' ';
   }
   // console.log(result);
   for (let j = 0; j < i + 1; j++) {
      if (j == 0) {
         result += '*';
      } else {
         result += '**';
      }
   }
   console.log(result);
}