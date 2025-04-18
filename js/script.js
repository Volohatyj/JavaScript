/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


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
