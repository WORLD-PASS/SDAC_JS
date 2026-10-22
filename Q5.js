class BankAccount {
  constructor(accountHolder, balance = 0) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`);
    } else {
      console.log("Deposit amount must be greater than zero.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ₹${amount}. Remaining balance: ₹${this.balance}`);
    } else {
      console.log("Insufficient balance or invalid withdrawal amount.");
    }
  }

  checkBalance() {
    console.log(`Account Holder: ${this.accountHolder}, Current Balance: ₹${this.balance}`);
    return this.balance;
  }
}


const myAccount = new BankAccount("Rahul", 5000);

myAccount.checkBalance(); 

myAccount.deposit(2000);  
myAccount.checkBalance(); 

myAccount.withdraw(1500); 
myAccount.checkBalance(); 

myAccount.withdraw(10000); 
myAccount.checkBalance(); 


// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ node Q5.js 
// Account Holder: Rahul, Current Balance: ₹5000
// Deposited ₹2000. New balance: ₹7000
// Account Holder: Rahul, Current Balance: ₹7000
// Withdrew ₹1500. Remaining balance: ₹5500
// Account Holder: Rahul, Current Balance: ₹5500
// Insufficient balance or invalid withdrawal amount.
// Account Holder: Rahul, Current Balance: ₹5500
// ram@ram:~/Documents/SDAC/UI/typescript/M1_JS_TS_3$ 
