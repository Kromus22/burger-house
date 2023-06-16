export const scrolls = () => {
  const mainBtn = document.getElementById('main-action-btn');
  const productsBlock = document.getElementById('products');
  const orderBlock = document.getElementById('order');
  const links = document.querySelectorAll('.menu__item > a');
  const productsBtns = document.querySelectorAll('.product__btn');
  const burgerId = document.getElementById('burger');

  mainBtn.addEventListener('click', () => {
    productsBlock.scrollIntoView({ behavior: "smooth" });
  });

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
      document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({ behavior: "smooth" });
    });
  }

  for (let i = 0; i < productsBtns.length; i++) {
    productsBtns[i].addEventListener('click', (e) => {
      const currentBurgerName = e.target.closest('.products__item').querySelector('.products__item-title').textContent;
      burgerId.value = currentBurgerName;
      orderBlock.scrollIntoView({ behavior: "smooth" });
    });
  }
}