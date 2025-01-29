document.addEventListener("DOMContentLoaded", function () {
    const balanceDisplay = document.getElementById("balance");
    const transactionList = document.getElementById("transactionList");

    let balance = parseFloat(localStorage.getItem("balance")) || 0;
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    function updateTransactionList() {
        transactionList.innerHTML = "";
        transactions.forEach((transaction) => {
            const li = document.createElement("li");
            li.textContent = `${transaction.type}: ₹${transaction.amount} (${transaction.date})`;

            // Style based on deposit or withdrawal
            if (transaction.type === "Deposit") {
                li.style.color = "green"; // Deposits in green
            } else {
                li.style.color = "red"; // Withdrawals in red
            }

            transactionList.appendChild(li);
        });
    }

    function updateBalance() {
        balanceDisplay.textContent = `₹${balance.toFixed(2)}`;
    }

    updateTransactionList();
    updateBalance();
});
