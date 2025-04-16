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
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector("[type = 'checkbox']");

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newFilm = addInput.value;
        const favorite = checkbox.checked;

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
    });
    
    const deleteAdv = (array) => {
        if (array) {
          array.remove(); // Видаляємо елемент з DOM
        }
    };

    
    
    const makeChanges = () => {
        // genre.innerHTML = 'ДРАМА';
        genre.textContent = 'ДРАМА';
        if (poster) {
            poster.style.backgroundImage = 'url("img/bg.jpg")'; // Встановлюємо нове фонове зображення
          };
    };



    const sortArr = (arr) => {
        arr.sort();
    };

    interactiveList.innerHTML = '';
    movieDB.movies.sort();

    function createMovieList(films, parent) {
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
    sortArr(movieDB.movies);        
    createMovieList(movieDB.movies, mo)

});

