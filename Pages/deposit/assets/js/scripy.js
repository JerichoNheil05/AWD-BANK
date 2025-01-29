// Handle deposit action
document.querySelector('.depositcard button').addEventListener('click', function() {
    const amount = document.getElementById('password').value;

    if (amount && !isNaN(amount) && amount > 0) {
        updateTransaction(amount, 'deposit');
        alert(`Deposited ₹${amount} successfully!`);
        document.getElementById('password').value = ''; // Clear the input
    } else {
        alert('Please enter a valid amount to deposit.');
    }
});
