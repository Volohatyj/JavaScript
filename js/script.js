
/*
const timerId = setTimeout(function() {
    alert('5 sec');
}, 5000);
*/

/*
const timerId = setTimeout(function(text) {
    alert(text);
}, 1000, '1 sec');


const text = '10 sec'
const timerId2 = setTimeout(function(text) {
    alert(text);
}, 5000, text);
*/

const btn = document.querySelector('.btn');
let timerID,
    i = 0;

btn.addEventListener('click', () => {
    // const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 2000);
});

function logger() {
    // if (i === 3) {
    //     clearInterval(timerID);
    // };
    console.log('btn');
    i++;
};


// clearInterval(timerId); // виключає вказаний таймер 
