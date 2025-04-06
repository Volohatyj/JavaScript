'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    btn3 = document.getElementById('btn3'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'green';
box.style.width = '450px';

const num1 = 200;

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.width = `${num1}px`;
// }

hearts.forEach(item => {
    item.style.width = `${num1}px`
});

const div = document.createElement('div');
div.classList.add('black');

// document.body.append(div);
// document.querySelector('.wrapper').append(div);
// wrapper.append(div); // вставити в кінець
// wrapper.appendChild(div); // вставити в кінець

// wrapper.prepend(div); // вставити в початок
// hearts[0].before(div);
hearts[0].after(div);
div.innerHTML = '<h1>Hello Jack!</h1>';
// div.textContent = 'Hi Jack';

div.insertAdjacentHTML('beforebegin', '<h2>Hi Jack!</h2>');

// wrapper.insertBefore(div, hearts[0]); // (Що вставити, перед чим вставити)

// btns[3].remove();
// wrapper.removeChild(hearts[2]);

// hearts[2].replaceWith(circles[2])
// wrapper.replaceChild(circles[0], hearts[0]); // чим замінити, що замінити