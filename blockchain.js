const Block = require("./block");

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()]; //Initial Genesis block
        this.difficulty = 4;
        this.pendingTransactions = [];
    }

    //Creating the first (genesis) block
    createGenesisBlock() {
        return new Block(0, Date.now(), "Genesis Block", "0");
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    addTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    // Create a new block with the pending transactions and add it to the chain
    minePendingTransactions() {
        const newBlock = new Block(this.chain.length, Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
        newBlock.mineBlock(this.difficulty);
        this.addBlock(newBlock);
        this.pendingTransactions = [];  // Clear the pending transactions after mining
    }

    
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }


    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            // Check if the current block's hash is correct
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            // Check if the previous hash points to the correct previous block
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }

        }
        return true;
    }
}

module.exports = Blockchain;