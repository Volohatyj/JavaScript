'use strict';

const surveyCount = 10; 
const personalMovieDB = new Object();

let numberOfFilms;
personalMovieDB['count'] = numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');        
    };
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
        const lastMovieEstimation = +prompt('На сколько оцените его?', '');
        // const lastMovieLength = lastMovie.length;
        if (lastMovie != null && lastMovie != '' && lastMovie.length <= 50 && lastMovieEstimation != null && lastMovieEstimation != '') {
            personalMovieDB.movies[lastMovie] = lastMovieEstimation;
        } else {
            console.log("ERROR");
            i--;
        };
    };
};

start();

function showMyDB(privat) {
    if (!privat) {
        console.log(personalMovieDB)
    }
};


personalMovieDB['movies'] = {};
personalMovieDB['actors'] = {};
personalMovieDB['genres'] = [];
personalMovieDB['privat'] = false;

function detectPersonalLevel() {
    switch (true) {
        case numberOfFilms < 10: {
            console.log('Просмотрено довольно мало фильмов');
            break;
        }
        case numberOfFilms >= 10 && numberOfFilms <= 30: {
            console.log('Вы классический зритель');
            break;
        };
        case numberOfFilms > 30: {
            console.log('Вы киноман');
            break;
        };
        default: {
            console.log('Произошла ошибка')
        };
    };
};

detectPersonalLevel();

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`,'');
        personalMovieDB.genres[i-1] = genre;
    };
};

rememberMyFilms();
writeYourGenres();


console.log(`Result: ${personalMovieDB}`);