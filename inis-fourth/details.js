const shirt = JSON.parse(localStorage.getItem('shirt'));

const cont = document.querySelector('.main-wrapper');

const colors = Object.keys(shirt.colors);

const HTML = `
  <div class="page">
  <h2>${shirt.name}</h2>
  <div class="image-container">
    <img id="image" src="${`./assets/${shirt.colors.white.front}`}" alt="${shirt.name}">
  </div>
  <p class="descr">${shirt.description}</p>
  <p class="price">${shirt.price}</p>
  <div class="btns-container">
    <div class="btns sides">
    <p>Side:</p>
      <button class="btn active">Front</button>
      <button class="btn">Back</button>
    </div>
    <div class="btns colors">
    <p>Colors:</p>
      ${colors.reduce((a, c) => a += `<button style="background: ${c}" class="btn" onclick="changeImg()">${c}</button>`, '')}
    </div>
  </div>
  </div>
`;

function changeImg() {
  image.src = (`./assets/${shirt.colors[localStorage.getItem('color')][localStorage.getItem('side')]}`);
}

cont.innerHTML = HTML;

const image = document.getElementById('image');
const sides = document.querySelector('.sides');
const colorsContainer = document.querySelector('.colors');
const a = sides.querySelectorAll('.btn');
const b = colorsContainer.querySelectorAll('.btn');


b.forEach((e) => {
  e.addEventListener('click', () => {
    localStorage.setItem('color', e.innerHTML.toLowerCase());
    changeImg();
  })
})

a.forEach((e) => {
  e.addEventListener('click', () => {
    a.forEach(e => e.classList.remove('active'));
    e.classList.add('active');
    localStorage.setItem('side', e.innerHTML.toLowerCase());
    changeImg();
  })
})
