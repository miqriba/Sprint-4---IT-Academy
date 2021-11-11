import { movies } from './data.js';

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let directors = new Set();
  array.forEach((el) => directors.add(el.director));
  console.log(directors);
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((film) => film.director == director);
  console.log(result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.

// ➡️ Separo en una funció el calcular l'average score d'un array de películes:
function calculateAverageScore(array) {
  let sum = 0;
  let arrayOfScores = array.map((element) => element.score);
  sum = arrayOfScores.reduce((a, b) => a + b);
  let result = Math.round((sum * 100) / arrayOfScores.length) / 100;
  console.log(result);
  return result;
}

function moviesAverageOfDirector(array, director) {
  let result = calculateAverageScore(getMoviesFromDirector(array, director));
  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  // no canviem l'array movies original: intento aplicar principis de programació funcional que he trobat
  let arrayTemp = [...array]; // shallow copy de l'array
  arrayTemp.sort(function (a, b) {
    let textA = a.title.toUpperCase();
    let textB = b.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
  // console.log(arrayTemp);
}
// console.log(movies);

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arrayTemp = [...array];
  arrayTemp.sort(function (a, b) {
    return a.year < b.year ? -1 : a.year > b.year ? 1 : 0;
  });
  console.log(arrayTemp);
}

//➡️ Separo en una funció el buscar les pelicules que tenen la categoria desitjada inclosa entre les seves categories:
function moviesByCategory(array, category) {
  let result = array.filter((movie) =>
    movie.genre.some((element) => element === category)
  );
  console.log(
    `S'han trobat ${result.length} películes de la categoria ${category}:`
  );
  console.log(result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  console.log(
    `La nota mitjana de les películes de la categoria ${category} és:`
  );
  return calculateAverageScore(moviesByCategory(array, category));
}

// Exercise 7: Modify the duration of movies to minutes
console.log(movies);
function hoursToMinutes(array) {
  let newArray = [...array];
  newArray.forEach(function (el) {
    // ⚠️ inacabat
    console.log(`Hores: ${el.duration.slice(0, el.duration.indexOf('h'))}
    Minuts: ${el.duration.slice(
      el.duration.indexOf('min') - 2,
      el.duration.indexOf('min')
    )}`);

    el.duration =
      Number(el.duration.slice(0, el.duration.indexOf('h'))) * 60 +
      Number(
        el.duration.slice(
          el.duration.indexOf('min') - 2,
          el.duration.indexOf('min')
        )
      );
  });
  console.log(newArray);
}

// Exercise 8: Get the best film of a year
// accepta anys en forma de string perquè he utilitzat el comparador no estricte ==
function bestFilmOfYear(array, year) {
  let filmsOfYear = array.filter((film) => film.year == year);
  let empats = [];
  // ⚠️ falta implementar bé què passa amb els empats
  let result = filmsOfYear.reduce((a, b) =>
    a.score > b.score ? a : a.score < b.score ? b : empats.push(a, b)
  );
  console.log(filmsOfYear);
  console.log(empats);
  console.log(result);
  return result;
}

// import * as movies from './data.js';

// import * as movies from './data';

// ⬇️ proves de funcions ⬇️

// getAllDirectors(movies);
// getMoviesFromDirector(movies, 'Federico Fellini');
// moviesAverageOfDirector(movies, 'Quentin Tarantino');
// orderAlphabetically(movies);
// orderByYear(movies);
// moviesByCategory(movies, 'Drama');
// hoursToMinutes(movies);
// bestFilmOfYear(movies, 2003);

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
