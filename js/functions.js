'use strict'

// Упражнение по написанию кода 9: (**) Задача с собеседований на числа Фибоначчи

// Перше число 0
// Друге і третє є одиницями
// всі наступні є сумою двох попередніх значень
// Це має бути масив значень, що поповнюється.


function fib(level) {
   if (!Number.isInteger(level)) {
      return '';
   }
   let listFib = [];
   let num1 = 0;
   for (let  i = 0; i < level; i++) {
      if (i == 0) {
         num1 = 0;
      } else if (i == 1 || i == 2) {
         num1 = 1;
      } else {
         num1 = listFib[i-1] + listFib[i-2];
      }
      listFib.push(num1); 
   }
   let result = listFib.join(' ')
   return result;
}

console.log(fib(8));

// Упражнение по написанию кода 8: (*) Продвинутые задания на использование функций
// function getTimeFromMinutes(minutesTotal) {
//    if (!Number.isInteger(minutesTotal) || minutesTotal < 0 ) {
//       return "Ошибка, проверьте данные";
//    }
//    const hours = Math.floor(minutesTotal/60);
//    const minutes = minutesTotal - hours*60;
//    let strHours;
//    let strMinutes; 
//    if (hours < 5 && hours > 1) {
//       strHours = 'часа';
//    } else if (hours >= 5 || hours === 0) {
//       strHours = 'часов';
//    } else {
//       strHours = 'час';
//    }
//    if (minutes < 5 && minutes > 1) {
//       strMinutes = 'минуты';
//    } else if (minutes >= 5 || minutes === 0) {
//       strMinutes = 'минут';
//    } else {
//       strMinutes = 'минута';
//    }
//    const answer = `Это ${hours} ${strHours} и ${minutes} ${strMinutes}`;
//    return answer;
// }

// console.log(getTimeFromMinutes(64));

// function findMaxNumber(num1, num2, num3, num4) {   
//    const numMax = Math.max(num1, num2, num3, num4);
//    if (isNaN(numMax)) {
//       return 0;
//    }
//    return numMax
// }


// console.log(findMaxNumber(5, 4, 1.1, 0));

// Упражнение по написанию кода 7: (*) Продвинутые задания на использование функций
// function calculateVolumeAndArea(sideLength) {
//    if (!Number.isInteger(sideLength) || typeof(sideLength) != 'number' || sideLength < 0) {
//       console.log('При вычислении произошла ошибка')
//    } else {
//       const volume = Math.pow(sideLength, 3);
//       const area = Math.pow(sideLength, 2);
//       console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
//    }
// }

// calculateVolumeAndArea('1');

// function getCoupeNumber(num) {
//    if (num > 36 || num === 0) {
//       console.log('Таких мест в вагоне не существует');
//    } else if (!Number.isInteger(num) || num < 0 || typeof(num) != 'number') {
//       console.log('Ошибка. Проверьте правильность введенного номера места');
//    } else {
//       const cupe = Math.ceil(num / 4);
//       console.log(cupe);   
//    }
// }

// getCoupeNumber(0);



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

