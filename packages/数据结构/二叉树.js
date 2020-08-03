
// var items = [undefined];
// var items = [undefined, 8, 5, 3, 9, 10, 43, 1, 5, 14, 22, 43, 1, 23, 3, 345, 43, 6, 43];

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(items) {
        this.items = items;
        this.root = null;
        this.size = 0;
    }
    insert(key, value) {
        this.root = this._insert(this.root, key, value);
        this.size++;
    }
    _insert(node, key, value) {
        if (!node) return new Node(key, value);
        if (key == node.key) {
            node.value = value;
        } else if (key < node.value) {
            node.left = this._insert(node.left, key, value);
        } else {
            node.right = this._insert(node.right, key, value);
        }
        return node;
    }
    search(key) {
        return this._search(this.root, key);
    }
    _search(node, key) {
        if (!node) return null;
        if (key == node.key) {
            return node;
        } else if (key < node.key) {
            return this._search(node.left, key);
        } else {
            return this._search(node.right, key);
        }
    }
    contain() {
        return this._contain(this.root);
    }
    _contain(node, key, value) {
        if (!node) return false;
        if (node.key == key) {
            return true;
        } else if (key < node.key) {
            return this._contain(node.left, key, value);
        } else {
            return this._contain(node.right, key, value);
        }
    }
    preOrder() {
        this._preOrder(this.root);
    }
    _preOrder(node) {
        if (node) {
            console.log(node.key);
            this._preOrder(node.left);
            this._preOrder(node.right);
        }
    }
    inOrder() {
        this._inOrder(this.root);
    }
    _inOrder(node) {
        if (node) {
            this._inOrder(node.left);
            console.log(node.key);
            this._inOrder(node.right);
        }
    }
    postOrder() {
        this._postOrder(this.root);
    }
    _postOrder(node) {
        if (node) {
            this._postOrder(node.left);
            this._postOrder(node.right);
            console.log(node.key);
        }
    }
    levelOrder() {
        let queue = [this.root];
        while(queue.length) {
            let t = queue.pop();
            console.log(t.key);
            if (t.left) queue.push(t.left);
            if (t.right) queue.push(t.right);
        }
    }
}

console.log(heap.items);

// class Node {
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//         this.left = null;
//         this.rigth = null;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//         this.size = 0;
//     }
//     insert(key, value) {
//         this._insert(this.root, key, value);
//         this.size += 1;
//     }
//     _insert(node, key, value) {
//         if (!node) return new Node(key, value);
//         if (node.key = key) {
//             node.value = value;
//         } else if (node.key < key) {
//             node.left = this._insert(node.left, key, value);
//         } else if (node.key > key) {
//             node.right = this._insert(node.rigth, key, value);
//         }
//         return node;
//     }
//     searech(key) {
//         return this._search(this.root, key);
//     }
//     _search(node, key) {
//         if (!node) return null;
//         if (node.key == key) {
//             return node.value;
//         } else if (node.key < key) {
//             return this._search(node.left, key);
//         } else if (node.key > key) {
//             return this._search(node.right, key);
//         }
//     }
//     contain(key) {
//         return this._contain(this.root, key);
//     }
//     _contain(node, key, value) {
//         if (!node) return false;
//         if (node.key == key) {
//             return true;
//         } else if (node.key < key) {
//             return this._contain(node.left, key, value);
//         } else if (node.key > key) {
//             return this._contain(node.right, key, value);
//         }
//     }
//     preOrder() {
//         this._preOrder(this.root);
//     }
//     inOrder() {
//         this._inOrder(this.root);
//     }
//     postOrder() {
//         this._postOrder(this.root);
//     }
//     _preOrder(node) {
//         if (node) {
//             console.log(node.key);
//             this._preOrder(node.left);
//             this._preOrder(node.right);
//         }
//     }
//     _inOrder(node) {
//         if (node) {
//             this._inOrder(node.left);
//             console.log(node.key);
//             this._inOrder(node.right);
//         }
//     }
//     _postOrder(node) {
//         if (node) {
//             this._postOrder(node.left);
//             this._postOrder(node.right);
//             console.log(node.key);
//         }
//     }
//     levelOrder() {
//         let queue = [];
//         queue.push(this.root);
//         while (queue.length) {
//             let firstNode = queue.pop();
//             console.log(firstNode.key);
//             if (firstNode.left) queue.push(firstNode.left);
//             if (firstNode.right) queue.push(firstNode.right);
//         }
//     }
//     minimum() {
//         return this._minimum(this.root);
//     }
//     _minimum(node) {
//         if (node.left) return node;
//         return this._minimum(node.left);
//     }
//     maximum() {
//         return this._maximum(this.root);
//     }
//     _maximum(node) {
//         if (node.right) return node;
//         return this._maximum(node.right);
//     }
//     removeMin() {
//         if (this.root)
//             this.root = this._removeMin(this.root);
//     }
//     removeMax() {
//         if (this.root)
//             this.root = this._removeMax(this.root);
//     }
//     _removeMin(node) {
//         if (!node.left) {
//             let nodeRight = node.right;
//             delete node;
//             this.size--;
//             return nodeRight;
//         }
//         return this._removeMin(node.left);
//     }
//     _removeMax(node) {
//         if (!node.right) {
//             let nodeLeft = node.left;
//             delete node;
//             this.size--;
//             return nodeLeft;
//         }
//         return this._removeMax(node.right);
//     }
// }


