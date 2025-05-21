"use strict";

window.addEventListener("DOMContentLoaded", () => {

    // **Tabs**
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.tabheader__items');

    // ховаємо контент табів
    function hideTabContent() {
        tabContent.forEach(item => {
            // item.style.display = 'none'; // без css
            item.classList.add('hide'); // через css
            item.classList.remove('show', 'fade'); // через css
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active') // видаляємо для кожного з табів клас активності/ Крапку не ставимо, бо працюємо беспосередньо з класами
        });
    };

    // показуємо таби
    function showTabContent(i = 0) {
        // tabContent[i].style.display = 'block'; // без css
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
        }
    // hideTabContent();
    // showTabContent();
    
    // делегування подій та обробщик події-кліку
    tabParent,addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                };
            });
        };
    });

    // **Timer**

    const deadline = '2025-05-19';

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;

        const t = Date.parse(endtime) - Date.parse(new Date()) - 3 * 60 * 60 * 1000;

        if(t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            minutes = Math.floor(t / (1000 * 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        };

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function getZero(num) {
            if (num >=0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            };
        };

         function updateClock() {
            const t = getTimeRemaining(endtime);
                
            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            };
        };
    };

    setClock('.timer', deadline);

    // Modal window
    
    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector(".modal"),
        modalCloseBtn = document.querySelector("[data-close]")
        
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'; // додаємо документу стиль що не дозволяє прокручувати сторінку
        clearInterval(modalTimerID); // зупиняємо таймер, якщо користувач вже відкривав модальне вікно (для уникнення повторного відкриття)
    };

        // Показ модального вікна при кліку по кнопці
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });


    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = ''; // дозволяємо прокрутку документа (буде присвоєно значення за замовчуванням)
    }
    
    // Закриття модального вікна при кліку на хрестику
    modalCloseBtn.addEventListener('click', closeModal);

    // Закриття модального вікна при кліку на поле навколо цього модального вікна
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        };
    });

    // закриття модального вікна клавішою ESC
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Активація модального вікна таймером
    const modalTimerID = setTimeout(openModal, 3000);
    
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll); // Як тільки модальне вікно відкриється прокручуванням сторінки обробщик подій, що відкриває це модальне вікно буде видалений
        };
    };

    // Активація модального вікна при прокрутці сторінки в певну позицію
    window.addEventListener('scroll', showModalByScroll);
});

