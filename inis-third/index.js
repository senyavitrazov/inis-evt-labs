function createCard(image, title, amount) {
  const subtitle = 'Available in ' + amount + ' colors';
  return ( 
  `<div class="card">
    <img src="${image}" alt="${title}">
    <div class="card__content">
      <p class="card__title">${title}</p>
      <p class="card__subtitle">${subtitle}</p>
      <button class="card__button">quick view</button>
      <button class="card__button">see page</button>
    </div>
  </div>`);
} 

const container = document.querySelector('.cards-container');
const AMOUNT = 4;

for (let index = 0; index < AMOUNT; index++) {
  container.innerHTML += createCard(
    `./assets/${shirts[index].colors.white.front}`,
    shirts[index].name,
    Object.keys(shirts[index].colors).length,
    ); 
}
