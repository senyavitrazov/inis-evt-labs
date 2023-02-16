const personalMovieDB = {
  privat: false,
  movies: {
    'The Hunt': 10,
    'Heat': 9,
    'RAMBO First Blood': 9,
  }
}

const table = document.createElement('table');
table.classList.add('table');
table.innerHTML += "<tr><td>Фильмы</td><td>Оценка</td></tr>"

for (key in personalMovieDB.movies) {
  table.innerHTML += `<tr><td>${key}</td><td>${personalMovieDB.movies[key]}</td></tr>`
}

const foo = () => {
  personalMovieDB.privat = !personalMovieDB.privat;
  document.querySelector('main').innerHTML = '';
  if (!personalMovieDB.privat) document.querySelector('main').append(table);
  else document.querySelector('main ').innerHTML = 'PRIVATE : FALSE';
}

const btn = document.createElement('button');
btn.innerHTML = 'change privacy';
btn.onclick = foo;

document.querySelector('body').prepend(btn);
