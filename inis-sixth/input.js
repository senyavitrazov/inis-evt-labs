const blocks = document.querySelectorAll('.target');

const previousPosition = {
  top: '0px',
  left: '0px',
  target: null,
}

let touchtime = 0;
let flag = 0;

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

    if (touchtime == 0) {
      touchtime = new Date().getTime();
    } else {
      if (((new Date().getTime()) - touchtime) < 800) {
        el.classList.toggle('active');
        flag = !flag;
        touchtime = 0;
      } else {
          touchtime = new Date().getTime();
      }
    }

    if (flag) {
      document.addEventListener('touchmove', ev => {
        console.log(ev);
        el.style.left = ev.touches[0].pageX - el.offsetWidth / 2 + 'px';
        el.style.top = ev.touches[0].pageY - el.offsetHeight / 2 + 'px';
      })
    }
  })

  el.addEventListener('touchmove', (ev) => {
      ev.preventDefault();
      foo(ev.touches[0], el);``
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

  document.ontouchmove = function(e) {
    if (flag) moveAt(e);
  }

  document.onmousemove = function(e) {
    moveAt(e);
  }

  el.onmouseup = function() {
    document.onmousemove = null;
    el.onmouseup = null;
  }
}
