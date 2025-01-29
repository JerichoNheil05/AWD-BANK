// Handle withdraw action
document.querySelector('.withdrawcard button').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;

    let currentBalance = parseFloat(localStorage.getItem('balance') || 0);

    if (amount && !isNaN(amount) && amount > 0 && currentBalance >= amount) {
        updateTransaction(amount, 'withdraw');
        alert(`Withdrew ₹${amount} successfully!`);
        document.getElementById('amount').value = ''; // Clear the input
    } else if (amount && currentBalance < amount) {
        alert('Insufficient balance to withdraw this amount.');
    } else {
        alert('Please enter a valid amount to withdraw.');
    }
});
