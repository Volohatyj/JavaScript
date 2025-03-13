"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?: ', '');

let personalMovieDB = new Object();
personalMovieDB['count'] = numberOfFilms;
personalMovieDB['movies'] = {};
personalMovieDB['actors'] = {};
personalMovieDB['genres'] = [];
personalMovieDB['privat'] = false;

let lastMovie = prompt('Один из последних просмотренных фильмов?: ', '');
const lastMovieEstimation = +prompt('На сколько оцените его?: ', '');

personalMovieDB.movies[lastMovie] = +lastMovieEstimation;

console.log(personalMovieDB);