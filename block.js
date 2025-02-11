const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(index, timestamp, transactions, previousHash = "") {
        this.index = index;
        this.timestamp = timestamp;
        this.transactions = Array.isArray(transactions) ? transactions : [transactions]; // Ensure transactions is always an array
        this.previousHash = previousHash;
        this.hash = this.calculateHash();  // Generate the block's hash
        this.nonce = 0;
        this.difficulty = 4; //number of leading zeroes required
    }

    //calculate hash of the block
    calculateHash() {
        return SHA256(
            this.index + this.timestamp + JSON.stringify(this.transactions) + this.previousHash + this.nonce
        ).toString();
    }

    // Proof-of-work: Mine the block until the hash matches the difficulty

    mineBlock() {
        while (this.hash.substring(0, this.difficulty) !== "0000") {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log(`Block mined: ${this.hash}`);

    }

    // Add transactions to the block
    addTransaction(transaction) {
        this.transactions.push(transaction);
    }

}


module.exports = Block;  
