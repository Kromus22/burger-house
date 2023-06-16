export const validation = () => {
  const burgerId = document.getElementById('burger');
  const nameId = document.getElementById('name');
  const phoneId = document.getElementById('phone');
  const orderBtn = document.getElementById('order-action');

  orderBtn.addEventListener('click', () => {
    let hasError = false;

    [burgerId, nameId, phoneId].forEach(item => {
      if (!item.value) {
        item.parentElement.style.background = 'red';
        hasError = true;
      } else {
        item.parentElement.style.background = '';
      }
    });

    if (!hasError) {
      [burgerId, nameId, phoneId].forEach(item => {
        item.value = '';
      });
      alert('Спасибо за Ваш заказ! ♥');
    }
  });
} 