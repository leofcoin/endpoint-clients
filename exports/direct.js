import { formatUnits, BigNumber } from '@leofcoin/utils';

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
            publish: globalThis.pubsub.publish,
            subscribe: globalThis.pubsub.subscribe
        };
    }
    balances() {
        return chain.balances;
    }
    async balanceOf(address, format) {
        const balances = await chain.balances;
        const balance = balances[address];
        return format ? formatUnits(balance) : balance;
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
        return chain.hasTransactionToHandle();
    }
    getBlock(index) {
        return chain.getBlock(index);
    }
    blocks(amount) {
        return chain.blocks.slice(amount);
    }
    sendTransaction(transaction) {
        return chain.sendTransaction(transaction);
    }
    peerId() {
        return peernet.peerId;
    }
    peers() {
        return peernet.peers;
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
        return transactionPoolStore.get();
    }
    transactionsInPool() {
        return transactionPoolStore.length();
    }
    transactionPoolSize() {
        return transactionPoolStore.size();
    }
    totalBlocks() {
        return chain.blocks.length;
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
    async networkStats() {
        let accountsHolding = 0;
        let accountsHoldingAmount = BigNumber.from(0);
        let topHolders = [];
        const balances = Object.entries(await chain.balances)
            .map(([holder, amount]) => {
            amount = BigNumber.from(amount);
            return { holder, amount };
        })
            .sort((a, b) => formatUnits(b.amount.sub(a.amount)));
        for (let { holder, amount } of balances) {
            if (amount.gt(0)) {
                accountsHoldingAmount = accountsHoldingAmount.add(amount);
                accountsHolding += 1;
                topHolders.length < 100 && topHolders.push({ holder, amount: formatUnits(amount) });
            }
        }
        return {
            version: peernet.networkVersion,
            peers: peernet.peers.map(([id, peer]) => id),
            accounts: await accountsStore.length(),
            accountsHolding,
            accountsHoldingAmount: formatUnits(accountsHoldingAmount).toString(),
            topHolders
        };
    }
    getNonce(address) {
        return chain.getNonce(address);
    }
    lastBlock() {
        return chain.lastBlock;
    }
    blockHashMap() {
        return chain.blockHashMap;
    }
    bootstrap() {
        return chain.blockHashMap;
    }
}

export { Client as default };