// function _shiftUp(index) {
//     let parentIndex = _findParentIndex(index);
//     if (index > 1 && items[index] > items[parentIndex]) { // index > 1 确保 parent 是顶级节点
//         swap(index, parentIndex);
//         _shiftUp(parentIndex);
//     } else {
//         return;
//     }
// }
// function _shiftDown(index) {
//     if (_findLeftChild(index) > (items.length-1)) return; // 存在左孩子
//     let targetIndex = _findLeftChild(index);
//     // 有右孩子并右孩子比左孩子大
//     if (_findRightChild(index) <= (items.length-1) && items[_findRightChild(index)] > items[targetIndex]) {
//         targetIndex = _findRightChild(index);
//     }
//     if (items[index] > items[targetIndex]) return;
//     swap(index, targetIndex);
//     _shiftDown(targetIndex);
// }
// function insert(item) {
//     items.push(item);
//     _shiftUp(items.length - 1);
// }
// function pop() {
//     let val = items[1];
//     swap(1, items.length - 1);
//     items.pop();
//     _shiftDown(1);
//     return val;
// }
// function _findParentIndex(index) {
//     return Math.floor(index / 2);
// }
// function _findLeftChild(index) {
//     return Math.floor(index * 2);
// }
// function _findRightChild(index) {
//     return Math.floor(index * 2 + 1);
// }
// function swap(l, r) {
//     let temp = items[l];
//     items[l] = items[r];
//     items[r] = temp;
// }
// insert(29);
// insert(1);
// insert(2);
// insert(5);
// insert(8);
// insert(10);
// let val = pop();
// console.log(val);

// function heapify() {
//     let lastParentIndex = Math.floor((items.length-1)/2);
//     for (let i=lastParentIndex; i>=1; i--) {
//         _shiftDown(i);
//     }
// }
// heapify()
// console.log(items)

// var items = [8, 5, 3, 9, 10, 43, 1, 5, 14, 22, 43, 1, 23, 3, 345, 43, 6, 43];
// function part(items, l, r) {
//     let m = l;
//     for (let i = l + 1; i <= r; i++) {
//         if (items[i] < items[l]) {
//             swap(items, i, m + 1);
//             m++;
//         }
//     }
//     swap(items, m, l);
//     return m;
// }
// function _sort(items, l, r) {
//     if (l >= r) return;
//     let m = part(items, l, r);
//     _sort(items, l, m - 1);
//     _sort(items, m + 1, r);
// }
// function quick_sort(items) {
//     _sort(items, 0, items.length - 1);
// }
// function swap(items, l, r) {
//     let temp = items[l];
//     items[l] = items[r];
//     items[r] = temp;
// }
// quick_sort(items);
// console.log(items);


// function shell_sort(items) {
//     for (let gap = Math.floor(items.length/2); gap > 0; gap = Math.floor(gap/2)) {
//         for (let i = gap; i < items.length; i++) {
//             for (let j = i; j >= 0; j -= gap) {
//                 if (items[j] < items[j - gap]) {
//                     swap(items, j, j - gap);
//                 }
//             }
//         }
//     }
// }
// for(let i=1; i<items.length; i++) {
//     for (let j = i; j > 0; j--) { // 向前对比
//         if (items[j] < items[j - 1]) {
//             swap(items, j, j - 1);
//         } else {
//             break; // 终止在大于的点
//         }
//     }
// }

// function __partition(items, l, r) {
//     let m = l;
//     let basePoint = items[l];
//     for (let i = l + 1; i <= r; i++) {
//         if (items[i] < basePoint) { // 小于基点
//             swap(items, i, m + 1);
//             m ++;
//         }
//     }
//     swap(items, l, m);
//     return m;
// }
// function __quickSort(items, l, r) {
//     if (l >= r) return;
//     let m = __partition(items, l, r);
//     __quickSort(items, l, m - 1);
//     __quickSort(items, m + 1, r); 
// }
// function quickSort(items) {
//     __quickSort(items, 0, items.length - 1);
// }
// function swap(items, l, r) {
//     let temp = items[l];
//     items[l] = items[r];
//     items[r] = temp;
// }
// quickSort(items);
// console.log(items);


// for (let i=1; i<items.length; i++) {
//     var selected = items[i];
//     var j=i-1;
//     for (; j>=0 && items[j] > selected; j--) {
//         items[j+1] = items[j];
//     }
//     items[j+1] = selected;
// }


// for (let i = 0; i < items.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < items.length; j++) {
//         if (items[j] < items[minIndex]) {
//             minIndex = j;
//         }
//     }
//     let temp = items[i];
//     items[i] = items[minIndex];
//     items[minIndex] = temp;
// }

// for(let i=0; i<items.length; i++) {
//     for (j=i+1; j<items.length; j++) {
//         if (items[i] > items[j]) {
//             let temp = items[i];
//             items[i] = items[j];
//             items[j] = temp;
//         }
//     }
// }