(function () {

  (function () {
    const promo = document.querySelector('#promo');
    const nav = document.querySelector('.nav');
    let promoHeight;
    let navHeight;

    function resizePromo() {
      promoHeight = window.innerHeight;
      navHeight = nav.clientHeight;
      promo.style.height = promoHeight + 'px';
    }

    resizePromo();
    window.addEventListener('resize', resizePromo);
  })();


  window.addEventListener('load', () => {
    imgHeight();
    changePrices();
    focusInput();
    filterWorks();
    linkClick();
  });


  function imgHeight() {
    const wideImg = document.querySelector('.posts__item--wide');

    window.addEventListener('resize', resizeImg);
    resizeImg();

    function resizeImg() {
      const smallImg = document.querySelector('.posts__left-col .posts__item img');
      const heightSmallImg = parseFloat(getComputedStyle(smallImg).height);
      const smallDiv = document.querySelector('.posts__left-col .posts__item');
      const pdBotDiv = parseFloat(getComputedStyle(smallDiv).paddingBottom);
      const height = heightSmallImg * 2 + pdBotDiv * 4;
      wideImg.style.height = height + 'px';
    }
  };


  function changePrices() {
    const prices = {
      standard: { usd: '$19', eur: '€17' },
      professional: { usd: '$49', eur: '€43' },
      extend: { usd: '$99', eur: '€87' }
    };
    const keys = Object.keys(prices);
    const dolBtn = document.querySelector('#dol');
    const eurBtn = document.querySelector('#eur');

    dolBtn.addEventListener('change', change);
    eurBtn.addEventListener('change', change);

    function change() {
      for (let i = 0; i < keys.length; i++) {
        const price = document.querySelector(`.container--${keys[i]} .container__price`);
        price.innerHTML = ~price.innerHTML.indexOf('$') ?
          prices[keys[i]].eur :
          prices[keys[i]].usd;
      }
    }
  }


  function focusInput() {
    const lbls = document.querySelectorAll('.lbl');

    for (let i = 0; i < lbls.length; i++) {
      const inpt = lbls[i].nextElementSibling;
      inpt.addEventListener('focus', () => { focus(lbls[i]) });
      inpt.addEventListener('blur', () => { blur(lbls[i], inpt) });
    }

    function focus(lbl) {
      lbl.classList.add('lbl--active');
    }

    function blur(lbl, inpt) {
      if (!inpt.value)
        lbl.classList.remove('lbl--active');
    }
  }


  function filterWorks() {
    const btns = document.querySelectorAll('.filter__btn');
    const works = document.querySelectorAll('.work');

    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', () => {
        changeBtn(btns[i]);
        hiddenWorks(btns[i]);
      });
    }

    function changeBtn(btn) {
      for (let i = 0; i < btns.length; i++)
        btns[i].classList.remove('filter__btn--active');
      btn.classList.add('filter__btn--active');
    }

    function hiddenWorks(btn) {
      const filter = btn.dataset.group;

      if (filter == 'all') {
        showAllWorks();
        return;
      }

      for (let i = 0; i < works.length; i++) {
        const workGroups = works[i].dataset.groups;
        if (!~workGroups.indexOf(filter)) {         
          works[i].classList.add('work--hidden');
          setTimeout(() => { works[i].style.display = 'none' }, 150);
        } else {
          works[i].classList.remove('work--hidden');
          setTimeout(() => { works[i].style.display = '' }, 150);
        }
      }
    }

    function showAllWorks() {
      for (let i = 0; i < works.length; i++) {
        works[i].classList.remove('work--hidden');
        setTimeout(() => { works[i].style.display = '' }, 150);
      }
    }
  }


  function linkClick() {
    const links = document.querySelectorAll('.link');
    const innerElement = document.createElement('span');
    innerElement.className = 'link__inner';

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', (e) => { click(links[i], innerElement, e) });
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

      setTimeout(() => { el.removeChild(inEl); }, 700);
    }
  }



})();
