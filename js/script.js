'use strict';

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


const surveyCount = 10; 
const personalMovieDB = {
    count: 0,
    movies: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');        
        };
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastMovie = prompt('Один из последних просмотренных фильмов?', '').trim();
            const lastMovieEstimation = +prompt('На сколько оцените его?', '').trim();
            if (lastMovie != null && lastMovie != '' && lastMovie.length <= 50 && lastMovieEstimation != null && lastMovieEstimation != '') {
                personalMovieDB.movies[lastMovie] = lastMovieEstimation;
            } else {
                console.log("ERROR");
                i--;
            };
        };
    },
    detectPersonalLevel: function() {
        switch (true) {
            case personalMovieDB.count < 10: {
                console.log('Просмотрено довольно мало фильмов');
                break;
            }
            case personalMovieDB.count >= 10 && personalMovieDB.count <= 30: {
                console.log('Вы классический зритель');
                break;
            };
            case personalMovieDB.count > 30: {
                console.log('Вы киноман');
                break;
            };
            default: {
                console.log('Произошла ошибка')
            };
        };
    },
    showMyDB: function(privat) {
        if (!privat) {
            console.log(personalMovieDB)
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastMovie = prompt('Один из последних просмотренных фильмов?', '').trim();
            const lastMovieEstimation = +prompt('На сколько оцените его?', '').trim();
            // const lastMovieLength = lastMovie.length;
            if (lastMovie != null && lastMovie != '' && lastMovie.length <= 50 && lastMovieEstimation != null && lastMovieEstimation != '') {
                personalMovieDB.movies[lastMovie] = lastMovieEstimation;
            } else {
                console.log("ERROR");
                i--;
            };
        };
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`,'');
            personalMovieDB.genres[i-1] = genre;
        };
    },
    toggleVisibleMyDB: function() {
        console.log("toggleVisibleMyDB");
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false
        } else {
            personalMovieDB.privat = true
        }
    }
};

personalMovieDB.toggleVisibleMyDB();