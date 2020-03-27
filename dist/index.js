"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "2020202020", "", "wow", 1234);
let BlockChain = [genesisBlock];
console.log(BlockChain);
//# sourceMappingURL=index.js.map