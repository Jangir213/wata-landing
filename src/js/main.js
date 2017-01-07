(function () {

  (function mainWindow() {
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
    let prices = {
      standard: { usd: '$19', eur: '€17' },
      professional: { usd: '$49', eur: '€43' },
      extend: { usd: '$99', eur: '€87' }
    }

    const keys = Object.keys(prices);

    const currency = document.querySelector('.currency');
    const dolBtn = document.querySelector('#dol');
    const eurBtn = document.querySelector('#eur');
    //let prices = document.querySelectorAll('.container__price');

    dolBtn.addEventListener('change', change);
    eurBtn.addEventListener('change', change);

    function change() {
      console.log('++');
      for (let i = 0; i < keys.length; i++) {
        const price = document.querySelector(`.container--${keys[i]} .container__price`);
        price.innerHTML = ~price.innerHTML.indexOf('$') ?
          prices[keys[i]].eur :
          prices[keys[i]].usd;
      }
    }

  }


})();
