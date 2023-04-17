const blocks = document.querySelectorAll('.target');

const previousPosition = {
  top: '0px',
  left: '0px',
  target: null,
}

let touchtime = null;

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
  el.addEventListener('touchstart', (ev) => {
    foo(ev.touches[0], el);
    previousPosition.target = el;
  });
})

document.addEventListener('touchstart', ev => {
  if (touchtime == 0) {
    touchtime = new Date().getTime();
  } else {
    if (((new Date().getTime()) - touchtime) < 200) {
      if (ev.target.classList[0] === 'target') {
        previousPosition.target = ev.target;
        ev.target.classList.add('active');
      } else {
        previousPosition.target.classList.remove('active');
      }
      touchtime = 0;
    } else {
      touchtime = new Date().getTime();
    }
  }
})

function returnToPrev() {
  [previousPosition.target.style.top, previousPosition.target.style.left] = [previousPosition.top, previousPosition.left];
  previousPosition.target.classList.remove('active');
  document.onmousemove = null;
  previousPosition.target.onmouseup = null;
}

document.addEventListener('touchmove', ev => {
  if (ev.touches.length < 2) {
    previousPosition.target.style.left = ev.touches[0].pageX - previousPosition.target.offsetWidth / 2 + 'px';
    previousPosition.target.style.top = ev.touches[0].pageY - previousPosition.target .offsetHeight / 2 + 'px';
  } else {
    returnToPrev();
  }
})

document.addEventListener('keydown', (ev) => {
  if (ev.isComposing || ev.key === 'Escape') {
    returnToPrev();
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
