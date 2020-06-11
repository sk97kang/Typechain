import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hsah: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  // Block 생성 전 사용을 위해 static 선언
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  constructor(
    index: number,
    hsah: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hsah = hsah;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "202020202", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => getBlockchain()[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previosBlock: Block = getLatestBlock();
  const newIndex: number = previosBlock.index + 1;
  const newTimeStamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previosBlock.hsah,
    newTimeStamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previosBlock.hsah,
    data,
    newTimeStamp
  );
  return newBlock;
};

console.log(createNewBlock("Hellow"));

export {};
