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
  });

  
  function imgHeight() {
    const wideImg = document.querySelector('.posts__item--wide');
    function resizeImg() {
      const smallImg = document.querySelector('.posts__left-col .posts__item img');
      const heightSmallImg = parseFloat(getComputedStyle(smallImg).height);
      const smallDiv = document.querySelector('.posts__left-col .posts__item');
      const pdBotDiv = parseFloat(getComputedStyle(smallDiv).paddingBottom);
      const height = heightSmallImg * 2 + pdBotDiv * 4;
      wideImg.style.height = height + 'px';
    }
    resizeImg();
    window.addEventListener('resize', resizeImg);
  };

  
  function changePrices() {
    const prices = {
      standard: { usd: '$19', eur: '€17' },
      professional: { usd: '$49', eur: '€43' },
      extend: { usd: '$99', eur: '€87' }
    }
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
      const lblClasses = lbl.classList;
      lblClasses.add('lbl--active');
    }

    function blur(lbl, inpt) {
      const lblClasses = lbl.classList;
      if (!inpt.value)
        lblClasses.remove('lbl--active');
    }
  }



})();
