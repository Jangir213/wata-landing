function focusInput() {
  const lbls = document.querySelectorAll('.lbl');

  for (let i = 0; i < lbls.length; i++) {
    const inpt = lbls[i].nextElementSibling;
    inpt.addEventListener('focus', () => { focus(lbls[i]) });
    inpt.addEventListener('blur', () => { blur(lbls[i], inpt) });
  }

  function focus(lbl) {
    lbl.classList.add('lbl--active');
  }

  function blur(lbl, inpt) {
    if (!inpt.value)
      lbl.classList.remove('lbl--active');
  }
}