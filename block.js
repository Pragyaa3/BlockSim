const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, timestamp, transactions, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();  // Generate the block's hash
  }

  //calculate hash of the block
  calculateHash() {
    return SHA256(
      this.index + this.timestamp + JSON.stringify(this.transactions) + this.previousHash
    ).toString();  
  }
}

module.exports = Block;  
