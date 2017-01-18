function mobileNav() {
  const menuBtn = document.querySelector('.nav__mobile-btn');
  const closeBtn = document.querySelector('.nav__mobile-close');
  const mobileNav = document.querySelector('.nav__mobile-items');

  menuBtn.addEventListener('click', () => {
    mobileNav.style.marginLeft = '0px';
  });

  closeBtn.addEventListener('click', () => {
    mobileNav.style.marginLeft = '';
  });
}