(function () {

  window.addEventListener('load', () => {
    $('.scrollspy').scrollSpy({ scrollOffset: 64 });

    imgHeight();
    changePrices();
    focusInput();
    filterWorks();
    linkClick();
    mobileNav();
  });

  //= partial/resizeMain.js
  //= partial/imgHeight.js
  //= partial/changePrices.js
  //= partial/focusInput.js
  //= partial/filterWorks.js
  //= partial/linkClick.js
  //= partial/mobileNav.js

})();
