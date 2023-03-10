type responseType = 'json' | 'text' | 'arrayBuffer' | 'clone' | 'formData' | 'blob';
type networkVersion = 'peach' | string;
export default class Client {
    url: URL;
    networkVersion: networkVersion;
    get isHttpClient(): boolean;
    constructor(url: any, networkVersion: any);
    _fetch(method: any, params?: any, type?: responseType): Promise<any>;
    _fetchString(method: string, params?: any): Promise<string>;
    _fetchNumber(method: string, params?: any): Promise<number>;
    _fetchBoolean(method: string, params?: any): Promise<boolean>;
    balances(): Promise<any>;
    balanceOf(address: any, format: any): Promise<any>;
    selectedAccount(): Promise<string>;
    selectAccount(address: any): Promise<any>;
    accounts(): Promise<any>;
    hasTransactionToHandle(): Promise<boolean>;
    getBlock(index: any): Promise<any>;
    blocks(amount: any): Promise<any>;
    sendTransaction(transaction: any): Promise<any>;
    peerId(): Promise<string>;
    peers(): Promise<any>;
    validators(): Promise<any>;
    lookup(name: any): Promise<any>;
    staticCall(contract: any, method: any, params: any): Promise<any>;
    nativeBurns(): Promise<number>;
    contracts(): Promise<any>;
    nativeMints(): Promise<number>;
    nativeToken(): Promise<string>;
    nativeTransfers(): Promise<number>;
    totalSize(): Promise<number>;
    totalTransactions(): Promise<number>;
    totalBlocks(): Promise<number>;
    nativeCalls(): Promise<number>;
    participating(): Promise<boolean>;
    participate(address: any): Promise<any>;
    createContractAddress(owner: any, code: any, params: any): Promise<any>;
    deployContract(code: any, params: any): Promise<any>;
    network(): Promise<any>;
    networkStats(): Promise<{
        version: string;
        peers: {}[];
        accounts: number;
        accountsHolding: number;
    }>;
    getNonce(address: string): Promise<number>;
}
export {};
