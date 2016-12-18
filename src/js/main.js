(function(){

  const promo = document.querySelector('#promo');
  const nav = document.querySelector('.nav');
  let promoHeight;
  let navHeight;

  function resizePromo () {
    promoHeight = window.innerHeight;
    navHeight = nav.clientHeight;
    promo.style.height = promoHeight + 'px';
  }

  resizePromo();
  window.addEventListener('resize', resizePromo);
 
})();
