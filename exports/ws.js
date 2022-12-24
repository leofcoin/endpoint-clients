import socketRequestClient from 'socket-request-client'

export default class Client {
  constructor(url = 'ws://localhost:4040', networkVersion = 'leofcoin-peach') {
    this.url = url
    this.networkVersion = networkVersion
  }

  async init() {
    this.client = await socketRequestClient(this.url, this.networkVersion)
    globalThis.client = this
  }

  get pubsub() {
    return {
      publish: this.client.pubsub.publish,
      subscribe: this.client.pubsub.subscribe
    }
  }

  request(url, params) {
    return this.client.request({url, params})
  }

  balances() {
    return this.request('balances')
  }
    
  balanceOf(address, format) {
    return this.request('balanceOf', {address, format})
  }

  selectedAccount() {
    return this.request('selectedAccount')
  }

  selectAccount({address}) {
    return this.request('selectAccount', {address})
  }

  accounts() {
    return this.request('accounts')
  }
    
  hasTransactionToHandle() {
    return this.request('hasTransactionToHandle')
  }

  getBlock({index}) {
    return this.request('getBlock', { index })
  }
  blocks({amount}) {
    return this.request('blocks', {amount})
  }

  createTransactionFrom(from, to, method, parameters, nonce) {
    return this.request('createTransactionFrom', {from, to, method, parameters, nonce})
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
  lookup({name}) {
    return this.request('lookup', { name })
  }

  staticCall(contract, method, params) {
    return this.request('staticCall', {contract, method, params})
  }
  nativeBurns() {
    return this.request('nativeBurns')
  }
  contracts() {
    return this.request('contracts')
  }
  nativeMints() {
    return this.request('nativeMints')
  }
  nativeToken() {
    return this.request('nativeToken')
  }
  nativeTransfers() {
    return this.request('nativeTransfers')
  }
  totalSize() {
    return this.request('totalSize')
  }
  totalTransactions() {
    return this.request('totalTransactions')
  }
  totalBlocks() {
    return this.request('totalBlocks')
  }
  nativeCalls() {
    return this.request('nativeCalls')
  }
  participating() {
    return this.request('participating')
  }
  participate(address) {
    return this.request('participate', { address })
  }
}