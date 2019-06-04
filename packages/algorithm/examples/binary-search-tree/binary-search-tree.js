
let containsInvokeTimes = 0

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
    this.root = this._add_private(this.root, e)
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

  // 包含
  contains(e) {
    return this._contains_private(this.root, e) && console.log(`函数查找次数（contains）：${containsInvokeTimes}`)
  }
  _contains_private(node, e) {

    // 计数，查找结点，递归执行次数
    containsInvokeTimes++

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

  // 后续遍历
  // 先处理子节点，如：释放内存
  postOrder() {
    return this._postOrder_private(this.root)
  }
  _postOrder_private() {
    if (node == null) {
      return
    }

    this._postOrder_private(node.left)
    this._postOrder_private(node.right)
    console.log(node.e)
  }

  // 中序遍历
  // 从小到大排序
  inOrder() {
    return this._inOrder_private(this.root)
  }
  _inOrder_private(node) {
    if (node == null) {
      return
    }

    this._inOrder_private(node.left)
    console.log(node.e)
    this._inOrder_private(node.right)
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
    this._preOrder_private(node.left)
    this._preOrder_private(node.right)
  }

  // 非递归前序遍历，使用辅助栈的数据结构，应用并不广泛
  // 深度优先遍历
  preOrderNR() {
    const stack = [ this.root ]
    while(!stack.length) {
      let cur = stack.pop()
      console.log(cur.e)
      if (cur.right != null) stack.push(cur.right)
      if (cur.left != null) stack.push(cur.left)
    }
  }

  // 层序遍历，广度优先遍历
  // 广度优先遍历，更快速的找到某个问题的解
  levelOrder() {
    const queue = [ this.root ]
    while(!queue.length) {
      let cur = queue.shift()
      console.log(cur.e)
      if (cur.left != null) queue.push(cur.left)
      if (cur.right != null) queue.push(cur.right)
    }
  }

  // 获取最小节点
  minimum() {
    if (this.size == 0) {
      throw new Error(`BST is empty!`)
    }
    return _minimum_private(this.root)
  }
  _minimum_private(node) {
    if (node.left == null) {
      return node
    }
    return _minimum_private(node.left)
  }

  // 获取最大节点
  maximum() {
    if (this.size == 0) {
      throw new Error(`BST is empty!`)
    }
    return _maximum_private(this.root)
  }
  _maximum_private(node) {
    if (node.right == null) {
      return node
    }
    return _maximum_private(node.right)
  }


  // 从二分搜索树中删除最小值所在的节点，返回最小值
  removeMin() {
    const ret = this.minimum()
    this.root = this._removeMin_private(this.root)
    return ret
  }

  // 删除掉已node为根的二分搜索树中最小节点
  // 返回删除节点后新的二分搜索树的根
  _removeMin_private(node) {
    
    if (node.left == null) {
      let rightNode = node.right
      node.right = null
      this.size --
      return rightNode // 返回删除节点后新的根
    }

    node.left = this._removeMin_private(node.left)
    return node
  }

  // 从二分搜索树中删除最大值所在的节点，返回最小值
  removeMax() {
    const ret = this.maximum()
    this.root = this._removeMax_private(this.root)
    return ret
  }

  // 删除掉已node为根的二分搜索树中最大节点
  // 返回删除节点后新的二分搜索树的根
  _removeMax_private(node) {
    
    if (node.right == null) {
      let leftNode = node.left
      node.left = null
      this.size --
      return leftNode // 返回删除节点后新的根
    }

    node.right = this._removeMax_private(node.right)
    return node
  }

  remove(e) {
    this.root = this._remove_private(this.root, e)
  }

  // 删除已node为根的二分搜索树中的值为e的节点，递归算法
  // 返回删除节点后新的二分搜索树的根
  _remove_private(node, e) {
    
    if (node == null) {
      return null
    }

    if (e < node.e) {
      node.left = this._remove_private(node.left, e)
      return node
    } else if (e > node.e) {
      node.right = this._remove_private(node.right, e)
      return node
    } else { // e == node.e
      // 找到待删除的节点

      // 左子树为空的情况，直接使用右子树根节点替换
      if (node.left == null) {
        let rightNode = node.right
        node.right = null
        this.size--
        return rightNode
      }

      // 右子树为空的情况，直接使用左子树根节点替换
      if (node.right == null) {
        let leftNode = node.left
        node.left == null
        this.size--
        return leftNode
      }

      // 待删除节点左右子树均不为空的情况
      // 找到比待删除节点大的最小节点，即待删除节点右子树的最小节点
      // 用这个节点顶替删除节点的位置
      let successor = _minimum_private(node.right)
      successor.right = this._removeMin_private(node.right)
      // this.size++
      successor.left = node.left

      node.left = node.right = null
      // this.size--

      return successor
    }
  }
}
