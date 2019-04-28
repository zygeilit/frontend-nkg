
export default class UnionFind {

  constructor (elements) {
    this.links = {}
    elements.forEach((e, i) => this.links[e] = i)
  }

  unionElement (a, b) {
  	let tVal = this.links[b]
  	for (let key in this.links) {
  		if (tVal == this.links[key]) {
  			this.links[key] = this.links[a]
  		}
  	}
  	return this.get()
  }

  find (a) {
  	return this.links[a]
  }

  get () {
  	return Object.values(this.links)
  }

  isConnected (a, b) {
  	return this.links[a] == this.links[b]
  }
}
