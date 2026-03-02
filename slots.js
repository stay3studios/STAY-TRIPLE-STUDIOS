// Interactive Slot Machine Game Logic

class SlotMachine {
    constructor() {
        this.balance = 100;
        this.isPlaying = false;
    }

    // Method to start the game
    startGame(betAmount) {
        if (this.isPlaying) {
            console.log('Game is already in progress.');
            return;
        }

        if (betAmount <= 0 || betAmount > this.balance) {
            console.log('Invalid bet amount.');
            return;
        }

        this.isPlaying = true;
        this.balance -= betAmount;
        console.log(`Bet placed: $${betAmount}`);

        const result = this.spin();
        this.checkResult(result, betAmount);
    }

    // Method to spin the slot machine
    spin() {
        const symbols = ['🍒', '💰', '🍀', '🔔', '⭐'];
        const result = [];
        for (let i = 0; i < 3; i++) {
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            result.push(randomSymbol);
        }
        console.log(`Spin result: ${result.join(' | ')}`);
        return result;
    }

    // Method to check the result of the spin
    checkResult(result, betAmount) {
        if (result[0] === result[1] && result[1] === result[2]) {
            // All symbols match
            const winAmount = betAmount * 10;
            this.balance += winAmount;
            console.log(`You win $${winAmount}! Your new balance is $${this.balance}.`);
        } else {
            console.log(`You lose. Your new balance is $${this.balance}.`);
        }
        this.isPlaying = false;
    }

    // Method to get the current balance
    getBalance() {
        return this.balance;
    }
}

// Example usage:
const slotMachine = new SlotMachine();
slotMachine.startGame(10); // Start the game with a $10 bet

// To check balance after the game
console.log(`Current balance: $${slotMachine.getBalance()}`);