// import { movies } from './data.js';

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  // inicialment ho creava com a set per no repetir directors perque pensava que era la idea de lenunciat:
  // let directors = new Set();
  // let directorsArray = Array.from(directors);
  let directors = [];
  array.forEach((el) => directors.push(el.director));
  console.log(directors);
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((film) => film.director == director);
  // console.log(result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.

// ➡️ Separo en una funció el calcular l'average score d'un array de películes:
function calculateAverageScore(array) {
  let sumaScores = 0;
  // let arrayOfScores = array.filter((element) =>{
  //   if (element.score !== ''){
  //    return element.score}}
     
  //    );
  let arrayOfScores = array.map((element) => element.score);
  
  sumaScores = arrayOfScores.reduce((a, b) => a + b);

  // let sumaScores = array.map((element) => element.score).reduce((a, b) => a + b);
  let mitjana = Math.round((sumaScores * 100) / arrayOfScores.length) / 100;
  return mitjana;
}

function moviesAverageOfDirector(array, director) {
  let result = calculateAverageScore(getMoviesFromDirector(array, director));
  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let arrayTemp = [...array]; // shallow copy de l'array
  arrayTemp = arrayTemp.map((el) => el.title);
  arrayTemp.sort(function (a, b) {
    let textA = a.toUpperCase();
    let textB = b.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
  arrayTemp.length > 20 ? (arrayTemp = arrayTemp.slice(0, 20)) : null; // (sóc conscient que el us del ternary operator és per a ocasions on no hagi d'ometre la expressió en el cas que la condició sigui falsa com he fet aqui)
  console.log(arrayTemp);
  return arrayTemp;
}
// console.log(movies);

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arrayTemp = [...array];
  //les ordeno alfabeticament abans dordenarles per any

  arrayTemp = arrayTemp.sort(function (a, b) {
    if (a.title && b.title) {
      let textA = a.title.toUpperCase();
      let textB = b.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    }
  });
  arrayTemp.sort(function (a, b) {
    return a.year < b.year ? -1 : a.year > b.year ? 1 : 0;
  });
  console.log(arrayTemp);
  return arrayTemp;
}
// Exercise 6: Calculate the average of the movies in a category
// ⚠️ falta implementar: 'should return average even if one of the movies does not have score'

//➡️ Separo en una funció el buscar les pelicules que tenen la categoria desitjada inclosa entre les seves categories:
function moviesByCategory(array, category) {
  let result = array.filter((movie) =>
    movie.genre.some((element) => element === category) && ((typeof movie.score !== 'string'))
  );
  return result;
}

function moviesAverageByCategory(array, category) {
  let result = calculateAverageScore(moviesByCategory(array, category));
  console.log(result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes

function hoursToMinutes(array) {
  let newArray = [...array];
  newArray.forEach(function (el) {
    // console.log(
    //   `Hores: ${el.duration.slice(0, el.duration.indexOf('h'))} Minuts: ${
    //     el.duration.indexOf('min') === -1
    //       ? 0
    //       : el.duration.slice(
    //           el.duration.indexOf('min') - 2,
    //           el.duration.indexOf('min')
    //         )
    //   }`
    // );

    el.duration =
      el.duration.slice(0, el.duration.indexOf('h')) * 60 +
      (el.duration.indexOf('min') === -1
        ? 0
        : Number(
            el.duration.slice(
              el.duration.indexOf('min') - 2,
              el.duration.indexOf('min')
            )
          )); // si no s'especifiquen minuts (duration: '2h'), no sexecuta la suma de minuts, això és el que l'operador ternari fa
  });
  console.log(newArray);
  return newArray;
}

// Exercise 8: Get the best film of a year
// accepta anys en forma de string perquè he utilitzat el comparador no estricte ==
function bestFilmOfYear(array, year) {
  let filmsOfYear = array.filter((film) => film.year == year);
  // ⚠️ falta implementar bé què passa amb els empats, però com que en els tests no es demana ho he passat per alt de moment
  let result = filmsOfYear.reduce((a, b) =>
    a.score > b.score ? a : a.score < b.score ? b : b
  );
  return [result];
}

// ⬇️ proves de funcions ⬇️

// getAllDirectors(movies);
// getMoviesFromDirector(movies, 'Federico Fellini');
// moviesAverageOfDirector(movies, 'Quentin Tarantino');
// orderAlphabetically(movies);
// orderByYear([{ title: 'Menja merda', year: 1982 }]);
// orderByYear(movies);
// moviesByCategory(movies, 'Drama');
// moviesAverageByCategory(
//   [
//     { score: 5, genre: ['Action'] },
//     { score: '', genre: ['Action'] }
//   ],
//   'Action'
// );
// hoursToMinutes(movies);
// hoursToMinutes([{ duration: '2h' }]);

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
