(function(){

  const promo = document.querySelector('#promo');
  let windowHeight;

  function resizePromo () {
    windowHeight = window.innerHeight;
    promo.style.height = windowHeight + 'px';
  }

  resizePromo();
  window.addEventListener('resize', resizePromo);
 
})();
