import { getBlockchain, writeBlockchain } from "./blockchain-helpers.js";

const blockchain = getBlockchain();
const previousBlock = blockchain[blockchain.length-1];
const newBlock = {
    hash: Math.random().toString(),
    previousHash: previousBlock.hash,
    data: {
        fromAddress: process.argv[2],
        toAddress: process.argv[3],
        amount: parseInt(process.argv[4])
    }
};
blockchain.push(newBlock);
writeBlockchain(blockchain);