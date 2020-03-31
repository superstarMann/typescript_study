import * as CryptoJS from "crypto-js";

class Block{
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockhash = (index: number, previousHash: string, data: string, timestamp: number): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString(); 

    constructor (index: number, hash: string, previousHash: string, data: string, timestamp: number){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block( 0, "2020202020", "", "wow", 1234);


let BlockChain: Block[] = [genesisBlock];

let BlockChain: Block[]= [genesisBlock];

console.log(BlockChain);

export{};