function filterWorks() {
  const btns = document.querySelectorAll('.filter__btn');
  const works = document.querySelectorAll('.work');

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
      changeBtn(btns[i]);
      hiddenWorks(btns[i]);
    });
  }

  function changeBtn(btn) {
    for (let i = 0; i < btns.length; i++)
      btns[i].classList.remove('filter__btn--active');
    btn.classList.add('filter__btn--active');
  }

  function hiddenWorks(btn) {
    const filter = btn.dataset.group;

    if (filter == 'all') {
      showAllWorks();
      return;
    }

    for (let i = 0; i < works.length; i++) {
      const workGroups = works[i].dataset.groups;

      if (!~workGroups.indexOf(filter)) {
        works[i].classList.add('work--hidden');
        setTimeout(() => { works[i].style.display = 'none' }, 150);
      } else {
        works[i].classList.remove('work--hidden');
        setTimeout(() => { works[i].style.display = '' }, 150);
      }
    }
  }

  function showAllWorks() {
    for (let i = 0; i < works.length; i++) {
      works[i].classList.remove('work--hidden');
      setTimeout(() => { works[i].style.display = '' }, 150);
    }
  }
}