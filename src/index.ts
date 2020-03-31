import * as CryptoJS from "crypto-js";

class Block{
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockhash = (index: number, previousHash: string, data: string, timestamp: number): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString(); 

    static validateStructure = (aBlock: Block) : boolean => typeof aBlock.index === "number" && typeof aBlock.hash === "string" && typeof aBlock.previousHash === "string";

    constructor (index: number, hash: string, previousHash: string, data: string, timestamp: number){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}



const genesisBlock: Block = new Block( 0, "2020202020", "", "wow", 1234);

let BlockChain: Block[]= [genesisBlock];

const getBlockchain = () : Block[] => BlockChain

const getLatestBlock =() : Block => BlockChain[BlockChain.length -1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data:string) : Block => {
    const previosBlock: Block = getLatestBlock();
    const newIndex: number = previosBlock.index + 1;
    const newTimestamp: number =getNewTimeStamp();
    const newHash: string = Block.calculateBlockhash(newIndex, previosBlock.hash, nextTimestamp, data);
    const newBlock : Block = new Block(newIndex,previosBlock.hash , newHash, data, newTimestamp);
    return newBlock;
};

const isBlockValid = (candidateBlock: Block, previosBlock: Block) : boolean => {
    if()
}

export{};