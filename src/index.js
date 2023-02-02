const FILMS = [
  {
    name: 'Мимино',
    description: 'Провинциальный пилот Валико Мизандари по прозвищу Мимино, что значит «сокол», занимается вертолётными перевозками почты, фруктов, кур, баранов и даже коров в горных районах Грузинской ССР. Однажды встретив в Тбилисском аэропорту приятеля по лётному училищу и увидев, на каком великолепном сверхзвуковом самолёте тот летает и в компании каких красавиц-стюардесс работает, Мимино решает изменить свою жизнь и отправляется в Москву подавать документы на переобучение. В гостинице он оказывается в одном номере с армянским водителем Рубеном Хачикяном, которого ошибочно приняли за профессора-эндокринолога.',
    images: [
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/7740ca1e-7d00-40a1-9c9d-2fb30bdbf7a9/300x450', 
      'https://online47.ru/media/photo/article/__163062.jpg',
      'https://www.kino-teatr.ru/movie/kadr/3887/3539.jpg'
    ],
    year: 1997,
    country: 'СССР',
    genre: 'Комедия',
    director: 'Георгий Данелия'
  },
  {
    name: 'Любовь и голуби',
    description: 'Ликвидируя неисправность лебедки, Василий Кузякин получил травму и путевку на юг. Там он встретил роковую женщину Раису Захаровну и… вернулся Вася с курорта не к себе в деревню, а в дом Раисы Захаровны. Началась для него новая жизнь, в которой было много непонятного и интересного, но не было дома, где остались Надя, дети и голуби.',
    images: [
      'https://cdn.tvc.ru/pictures/o/212/853.jpg', 
      'https://www.kino-teatr.ru/movie/kadr/3594/80958.jpg',
      'https://ic.pics.livejournal.com/dubikvit/65747770/9034027/9034027_900.jpg'
    ],
    year: 1984,
    country: 'СССР',
    genre: 'Комедия',
    director: 'Владимир Меньшов'
  },
  { 
    name: '12 стульев',
    description: 'Во время революции и последовавшего за ней краткого периода военного коммунизма многие прятали свои ценности как можно надежнее. И вот Ипполит Матвеевич Воробьянинов, бывший Старгородский предводитель дворянства и светский лев, а ныне - скромный делопроизводитель ЗАГСа, узнает от умирающей тещи, что некогда она спрятала свои бриллианты и жемчуга в общей сложности на 150 000 золотых рублей под обивку одного из двенадцати стульев гостиного гарнитура работы известного мастера Гамбса.',
    images: [
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/8794c47e-4861-4e54-bdbf-86a0cc934fc5/1920x', 
      'https://www.kino-teatr.ru/video/6443/start.jpg',
      'https://s1.afisha.ru/mediastorage/fd/6c/8fe4f56b6d944528af1afbb86cfd.jpg'
    ],
    year: 1971,
    country: 'СССР',
    genre: 'Комедия',
    director: 'Владимир Меньшов'
  },
];

function creacteFilm(parent, film, id) {
  parent.innerHTML += `<div class="film" id="${'film' + id}">
        <h2 class="film__title">${film.name}</h2>
        <div class="film__description">
          <h3>Кратое содержание фильмы</h3>
          <p>${film.description}</p>
        </div>
        <div class="film__images images">
          <h3>Кадры из фильма</h3>
          <div class="images__container">
            <img src="${film.images[0]}" alt="img_1">
            <img src="${film.images[1]}" alt="img_2">
            <img src="${film.images[2]}" alt="img_3">
          </div>
        </div>
        <div class="film__about">
          <h3>О фильме</h3>
          <table class="film__info">
            <tr>
              <td>Год</td>
              <td>${film.year}</td>
            </tr>
            <tr>
              <td>Страна</td>
              <td>${film.country}</td>
            </tr>
            <tr>
              <td>Жанр</td>
              <td>${film.genre}</td>
            </tr>
            <tr>
              <td>Режиссер</td>
              <td>${film.director}</td>
            </tr>
          </table>
        </div>
    </div>`;
}

const films = document.querySelector('#films');

for (let index = 0; index < FILMS.length; index++) {
  creacteFilm(films, FILMS[index], index);
}
