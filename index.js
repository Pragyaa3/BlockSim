const Blockchain = require("./blockchain");
const Block = require("./block");

let myBlockchain = new Blockchain();

// Add transactions to the blockchain
myBlockchain.addTransaction({ sender: "Alice", receiver: "Bob", amount: 100 });
myBlockchain.addTransaction({ sender: "Bob", receiver: "Charlie", amount: 50 });

// Mine the pending transactions (create a block and mine it)
myBlockchain.minePendingTransactions();

// Check blockchain validity
console.log("Blockchain valid?", myBlockchain.isChainValid());

// Add another transaction and mine another block
myBlockchain.addTransaction({ sender: "Charlie", receiver: "David", amount: 30 });
myBlockchain.minePendingTransactions();

console.log("Blockchain valid after adding new block?", myBlockchain.isChainValid());
console.log(JSON.stringify(myBlockchain, null, 2));