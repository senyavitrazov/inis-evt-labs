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

const container = document.querySelector('.cards-container');

localStorage.setItem('color', 'white');
localStorage.setItem('side', 'front');

const toPage = (title) => {
  history.pushState({}, null, window.location.origin + `/inis-fourth/${title}`);
  container.innerHTML = details(shirts[window.location.pathname.slice(-1)]);
}

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
  if (target.id.slice(0, -1) == 'shirt-') {
    localStorage.setItem('shirt', JSON.stringify(shirts[target.id.slice(-1)]));
    location.href = './details.html'
  }
})

window.addEventListener('event', (e) => {console.log(e);})
