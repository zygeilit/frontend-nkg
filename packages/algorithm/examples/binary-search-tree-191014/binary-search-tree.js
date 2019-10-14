class Node {
  constructor(e) {
    this.e = e
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null
  }
  add(e) {
    if (!this.root) {
      return this.root = new Node(e)
    } else {
      this._add(this.root, e)
    }
  }
  _add(node, e) {
    if (node.e == e) {
      return
    } else if (e < node.e && node.left == null) {
      return node.left = new Node(e)
    } else if (e > node.e && node.right == null) {
      return node.right = new Node(e)
    }
    if (e < node.e) {
      return this._add(node.left, e)
    } else {
      return this._add(node.right, e)
    }
  }
}