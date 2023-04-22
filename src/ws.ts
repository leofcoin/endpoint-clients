import SocketRequestClient from 'socket-request-client'

export default class Client {
  url: string
  networkVersion: string
  client: SocketRequestClient

  constructor(url = 'ws://localhost:4040', networkVersion = 'leofcoin-peach') {
    this.url = url
    this.networkVersion = networkVersion
  }

  async init() {
    this.client = await new SocketRequestClient(this.url, this.networkVersion)
  }

  get pubsub() {
    return {
      publish: this.client.pubsub.publish,
      subscribe: this.client.pubsub.subscribe
    }
  }

  request(url: string, params?: {}) {
    return this.client.request({url, params})
  }

  balances() {
    return this.request('balances')
  }
    
  balanceOf(address: string, format: boolean) {
    return this.request('balanceOf', {address, format})
  }

  selectedAccount() {
    return this.request('selectedAccount')
  }

  selectAccount(address: any) {
    return this.request('selectAccount', {address})
  }

  accounts() {
    return this.request('accounts')
  }
    
  hasTransactionToHandle() {
    return this.request('hasTransactionToHandle')
  }

  getBlock(index: number) {
    return this.request('getBlock', { index })
  }
  blocks(amount: number) {
    return this.request('blocks', {amount})
  }

  sendTransaction(transaction) {
    return this.request('sendTransaction', transaction)
  }
  peerId() {
    return this.request('peerId')
  }
  peers() {
    return this.request('peers')
  }
  validators() {
    return this.request('validators')
  }
  lookup(name: string) {
    return this.request('lookup', { name })
  }

  staticCall(contract: string, method: string, params: {}) {
    return this.request('staticCall', {contract, method, params})
  }
  nativeBurns(): number {
    return this.request('nativeBurns')
  }
  contracts(): number {
    return this.request('contracts')
  }
  nativeMints(): number {
    return this.request('nativeMints')
  }
  nativeToken(): number {
    return this.request('nativeToken')
  }
  nativeTransfers(): number {
    return this.request('nativeTransfers')
  }
  totalSize(): number {
    return this.request('totalSize')
  }
  totalTransactions(): number {
    return this.request('totalTransactions')
  }
  poolTransactions() {
      return this.request('poolTransactions')
  }
  transactionsInPool() {
      return this.request('transactionsInPool')
  }
  transactionPoolSize() {
      return this.request('transactionPoolSize')
  }
  totalBlocks(): number {
    return this.request('totalBlocks')
  }
  nativeCalls(): number {
    return this.request('nativeCalls')
  }
  participating(): boolean {
    return this.request('participating')
  }
  participate(address: string): {} {
    return this.request('participate', { address })
  }
  createContractAddress(owner: string, code: string, params: {}): {} {
    return this.request('createContractAddress', { owner, code, params })
  }
  deployContract(code: string, params: {}): {} {
    return this.request('deployContract', { code, params })
  }
  network() {
    return this.request('network')
  }

  networkStats(): { version: string; peers: {}[]; accounts: number; accountsHolding: number } {
    return this.request('networkStats')
  }

  getNonce(address: string) {
    return this.request('getNonce', { address })
  } 
}