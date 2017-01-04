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

})();
