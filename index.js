const Blockchain = require("./blockchain");
const Block = require("./block");

let myBlockchain = new Blockchain();

myBlockchain.addBlock(new Block(1, Date.now(), {amount: 100}));
myBlockchain.addBlock(new Block(2, Date.now(), {amount: 50}));
// myBlockchain.addBlock(new Block(3, Date.now(), {amount: 500}));
// myBlockchain.addBlock(new Block(4, Date.now(), {amount: 200}));

console.log(JSON.stringify(myBlockchain, null, 2));
console.log("Blockchain valid?", myBlockchain.isChainValid());

myBlockchain.chain[1].transactions = {amount: 1000}; // Tampering with a block's data

console.log("Blockchain valid after tampering?", myBlockchain.isChainValid());
