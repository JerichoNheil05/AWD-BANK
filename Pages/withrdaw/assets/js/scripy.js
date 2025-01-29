document.addEventListener("DOMContentLoaded", function() {
    const withdrawForm = document.getElementById("withdrawForm");
    const withdrawTransactionList = document.getElementById("withdrawTransactionList");

    // Load withdrawals from localStorage
    let withdrawals = JSON.parse(localStorage.getItem("withdrawals")) || [];

    function updateWithdrawList() {
        withdrawTransactionList.innerHTML = "";
        withdrawals.forEach((withdrawal, index) => {
            const li = document.createElement("li");
            li.textContent = `Name: ${withdrawal.name}, Amount: $${withdrawal.amount}`;
            withdrawTransactionList.appendChild(li);
        });
    }

    withdrawForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const card = document.getElementById("card").value;
        const amount = document.getElementById("withdrawAmount").value;

        if (!name || !card || amount <= 0) {
            alert("Please enter valid details.");
            return;
        }

        // Save withdrawal
        const newWithdrawal = { name, card, amount };
        withdrawals.push(newWithdrawal);
        localStorage.setItem("withdrawals", JSON.stringify(withdrawals));

        updateWithdrawList();
        withdrawForm.reset();
    });

    updateWithdrawList();
});