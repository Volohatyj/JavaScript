/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const surveyCount = 10; 
const personalMovieDB = new Object();

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
personalMovieDB['count'] = numberOfFilms;

personalMovieDB['movies'] = {};
personalMovieDB['actors'] = {};
personalMovieDB['genres'] = [];
personalMovieDB['privat'] = false;

for (let i = 0; i < 2; i++) {
    let lastMovie = '', lastMovieLength = 0;
    while (lastMovie === '' || lastMovie === null || lastMovieLength > 50) {
        lastMovie = prompt('Один из последних просмотренных фильмов?', '');
        if (typeof(lastMovie) == 'object') {
            lastMovieLength;
            console.log(typeof(lastMovie));
        } else {
            lastMovieLength = lastMovie.length;
        }
    }
    const lastMovieEstimation = +prompt('На сколько оцените его?', '');        
    personalMovieDB.movies[lastMovie] = lastMovieEstimation;
}

switch (true) {
    case numberOfFilms < 10: {
        console.log('Просмотрено довольно мало фильмов');
        break;
    }
    case numberOfFilms >= 10 && numberOfFilms <= 30: {
        console.log('Вы классический зритель');
        break;
    }
    case numberOfFilms > 30: {
        console.log('Вы киноман');
        break;
    }
    default: {
        console.log('Произошла ошибка')
    }
}

console.log(personalMovieDB);