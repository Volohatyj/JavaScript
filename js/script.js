/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)


2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelector('.promo__adv'),
        poster = document.querySelector('.promo__bg'), 
        genre = poster.querySelector('.promo__genre'),
        interactiveList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'), // форма, в якої є клас .add
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type = "checkbox"]');

    // Обробщик подій для форми, щоб відстежити відправку форми
    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); // відміна стандартної поведінки браузера: при натисканні кнопки "Відправити" сторінка не будitе перезавантажуватись
        
        // Що саме ввів користувач і чи відмітив чекбокс?
        let newFilm = addInput.value; // Отримуємо те, що ввів користувач
        const favorite = checkbox.checked; // Статус чекбокса

        if (newFilm) { // Перевірка, щоб ігнорувати порожній ввід даних в форму
            if (newFilm.length > 21) { // Обрізаємо назву фільма до 21 знака
                newFilm = `${newFilm.substring(0, 22)}...`;
            };           

            // Створення нового фільму та додавання його в список переглянутих фільмів
            // Додавання фільму в базу даних і відсортуємо
            movieDB.movies.push(newFilm); // Додавання фільму в базу даних (в кінець БД)
            sortArray(movieDB.movies); // Сортуємо список фільмів
    
            //Створення нових елементів на сторінці
            createMovieList(movieDB.movies, interactiveList)   
        };

        
        // Очищаємо форму
        // addForm.reset();
        event.target.reset();
    });
    
/*
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove(); // Видаляємо елемент з DOM (реклама)
        });
    };
    */
   const deleteAdv = (arr) => {
    if (adv) {
        adv.remove(); // Видаляємо елемент з DOM (реклама)
      }
   };
    
    
    const makeChanges = () => {
        // genre.innerHTML = 'ДРАМА';
        genre.textContent = 'ДРАМА';
        if (poster) {
            poster.style.backgroundImage = 'url("img/bg.jpg")'; // Встановлюємо нове фонове зображення
        };        
    };

    
    const sortArray = (arr) => {
        arr.sort();
    };
      
    function createMovieList(films, parent) {
        // Створення нових елементів на сторінці (список фільмім з БД) 
        parent.innerHTML = '';
        films.forEach((film, i) => {
            parent.innerHTML += `
                 <li class="promo__interactive-item">${i+1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

    };


    deleteAdv(adv);
    makeChanges();
    sortArray(movieDB.movies);
    createMovieList(movieDB.movies, interactiveList);

});
