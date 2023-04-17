class Client {
    url;
    networkVersion;
    client;
    constructor(url = 'ws://localhost:4040', networkVersion = 'leofcoin-peach') {
        this.url = url;
        this.networkVersion = networkVersion;
    }
    get pubsub() {
        return {
            publish: peernet.pubsub.publish,
            subscribe: peernet.pubsub.subscribe
        };
    }
    balances() {
        return chain.balances;
    }
    balanceOf(address, format) {
        return chain.balanceOf(address, format);
    }
    selectedAccount() {
        return chain.selectedAccount;
    }
    selectAccount(address) {
        return chain.selectAccount({ address });
    }
    accounts() {
        return chain.accounts;
    }
    hasTransactionToHandle() {
        return chain.hasTransactionToHandle;
    }
    getBlock(index) {
        return chain.getBlock(index);
    }
    blocks(amount) {
        return chain.blocks(amount);
    }
    sendTransaction(transaction) {
        return chain.sendTransaction(transaction);
    }
    peerId() {
        return chain.peerId;
    }
    peers() {
        return chain.peers;
    }
    validators() {
        return chain.validators;
    }
    lookup(name) {
        return chain.lookup(name);
    }
    staticCall(contract, method, params) {
        return chain.staticCall(contract, method, params);
    }
    nativeBurns() {
        return chain.nativeBurns;
    }
    contracts() {
        return chain.contracts;
    }
    nativeMints() {
        return chain.nativeMints;
    }
    nativeToken() {
        return chain.nativeToken;
    }
    nativeTransfers() {
        return chain.nativeTransfers;
    }
    totalSize() {
        return chain.totalSize;
    }
    totalTransactions() {
        return chain.totalTransactions;
    }
    poolTransactions() {
        return chain.poolTransactions;
    }
    transactionsInPool() {
        return chain.transactionsInPool;
    }
    transactionPoolSize() {
        return chain.transactionPoolSize;
    }
    totalBlocks() {
        return chain.totalBlocks;
    }
    nativeCalls() {
        return chain.nativeCalls;
    }
    participating() {
        return chain.participating;
    }
    participate(address) {
        return chain.participate(address);
    }
    createContractAddress(owner, code, params) {
        return chain.createContractAddress(owner, code, params);
    }
    deployContract(code, params) {
        return chain.deployContract(code, params);
    }
    network() {
        return chain.network;
    }
    networkStats() {
        return chain.networkStats;
    }
    getNonce(address) {
        return chain.getNonce(address);
    }
}

export { Client as default };
