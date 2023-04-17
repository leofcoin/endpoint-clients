export default class Client {
    url: string;
    networkVersion: string;
    client: any;
    constructor(url?: string, networkVersion?: string);
    get pubsub(): {
        publish: any;
        subscribe: any;
    };
    balances(): any;
    balanceOf(address: string, format: boolean): any;
    selectedAccount(): any;
    selectAccount(address: any): any;
    accounts(): any;
    hasTransactionToHandle(): any;
    getBlock(index: number): any;
    blocks(amount: number): any;
    sendTransaction(transaction: any): any;
    peerId(): any;
    peers(): any;
    validators(): any;
    lookup(name: string): any;
    staticCall(contract: string, method: string, params: {}): any;
    nativeBurns(): number;
    contracts(): number;
    nativeMints(): number;
    nativeToken(): number;
    nativeTransfers(): number;
    totalSize(): number;
    totalTransactions(): number;
    poolTransactions(): any;
    transactionsInPool(): any;
    transactionPoolSize(): any;
    totalBlocks(): number;
    nativeCalls(): number;
    participating(): boolean;
    participate(address: string): {};
    createContractAddress(owner: string, code: string, params: {}): {};
    deployContract(code: string, params: {}): {};
    network(): any;
    networkStats(): {
        version: string;
        peers: {}[];
        accounts: number;
        accountsHolding: number;
    };
    getNonce(address: string): any;
}
