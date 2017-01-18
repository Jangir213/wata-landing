'use strict';

(function () {

  window.addEventListener('load', function () {
    $('.scrollspy').scrollSpy({ scrollOffset: 64 });

    imgHeight();
    changePrices();
    focusInput();
    filterWorks();
    linkClick();
    mobileNav();
  });

  (function resizeMain() {
    var promo = document.querySelector('#promo');
    var nav = document.querySelector('.nav');
    var promoHeight = void 0;
    var navHeight = void 0;

    window.addEventListener('resize', resizePromo);
    resizePromo();

    function resizePromo() {
      promoHeight = window.innerHeight;
      navHeight = nav.clientHeight;
      promo.style.height = promoHeight + 'px';
    }
  })();
  function imgHeight() {
    var wideImg = document.querySelector('.posts__right-col > .posts__item');

    window.addEventListener('resize', resizeImg);
    resizeImg();

    function resizeImg() {
      var smallImg = document.querySelector('.posts__left-col .posts__item img');
      var heightSmallImg = parseFloat(getComputedStyle(smallImg).height);
      var smallDiv = document.querySelector('.posts__left-col .posts__item');
      var pdBotDiv = parseFloat(getComputedStyle(smallDiv).paddingBottom);
      var height = heightSmallImg * 2 + pdBotDiv * 4;

      if (document.documentElement.clientWidth <= 768) {
        wideImg.classList.remove('posts__item--wide');
        wideImg.style.height = '';
      } else {
        wideImg.classList.add('posts__item--wide');
        wideImg.style.height = height + 'px';
      }
    }
  }
  function changePrices() {
    var prices = {
      standard: { usd: '$19', eur: '€17' },
      professional: { usd: '$49', eur: '€43' },
      extend: { usd: '$99', eur: '€87' }
    };
    var keys = Object.keys(prices);
    var dolBtn = document.querySelector('#dol');
    var eurBtn = document.querySelector('#eur');

    dolBtn.addEventListener('change', change);
    eurBtn.addEventListener('change', change);

    function change() {
      for (var i = 0; i < keys.length; i++) {
        var price = document.querySelector('.container--' + keys[i] + ' .container__price');
        price.innerHTML = ~price.innerHTML.indexOf('$') ? prices[keys[i]].eur : prices[keys[i]].usd;
      }
    }
  }
  function focusInput() {
    var lbls = document.querySelectorAll('.lbl');

    var _loop = function _loop(i) {
      var inpt = lbls[i].nextElementSibling;
      inpt.addEventListener('focus', function () {
        focus(lbls[i]);
      });
      inpt.addEventListener('blur', function () {
        blur(lbls[i], inpt);
      });
    };

    for (var i = 0; i < lbls.length; i++) {
      _loop(i);
    }

    function focus(lbl) {
      lbl.classList.add('lbl--active');
    }

    function blur(lbl, inpt) {
      if (!inpt.value) lbl.classList.remove('lbl--active');
    }
  }
  function filterWorks() {
    var btns = document.querySelectorAll('.filter__btn');
    var works = document.querySelectorAll('.work');

    var _loop2 = function _loop2(i) {
      btns[i].addEventListener('click', function () {
        changeBtn(btns[i]);
        hiddenWorks(btns[i]);
      });
    };

    for (var i = 0; i < btns.length; i++) {
      _loop2(i);
    }

    function changeBtn(btn) {
      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove('filter__btn--active');
      }btn.classList.add('filter__btn--active');
    }

    function hiddenWorks(btn) {
      var filter = btn.dataset.group;

      if (filter == 'all') {
        showAllWorks();
        return;
      }

      var _loop3 = function _loop3(i) {
        var workGroups = works[i].dataset.groups;

        if (!~workGroups.indexOf(filter)) {
          works[i].classList.add('work--hidden');
          setTimeout(function () {
            works[i].style.display = 'none';
          }, 150);
        } else {
          works[i].classList.remove('work--hidden');
          setTimeout(function () {
            works[i].style.display = '';
          }, 150);
        }
      };

      for (var i = 0; i < works.length; i++) {
        _loop3(i);
      }
    }

    function showAllWorks() {
      var _loop4 = function _loop4(i) {
        works[i].classList.remove('work--hidden');
        setTimeout(function () {
          works[i].style.display = '';
        }, 150);
      };

      for (var i = 0; i < works.length; i++) {
        _loop4(i);
      }
    }
  }
  function linkClick() {
    var links = document.querySelectorAll('.link');
    var innerElement = document.createElement('span');
    innerElement.className = 'link__inner';

    var _loop5 = function _loop5(i) {
      links[i].addEventListener('click', function (e) {
        click(links[i], innerElement, e);
      });
    };

    for (var i = 0; i < links.length; i++) {
      _loop5(i);
    }

    function click(el, inEl, e) {
      el.appendChild(inEl);

      var max = Math.max(el.clientHeight, el.clientWidth);
      var x = e.pageX - el.offsetLeft - max / 2;
      var y = e.pageY - el.offsetTop - max / 2;
      var inner = el.querySelector('.link__inner');
      inner.style.height = max + 'px';
      inner.style.width = max + 'px';
      inner.style.left = x + 'px';
      inner.style.top = y + 'px';
      inner.classList.add('link__inner--animate');

      setTimeout(function () {
        if (el.contains(inEl)) el.removeChild(inEl);
      }, 700);
    }
  }
  function mobileNav() {
    var menuBtn = document.querySelector('.nav__mobile-btn');
    var closeBtn = document.querySelector('.nav__mobile-close');
    var mobileNav = document.querySelector('.nav__mobile-items');

    menuBtn.addEventListener('click', function () {
      mobileNav.style.marginLeft = '0px';
    });

    closeBtn.addEventListener('click', function () {
      mobileNav.style.marginLeft = '';
    });
  }
})();