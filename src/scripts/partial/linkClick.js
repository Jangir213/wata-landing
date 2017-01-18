function linkClick() {
  const links = document.querySelectorAll('.link');
  const innerElement = document.createElement('span');
  innerElement.className = 'link__inner';

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
      click(links[i], innerElement, e)
    });
  }

  function click(el, inEl, e) {
    el.appendChild(inEl);

    const max = Math.max(el.clientHeight, el.clientWidth);
    const x = e.pageX - el.offsetLeft - (max / 2);
    const y = e.pageY - el.offsetTop - (max / 2);
    const inner = el.querySelector('.link__inner');
    inner.style.height = max + 'px';
    inner.style.width = max + 'px';
    inner.style.left = x + 'px';
    inner.style.top = y + 'px';
    inner.classList.add('link__inner--animate');

    setTimeout(() => {
      if (el.contains(inEl))
        el.removeChild(inEl);
    }, 700);
  }
}