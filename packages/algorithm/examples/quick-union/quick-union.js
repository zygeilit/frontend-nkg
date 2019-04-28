
export default class UnionFind {

  constructor (elements) {
    this.links = {}
    elements.forEach((e, i) => {
      this.links[e] = {
        'parent': e, // 父节点指向自己，表示为根结点
        'name': e
      }
    })
  }

  unionElement (a, b) {
    let parA = this.getParent(a)
    let parB = this.getParent(b)
    parB.parent = parA.name
  	return this.get()
  }

  find (a) {
  	return this.links[a].value
  }

  getParent (a) {
    if (this.links[a].parent == this.links[a].name) {
      return this.links[a]
    }
    return this.getParent(this.links[a].parent)
  }

  get () {
  	return Object.values(this.links).map(l => l.parent)
  }

  isConnected (a, b) {
  	return this.getParent(a).name == this.getParent(b).name
  }
}
