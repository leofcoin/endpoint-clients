declare var chain
declare var peernet

export default class Client {
  url: string
  networkVersion: string
  client;

  constructor(url = 'ws://localhost:4040', networkVersion = 'leofcoin-peach') {
    this.url = url
    this.networkVersion = networkVersion
  } 

  get pubsub() {
    return {
      publish: peernet.pubsub.publish,
      subscribe: peernet.pubsub.subscribe
    }
  }

  balances() {
    return chain.balances
  }
    
  balanceOf(address: string, format: boolean) {
    return chain.balanceOf(address, format)
  }

  selectedAccount() {
    return chain.selectedAccount
  }

  selectAccount(address: any) {
    return chain.selectAccount({address})
  }

  accounts() {
    return chain.accounts
  }
    
  hasTransactionToHandle() {
    return chain.hasTransactionToHandle
  }

  getBlock(index: number) {
    return chain.getBlock(index)
  }
  blocks(amount: number) {
    return chain.blocks(amount)
  }

  sendTransaction(transaction) {
    return chain.sendTransaction(transaction)
  }
  peerId() {
    return chain.peerId
  }
  peers() {
    return chain.peers
  }
  validators() {
    return chain.validators
  }
  lookup(name: string) {
    return chain.lookup(name)
  }

  staticCall(contract: string, method: string, params: {}) {
    return chain.staticCall(contract, method, params)
  }
  nativeBurns(): number {
    return chain.nativeBurns
  }
  contracts(): number {
    return chain.contracts
  }
  nativeMints(): number {
    return chain.nativeMints
  }
  nativeToken(): number {
    return chain.nativeToken
  }
  nativeTransfers(): number {
    return chain.nativeTransfers
  }
  totalSize(): number {
    return chain.totalSize
  }
  totalTransactions(): number {
    return chain.totalTransactions
  }
  poolTransactions() {
      return chain.poolTransactions
  }
  transactionsInPool() {
      return chain.transactionsInPool
  }
  transactionPoolSize() {
      return chain.transactionPoolSize
  }
  totalBlocks(): number {
    return chain.totalBlocks
  }
  nativeCalls(): number {
    return chain.nativeCalls
  }
  participating(): boolean {
    return chain.participating
  }
  participate(address: string): {} {
    return chain.participate(address)
  }
  createContractAddress(owner: string, code: string, params: {}): {} {
    return chain.createContractAddress(owner, code, params)
  }
  deployContract(code: string, params: {}): {} {
    return chain.deployContract(code, params)
  }
  network() {
    return chain.network
  }

  networkStats(): { version: string; peers: {}[]; accounts: number; accountsHolding: number } {
    return chain.networkStats
  }

  getNonce(address: string) {
    return chain.getNonce(address)
  } 
}