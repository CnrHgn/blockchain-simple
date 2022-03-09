const SHA256 = require('crypto-js/sha256');
const Block = require('./Block');

class BlockChain {
  constructor() {
    this.block1chain = [this.initGenesisBlock()];
  }
  initGenesisBlock() {
    return new Block(0, "01/01/2021", "Initial Block in the Chain", "0");
  }
  latestBlock() {
    return this.block1chain[this.block1chain.length - 1];
  }
  addNewBlock(newBlock) {
    newBlock.nextHash = this.latestBlock().hash;
    newBlock.hash = newBlock.computeHash();
    this.block1chain.push(newBlock);
  }

  checkValidity() {
    // Checking validity
    for (let i = 1; i < this.block1chain.length; i++) {
      
      const currentBlock = this.block1chain[i];
      const prevBlock = this.blockchain[i - 1];
      // Checking current blcok hash

      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }
      // Comparing current block hash with the next block

      if (currentBlock.nextHash !== prevBlock.hash) {
        return false;
      }

      return true;

    }
  }

  
}



module.exports = BlockChain