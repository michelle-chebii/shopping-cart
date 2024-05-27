document.addEventListener('DOMContentLoaded', function() {
    const quantities = document.querySelectorAll('.quantity');
    const hearts = document.querySelectorAll('.heart');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 10; // Initial total price
  
    // Function to update total price
    function updateTotalPrice() {
      totalPriceElement.textContent = '$' + totalPrice.toFixed(2);
    }
  
    // Event listener for plus button
    quantities.forEach(function(quantity) {
      const plusButton = quantity.querySelector('.plus');
      const quantityValue = quantity.querySelector('.quantity-value');
      const itemPrice = parseFloat(quantity.parentElement.querySelector('.item-price').textContent.slice(1));
  
      plusButton.addEventListener('click', function() {
        const currentValue = parseInt(quantityValue.textContent);
        quantityValue.textContent = currentValue + 1;
        totalPrice += itemPrice;
        updateTotalPrice();
      });
    });
  
    // Event listener for minus button
    quantities.forEach(function(quantity) {
      const minusButton = quantity.querySelector('.minus');
      const quantityValue = quantity.querySelector('.quantity-value');
      const itemPrice = parseFloat(quantity.parentElement.querySelector('.item-price').textContent.slice(1));
  
      minusButton.addEventListener('click', function() {
        const currentValue = parseInt(quantityValue.textContent);
        if (currentValue > 1) {
          quantityValue.textContent = currentValue - 1;
          totalPrice -= itemPrice;
          updateTotalPrice();
        }
      });
    });
  
    // Event listener for heart button
    hearts.forEach(function(heart) {
      heart.addEventListener('click', function() {
        heart.classList.toggle('active');
      });
    });
  });
  