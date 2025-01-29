// Get elements
const balanceElement = document.getElementById('balance');
const transactionListElement = document.getElementById('transactionList');

// Load balance and transaction history from localStorage
function loadData() {
    const balance = localStorage.getItem('balance') || 0;
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    balanceElement.innerText = `₹${balance}`;
    transactionListElement.innerHTML = transactions.map(transaction => 
        `<li>${transaction}</li>`
    ).join('');
}

// Update balance and transaction history
function updateTransaction(amount, type) {
    let balance = parseFloat(localStorage.getItem('balance') || 0);
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    if (type === 'deposit') {
        balance += parseFloat(amount);
        transactions.push(`Deposited ₹${amount}`);
    } else if (type === 'withdraw') {
        balance -= parseFloat(amount);
        transactions.push(`Withdrew ₹${amount}`);
    }

    // Save updated balance and transactions
    localStorage.setItem('balance', balance);
    localStorage.setItem('transactions', JSON.stringify(transactions));

    // Update the UI
    loadData();
}

// Call loadData on page load
loadData();
