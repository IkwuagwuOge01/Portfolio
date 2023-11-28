document.getElementById('paymentForm').addEventListener('submit', function(event) {
 event.preventDefault();
  
 var cardNumber = document.getElementById('cardNumber').value;
 var cardHolderName = document.getElementById('cardHolderName').value;
 var expiryDate = document.getElementById('expiryDate').value;
 var cvv = document.getElementById('cvv').value;
 var amount = document.getElementById('amount').value;
  
 paypal.Buttons({
 createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: document.getElementById('amount').value
        }
      }]
    });
 },
 onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
      alert
 .then(response => response.json())
 .then(data => {
    if (data.success) {
      alert('Payment successful');
    } else {
      alert('Payment failed');
    }
 })
 .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
 });
});