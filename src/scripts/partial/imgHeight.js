function imgHeight() {
  const wideImg = document.querySelector('.posts__right-col > .posts__item');

  window.addEventListener('resize', resizeImg);
  resizeImg();

  function resizeImg() {
    const smallImg = document.querySelector('.posts__left-col .posts__item img');
    const heightSmallImg = parseFloat(getComputedStyle(smallImg).height);
    const smallDiv = document.querySelector('.posts__left-col .posts__item');
    const pdBotDiv = parseFloat(getComputedStyle(smallDiv).paddingBottom);
    const height = heightSmallImg * 2 + pdBotDiv * 4;

    if (document.documentElement.clientWidth <= 768) {
      wideImg.classList.remove('posts__item--wide');
      wideImg.style.height = '';
    } else {
      wideImg.classList.add('posts__item--wide');
      wideImg.style.height = height + 'px';
    }
  }
}