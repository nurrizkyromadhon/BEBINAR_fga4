class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }

    deposit(amount) {
        // Simulasi operasi transaksi asynchronous dengan setTimeout
        setTimeout(() => {
            if (amount > 0) {
                this.balance += amount;
                console.log(`Deposit ${amount} berhasil. Saldo saat ini: ${this.balance}`);
            } else {
                console.log('Jumlah deposit harus lebih dari 0.');
            }
        }, 2000); // Menggunakan timeout 1 detik untuk simulasi
    }

    withdraw(amount) {
        // Simulasi operasi transaksi asynchronous dengan setTimeout
        setTimeout(() => {
            if (amount > 0 && amount <= this.balance) {
                this.balance -= amount;
                console.log(`Penarikan ${amount} berhasil. Saldo saat ini: ${this.balance}`);
            } else if (amount > this.balance) {
                console.log('Saldo tidak mencukupi.');
            } else {
                console.log('Jumlah penarikan harus lebih dari 0.');
            }
        }, 1000); // Menggunakan timeout 1 detik untuk simulasi
    }
}

// Membuat objek BankAccount
const account = new BankAccount(1000);

// Simulasi deposit dan withdrawal asynchronous
account.deposit(500);
account.withdraw(200);