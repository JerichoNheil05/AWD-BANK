document.addEventListener("DOMContentLoaded", function () {
    const depositForm = document.getElementById("depositForm"); // Deposit Form
    const balanceDisplay = document.getElementById("balance"); // Balance Display

    // Load previous balance and transactions from localStorage
    let balance = parseFloat(localStorage.getItem("balance")) || 0;
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    function updateBalance() {
        balanceDisplay.textContent = `₹${balance.toFixed(2)}`;
        localStorage.setItem("balance", balance);
    }

    function saveTransaction(amount, type) {
        const transaction = { amount, type, date: new Date().toLocaleString() };
        transactions.push(transaction);
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }

    depositForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const amount = parseFloat(document.getElementById("amount").value);

        if (!name || !phone || amount <= 0) {
            alert("Please enter valid details.");
            return;
        }

        // Update balance
        balance += amount;
        updateBalance();

        // Save transaction
        saveTransaction(amount, "Deposit");

        alert("Deposit successful!");

        // Redirect to the transaction page after deposit
        window.location.href = "transaction.html";
    });

    updateBalance();
});
