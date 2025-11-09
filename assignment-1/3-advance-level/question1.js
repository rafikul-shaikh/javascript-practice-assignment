// Q.1) Simulate an e-commerce checkout process using callbacks:
// addToCart → applyCoupon → calculateTotal → makePayment → sendReceipt.

function addToCart(item, callback) {
  console.log(`Adding ${item} to the cart...`);
  setTimeout(() => {
    callback(item);
  }, 1000);
}

function applyCoupon(item, callback) {
  console.log(`Applying coupon for ${item}...`);
  setTimeout(() => {
    callback(item, 10); // assuming discount = 10%
  }, 1000);
}

function calculateTotal(item, discount, callback) {
  let price = 100; // let's assume original price is 100
  let finalPrice = price - (price * discount) / 100;
  console.log(`Calculating total: Original = ${price}, Discount = ${discount}%, Final = ${finalPrice}`);
  setTimeout(() => {
    callback(finalPrice);
  }, 1000);
}

function makePayment(amount, callback) {
  console.log(`Processing payment of ₹${amount}...`);
  setTimeout(() => {
    callback(amount);
  }, 1000);
}

function sendReceipt(amount) {
  console.log(`Sending receipt for payment of ₹${amount}.`);
  console.log("✅ Checkout complete!");
}

// Running the process
addToCart("Shoes", function (item) {
  applyCoupon(item, function (item, discount) {
    calculateTotal(item, discount, function (finalAmount) {
      makePayment(finalAmount, function (amountPaid) {
        sendReceipt(amountPaid);
      });
    });
  });
});
