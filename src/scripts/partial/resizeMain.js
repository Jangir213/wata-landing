(function resizeMain() {
  const promo = document.querySelector('#promo');
  const nav = document.querySelector('.nav');
  let promoHeight;
  let navHeight;

  window.addEventListener('resize', resizePromo);
  resizePromo();

  function resizePromo() {
    promoHeight = window.innerHeight;
    navHeight = nav.clientHeight;
    promo.style.height = promoHeight + 'px';
  }
})();