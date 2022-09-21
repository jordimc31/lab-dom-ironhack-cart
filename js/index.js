// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  console.log(typeof price.textContent);
  console.log(typeof quantity.value);

  quantity = Number(quantity.value);

  let totalPrice = price.textContent * quantity;

  console.log(totalPrice);

  subtotal = product.querySelector('.subtotal span');

  subtotal.textContent = totalPrice;
  console.log(' Subtotal : ' + subtotal.textContent);

  document.getElementsByClassName('subtotal').innerText = subtotal.innerText;

  return subtotal.textContent;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.getElementsByClassName('product');
  let total = 0;
  for (i = 0; i < singleProduct.length; i++) {
    total += Number(updateSubtotal(singleProduct[i]));
  }

  console.log('TOTAL : ' + total);

  document.getElementById('total-value').innerText = 'Total: $' + total;

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log('Trying to create a product...');
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  createButton = document.getElementById('create');

  createButton.addEventListener('click', createProduct);
  console.log('Window is opened');

  //... your code goes here
});
