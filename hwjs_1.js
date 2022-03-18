"use strict";
let numberOfFilms = +prompt("How match films look", 0);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

while (numberOfFilms > 0) {
    const a = prompt("What last film", ""),
        b = +prompt("What mark film", 0);
    personalMovieDB.movies[a] = b;
    numberOfFilms--;
}

// const a = prompt("What last film", ""),
//       b = +prompt("What mark film", 0),
//       c = prompt("What last film", ""),
//       d = +prompt("What mark film", 0);

console.log(personalMovieDB);