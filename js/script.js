'use strict';

const btns = document.querySelectorAll('button');

/*
btns[0].onclick = function() {
    alert('Hi Jack!');
};

btns[0].onclick = function() {
    alert('Click 2'); // Спрацює саме останній варіант обробщика події
};
*/

/*
btns[0].addEventListener('click', () => {
    alert('addEventListener'); // виконується першим
});

btns[0].addEventListener('click', () => {
    alert('addEventListener2'); // виконується після попереднього обробщика
});
*/

/*
btns[0].addEventListener('mouseenter', (event) => { // Якщо окрім події є додаткові аргументи, то вони ідуть наступними через кому
    alert('курсор над кнопкою');
    console.log(event); // => всі параметри події
    console.log(event.type); // => mouseenter
    console.log(event.target); // => цільовий фрагмент HTML-коду
    event.target.style.display = 'none';
});
*/

/*
btns[0].addEventListener('click', (event) => { // Якщо окрім події є додаткові аргументи, то вони ідуть наступними через кому
    console.log(event); // => всі параметри події
    console.log(event.type); // => mouseenter
    console.log(event.target); // => цільовий фрагмент HTML-коду
    event.target.style.display = 'none';
});
*/

/*
const deleteElement = (event) => {
    event.target.remove(); //обидва варіанти робочі
    // event.target.style.display = 'none';
};
btns[0].addEventListener('click', deleteElement);
*/

/*
let i = 0;
const deleteElement = (event) => {
    console.log(event.type);
    i++;
    if (i == 3) {
        btns[0].removeEventListener('click', deleteElement);
        event.target.remove(); 
    }
};
btns[0].addEventListener('click', deleteElement);
*/

/*
//Всплиття подій. Подія спершу спрацьовує на вкладеному елементі, а потім на батьківському
const overlay = document.querySelector('.overlay');
let i = 0;
const deleteElement = (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.type);
    i++;
    if (i == 3) {
        btns[0].removeEventListener('click', deleteElement);
        event.target.remove(); 
    }
};
overlay.addEventListener('click', deleteElement);
// btns[4].addEventListener('click', deleteElement);
*/

/*
// Відміна стандартних дій браузера
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.type);
    console.log(event.target);
    alert('Prohibited'); // завжди виконується першою
});
*/

/*
// Обробка псевдомасиву елементів
let i = 0;
const deleteElement = (btn) => {
    console.log(`i: ${i}`);
    i++;
    if (i >= 3) {
        console.log(btn.target);
        console.log(btn.currentTarget);
        console.log(btn.type);
        console.log('i = 3');
        // event.target.remove(); 
        btn.target.style.display = 'none';
    }
};

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});
*/

// Опції addEventListener()
const deleteElement = (event) => {
    event.target.remove(); //обидва варіанти робочі
    // event.target.style.display = 'none';
};
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});
