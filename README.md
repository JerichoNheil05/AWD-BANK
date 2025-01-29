
# UBank - Online Banking System

## Overview
UBank is a simple web-based banking system that allows users to perform basic banking operations such as depositing and withdrawing money. The application consists of multiple pages for account management, deposit, withdrawal, and viewing transaction history.

The app uses **localStorage** to persist data such as balance and transaction history across different pages. The balance and transactions are updated dynamically as users deposit or withdraw funds.

## Project Structure

/AWD-BANK 
    ├── /Assets │ 
        ├── /css │ 
            │ └── style.css # Styling for the app │ 
            ├── /img │ │ └── 2.png # Images used in the app │ └── /js │ └── scripy.js # JavaScript for managing transactions 
    ├── /Pages │ 
        ├── /deposit │ 
            │ └── index.html # Deposit page │ 
        ├── /withdraw │ │ └── index.html # Withdrawal page │ 
            └── index.html # Hero page (Home page) 
└── README.md #


## Features
- **Deposit**: Allows users to deposit funds into their account. The deposit amount is added to the balance, and a transaction is recorded in the transaction history.
- **Withdraw**: Allows users to withdraw funds from their account. Withdrawals are deducted from the balance, and a transaction is recorded in the transaction history.
- **Transaction History**: Displays a list of all transactions (both deposits and withdrawals) on the hero (home) page.
- **Balance Display**: Shows the current balance on the hero page. The balance updates in real-time after each deposit or withdrawal.

## Getting Started

### Prerequisites
To run this project locally, you will need:
- A web browser (Chrome, Firefox, etc.)
- No server setup required, as this is a static HTML, CSS, and JavaScript project.


Usage
Deposit Funds:

Go to the "Deposit" page.
Enter your account name, account number, and the deposit amount.
Click the "Deposit" button to add funds to your account. The transaction will be recorded and visible on the Hero page.
Withdraw Funds:

Go to the "Withdraw" page.
Enter your account name, card number, and the withdrawal amount.
Click the "Withdraw" button. The withdrawal amount will be deducted from your balance, and the transaction will appear in the Hero page.
View Transaction History:

On the Hero page (Home), you will see the current balance and a list of all transactions (deposits and withdrawals).
How it works
The project uses localStorage to persist the balance and transaction history. This means the data will remain across page reloads or after closing the browser.
The transactions (deposit/withdraw) are stored in localStorage and displayed dynamically on the Hero page.
When a deposit or withdrawal occurs, the balance is updated, and the transaction is recorded in localStorage and displayed in the transaction history.
Technologies Used
HTML: Structure of the web pages.
CSS: Styling for the pages.
JavaScript: Managing transactions, balance updates, and interacting with localStorage.

