const cartButton = document.querySelector('.cart');

cartButton.addEventListener('click', function (e) {
  const product = e.target.parentElement.querySelector('h3').textContent;

  alert(`${product} has been added to your cart!`);
})