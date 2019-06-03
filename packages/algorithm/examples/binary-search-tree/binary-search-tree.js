
// 二分搜索树
// 1. 每个节点大于左子树的所有节点的值
// 2. 每个节点小于又子树的所有节点
// 3. 每一颗子树也是二分搜索树

// 存储的元素必须有可比较性


export class Node {

  e = null
  left = null
  right = null

  constructor(node) {
    this.e = node
    this.left = null
    this.rigth = null
  }
}

export default class BinarySearchTree {

  root = null
  size = 0

  size() {
    return this.size
  }
  isEmpty() {
    return this.size == 0
  }

  add(e) {

    // 复杂递归终止条件
    // if (this.root == null) {
    //   this.root = new Node(e)
    //   this.size++
    // } else {
    //   this.add_private(this.root, e)
    // }

    // 优化后
    this.root = thia._add_private(this.root, e)
  }

  // 向以node为根的二分搜索树中插入元素E，递归算法
  _add_private(node, e) {

    // 复杂递归终止条件
    // if (node.e == e) {
    //   return
    // } else if (e < node.e && node.left == null) {
    //   node.left = new Node(e)
    //   this.size++
    // } else if (e > node.e && node.right == null) {
    //   node.right = new Node(e)
    //   this.size++
    // }

    // if (e < node.e) {
    //   this.add_private(node.left, e)
    // } else {
    //   this.add_private(node.right, e)
    // }

    // 优化后
    if (node == null) {
      this.size++
      return new Node(e)
    }

    if (e < node.e) {
      node.left = this._add_private(node.left, e)
    } else if (e > node.e) {
      node.right = this._add_private(node.right, e)
    }

    return node
  }

  contains(e) {
    return this.contains(this.root, e)
  }

  _contains_private(node, e) {

    if (node == null) {
      return false
    }

    if (node.e == e) {
      return true
    } else if (e < node.e) {
      return this._contains_private(node.left, e)
    } else {
      return this._contains_private(node.right, e)
    }
  }

  // 前序遍历
  preOrder() {
    return this._preOrder_private(this.root)
  }

  _preOrder_private(node) {

    if (node == null) {
      return
    }

    console.log(node.e)

    this._traverse_private(node.left)
    this._traverse_private(node.right)
  }
}
