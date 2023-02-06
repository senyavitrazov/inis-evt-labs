const REPETITIONS = 2;

function validationNumber(message) {
  let value = '';
  while (!value || !Number(value) || Number(value) < 0 || value.length > 50) {
    value = prompt(message);
    if(message.length < 35) {
      message = 'Введите валидное значение. ' + message;
    }
  };
  return value
}

function validation(message) {
  let value = '';
  while (!value || value.length > 50) {
    value = prompt(message);
    if(message.length < 23) {
      message = 'Введите валидное значение. ' + message;
    }
  };
  return value;
}

let message = 'Сколько фильмов вы уже посмотрели?';
let numberOfFilms = validationNumber(message);

let nameMessage = 'Один из последних просмотренных фильмов?';
let ratingMessage = 'На сколько оцените его?';

let personalMovieDB = {
  count: null,
  movies: {},
};


for (let index = 0; index < REPETITIONS; index++) {
  let tempName = validation(nameMessage);
  let tempRating = validationNumber(ratingMessage);
  personalMovieDB['count'] = numberOfFilms;
  personalMovieDB['movies'][tempName] = tempRating;
}

console.log(personalMovieDB);
