'use strict'
// Упражнение по написанию кода 7: (*) Продвинутые задания на использование функций
function calculateVolumeAndArea(sideLength) {
   if (!Number.isInteger(sideLength) || typeof(sideLength) != 'number' || sideLength < 0) {
      console.log('При вычислении произошла ошибка')
   } else {
      const volume = Math.pow(sideLength, 3);
      const area = Math.pow(sideLength, 2);
      console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
   }
}

calculateVolumeAndArea('1');

function getCoupeNumber(num) {
   if (num > 36 || num === 0) {
      console.log('Таких мест в вагоне не существует');
   } else if (!Number.isInteger(num) || num < 0 || typeof(num) != 'number') {
      console.log('Ошибка. Проверьте правильность введенного номера места');
   } else {
      const cupe = Math.ceil(num / 4);
      console.log(cupe);   
   }
}

getCoupeNumber(0);

console.log(Math.pow(3, 3));

// function sayHello(name) {
//    return `Привет, ${name}!`
// };

// console.log(sayHello("Anton"));

// function returnNeighboringNumbers(num) {
//    let data = [];
//    data.push(num - 1);
//    data.push(num);
//    data.push(num + 1);
//    return data
// }

// console.log(returnNeighboringNumbers(5))

// function getMathResult(num1, num2) {
//    result = '';
//    if (typeof(num2) != 'number' || num2 <= 0) {
//       return num1;
//    };
//    for (i=1; i < num2 + 1; i++) {
//       result += num1 * i;
//       if (i < num2) {
//          result += '---';
//       }
//       // console.log(i, num1 * i)
//    }
//    return result
// }

// console.log(getMathResult(5, -1));

