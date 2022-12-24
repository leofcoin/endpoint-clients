export default class {
  constructor(url, networkVersion) {
    this.url = url
    this.networkVersion = networkVersion
  }
  
  async _fetch(method, params) {
    params = new URLSearchParams(params).toString()
    const response = await fetch(`${this.url}/${method}?${params}`)
    return response.json()
  }

  balances() {
    return this._fetch('balances')
  }

  balanceOf(address, format) {
    return this._fetch(`balanceOf`, {address, format})
  }

  selectedAccount() {
    return this._fetch('selectedAccount')
  }

  selectAccount(address) {
    return this._fetch('selectAccount', {address})
  }

  accounts() {
    return this._fetch('accounts')
  }
    
  hasTransactionToHandle() {
    return this._fetch('hasTransactionToHandle')
  }

  getBlock(index) {
    return this._fetch('getBlock', { index })
  }
  blocks(amount) {
    return this._fetch('blocks', {amount})
  }

  createTransactionFrom(from, to, method, parameters, nonce) {
    return this._fetch('createTransactionFrom', {from, to, method, parameters, nonce})
  }
  peerId() {
    return this._fetch('peerId')
  }
  peers() {
    return this._fetch('peers')
  }
  validators() {
    return this._fetch('validators')
  }
  lookup(name) {
    return this._fetch('lookup', { name })
  }

  staticCall(contract, method, params) {
    return this._fetch('staticCall', {contract, method, params})
  }
  nativeBurns() {
    return this._fetch('nativeBurns')
  }
  contracts() {
    return this._fetch('contracts')
  }
  nativeMints() {
    return this._fetch('nativeMints')
  }
  nativeToken() {
    return this._fetch('nativeToken')
  }
  nativeTransfers() {
    return this._fetch('nativeTransfers')
  }
  totalSize() {
    return this._fetch('totalSize')
  }
  totalTransactions() {
    return this._fetch('totalTransactions')
  }
  totalBlocks() {
    return this._fetch('totalBlocks')
  }
  nativeCalls() {
    return this._fetch('nativeCalls')
  }
  participating() {
    return this._fetch('participating')
  }
  participate(address) {
    return this._fetch('participate', { address })
  }

  createContractAddress(owner, code, params) {
    return this._fetch('createContractAddress', { owner, code, params })
  }
  deployContract(code, params) {
    return this._fetch('deployContract', { code, params })
  }
}