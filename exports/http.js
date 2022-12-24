export default class {
  constructor(url, networkVersion) {
    this.url = url
    this.networkVersion = networkVersion
  }
  
  async _fetch(method) {
    const response = await fetch(`${this.url}/${method}`)
    return response.json()
  }

  balances() {
    return this._fetch('balances')
  }

  balanceOf(address) {
    return this._fetch(`balanceOf?address=${address}`)
  }
}