"use strict";
let numberOfFilms = +prompt("How match films look", 0);
const a = prompt("What last film", ""),
      b = +prompt("What mark film", 0),
      c = prompt("What last film", ""),
      d = +prompt("What mark film", 0);


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
