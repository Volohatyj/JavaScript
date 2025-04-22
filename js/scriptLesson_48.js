// Урок 48. Події на мобільному браузері
// touchstart - подія виникає при дотику по даному елементу
// touchmove - якщо палець при дотику до елемента рухається
// touchend - палець відірвався від елемента
// touchenter - коли ведемо плальцем по екрану і натрапляємо на елемент, на який навішено цю подію
// touchleave - коли ведучи пальцем, виходимо за межі елементу, на який навішено цю подію
// touchcancel - коли точка дотику більше не реєструється на поверхні, наприклад, вихід за межі браузера

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener(('touchstart'), (event) => {
        event.preventDefault(); //Відміна стандартної поведінки браузера
        console.log('START');
        console.log(event.targetTouches);
    });

    box.addEventListener(('touchmove'), (event) => {
        event.preventDefault(); //Відміна стандартної поведінки браузера
        console.log('move');
        console.log(event.targetTouches[0].pageX);
    });

    box.addEventListener(('touchend'), (event) => {
        event.preventDefault(); //Відміна стандартної поведінки браузера
        console.log('end');
    });
});

/*
Властивості об'єкту події (event)
touches - список всіх пальців що взаємодіють зараз з  екраном:=> TouchList {0: Touch, length: 1}
targetTouches - список всіх пальців що взаємодіють зараз з елементом:=> TouchList {0: Touch, length: 1}
changedTouches - список всіх пальців що приймають участь в поточній події:=> 

*/