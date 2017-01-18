function changePrices() {
  const prices = {
    standard: { usd: '$19', eur: '€17' },
    professional: { usd: '$49', eur: '€43' },
    extend: { usd: '$99', eur: '€87' }
  };
  const keys = Object.keys(prices);
  const dolBtn = document.querySelector('#dol');
  const eurBtn = document.querySelector('#eur');

  dolBtn.addEventListener('change', change);
  eurBtn.addEventListener('change', change);

  function change() {
    for (let i = 0; i < keys.length; i++) {
      const price = document.querySelector(`.container--${keys[i]} .container__price`);
      price.innerHTML = ~price.innerHTML.indexOf('$') ?
        prices[keys[i]].eur :
        prices[keys[i]].usd;
    }
  }
}