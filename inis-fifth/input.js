const blocks = document.querySelectorAll('.target');

const previousPosition = {
  top: '0px',
  left: '0px',
  target: null,
}

blocks.forEach((el) => {
  el.addEventListener('dblclick', (ev) => {
    el.classList.add('active');
    foo(ev, el);
    previousPosition.target = el;
    el.onclick = () => {
      el.classList.remove('active');
    }
  })
  el.addEventListener('mousedown', (ev) => {
    previousPosition.target = el;
    foo(ev, el);
  })
})

document.addEventListener('keydown', (ev) => {
  if (ev.isComposing || ev.key === 'Escape') {
    [previousPosition.target.style.top, previousPosition.target.style.left] = [previousPosition.top, previousPosition.left];
    previousPosition.target.classList.remove('active');
    document.onmousemove = null;
    previousPosition.target.onmouseup = null;
  }
});


function foo(e, el) {
  moveAt(e);
  el.style.zIndex = 2;
  [previousPosition.top, previousPosition.left] = [el.style.top, el.style.left];

  function moveAt(e) {
    el.style.left = e.pageX - el.offsetWidth / 2 + 'px';
    el.style.top = e.pageY - el.offsetHeight / 2 + 'px';
  }
  
  document.onmousemove = function(e) {
    moveAt(e);
  }

  el.onmouseup = function() {
    document.onmousemove = null;
    el.onmouseup = null;
  }
}
