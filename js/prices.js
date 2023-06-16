export const prices = () => {
  const currencyBtn = document.getElementById('change-currency');
  const productsPrices = document.querySelectorAll('.products__item-price');

  currencyBtn.addEventListener('click', (e) => {
    let currentCurrency = e.target.innerText;
    let newCurrency = '$';
    let coefficient = 1;

    if (currentCurrency === '$') {
      newCurrency = '₽';
      coefficient = 78;
    } else if (currentCurrency === '₽') {
      newCurrency = 'BYN';
      coefficient = 3;
    } else if (currentCurrency === 'BYN') {
      newCurrency = '€';
      coefficient = 0.9;
    } else if (currentCurrency === '€') {
      newCurrency = '¥';
      coefficient = 6.9;
    }

    e.target.innerText = newCurrency;
    for (let i = 0; i < productsPrices.length; i++) {
      productsPrices[i].innerText = +(productsPrices[i].getAttribute('data-base-price') * coefficient).toFixed(1) + " " + newCurrency;
    }
  });
}