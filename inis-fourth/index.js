function createCard(image, title, amount, id) {
  const subtitle = 'Available in ' + amount + ' colors';
  return ( 
  `<div class="card">
    <img src="${image}" alt="${title}">
    <div class="card__content">
      <p class="card__title">${title}</p>
      <p class="card__subtitle">${amount !== 1 ? subtitle : 'Available in one color'}</p>
      <button class="card__button">quick view</button>
      <button id="shirt-${id}" class="card__button">see page</button>
    </div>
  </div>`);
} 

const toPage = (title) => {
  console.log(title);
  window.history.pushState({}, '', window.location.origin + `/inis-fourth/${title}`);
}

const container = document.querySelector('.cards-container');

for (let index = 0; index < Object.keys(shirts).length; index++) {
  container.innerHTML += createCard(
    `./assets/${shirts[index].colors.white.front}`,
    shirts[index].name,
    Object.keys(shirts[index].colors).length,
    index
  );
}

container.addEventListener('click', e => {
  const target = e.target;
  toPage(target.id);
})
