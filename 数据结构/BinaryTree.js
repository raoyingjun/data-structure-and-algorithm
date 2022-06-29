class BinaryTreeNode {
    leftChild = null
    rightChild = null

    constructor(key, data) {
        this.key = key
        this.data = data
    }
}

// 二叉查找树 BST(Binary Search Tree)
class BinaryTree {
    root = null

    insert(key, data) {
        let node = new BinaryTreeNode(key, data)
        let cNode = this.root
        if (this.root === null) {
            this.root = node
            return node
        }
        while (true) {
            if (key < cNode.key) { // 要插入的节点key小于当前节点key
                if (cNode.leftChild === null) {
                    cNode.leftChild = node
                    return node
                }
                cNode = cNode.leftChild
            } else if (key > cNode.key) {
                if (cNode.rightChild === null) {
                    cNode.rightChild = node
                    return node
                }
                cNode = cNode.rightChild
            } else {
                return null
            }
        }
    }

    remove(key) {
        let cNode = this.root // 当前节点
        let parentOfcNode = null // 当前节点父节点
        while (cNode !== null) {
            if (cNode.key === key) break
            if (key < cNode.key) {
                parentOfcNode = cNode
                cNode = cNode.leftChild
            }
            if (key > cNode.key) {
                parentOfcNode = cNode
                cNode = cNode.rightChild
            }
        }
        if (cNode === null) return null
        if (cNode.leftChild === null && cNode.rightChild === null) {
            if (parentOfcNode.leftChild === cNode) parentOfcNode.leftChild = null
            else parentOfcNode.rightChild = null
            return cNode
        }
        if (cNode.leftChild !== null && cNode.rightChild === null) {
            console.log('Only Left Child')
            console.log(parentOfcNode, cNode)
            if (parentOfcNode.leftChild === cNode) parentOfcNode.leftChild = cNode.leftChild
            else parentOfcNode.rightChild = cNode.leftChild
            cNode.leftChild = null
            return cNode
        }
        if (cNode.leftChild === null && cNode.rightChild !== null) {
            if (parentOfcNode.leftChild === cNode) parentOfcNode.leftChild = cNode.rightChild
            else parentOfcNode.rightChild = cNode.rightChild
            cNode.rightChild = null
            return cNode
        }
        // 参考 https://blog.csdn.net/weixin_30568715/article/details/97221766?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_baidulandingword-0&spm=1001.2101.3001.4242
        if (cNode.leftChild !== null && cNode.rightChild !== null) {
            let maxLeftChildNode = cNode.leftChild
            let parentOfMaxLeftChildNode = cNode
            while (maxLeftChildNode.rightChild !== null) {
                parentOfMaxLeftChildNode = maxLeftChildNode
                maxLeftChildNode = maxLeftChildNode.rightChild
            }
            let cData = cNode.data
            let cKey = cNode.key
            cNode.data = maxLeftChildNode.data
            cNode.key = maxLeftChildNode.key
            if (parentOfMaxLeftChildNode.leftChild === maxLeftChildNode) parentOfMaxLeftChildNode.leftChild = maxLeftChildNode.leftChild
            else parentOfMaxLeftChildNode.rightChild = maxLeftChildNode.leftChild
            maxLeftChildNode.leftChild = null
            maxLeftChildNode.rightChild = null
            maxLeftChildNode.data = cData
            maxLeftChildNode.key = cKey
            return maxLeftChildNode
        }
    }

    search(key, root) {
        if (this.root === null) return null
        if (!root) root = this.root
        return this._search(key, root)
    }

    _search(key, root) {
        if (root === null) {
            return null
        } else if (root.key === key) {
            return root.data
        } else if (key < root.key) {
            return this._search(key, root.leftChild)
        } else {
            return this._search(key, root.rightChild)
        }
    }

    _order(orderType, callback) {
        if (this.root === null || !callback) return null
        switch (orderType) {
            case 'preOrder':
                this._preOrder(this.root, callback)
                break
            case 'inOrder':
                this._inOrder(this.root, callback)
                break
            case 'postOrder':
                this._postOrder(this.root, callback)
                break
            case 'levelOrder':
                this._levelOrder(this.root, callback)
                break
            default:
                break
        }
    }

    preOrder(callback) {
        this._order('preOrder', callback)
    }

    inOrder(callback) {
        this._order('inOrder', callback)
    }

    postOrder(callback) {
        this._order('postOrder', callback)
    }

    _preOrder(root, callback) {
        if (root !== null) {
            callback(root.data)
            this._preOrder(root.leftChild, callback)
            this._preOrder(root.rightChild, callback)
        }
    }

    _inOrder(root, callback) {
        if (root !== null) {
            this._inOrder(root.leftChild, callback)
            callback(root.data)
            this._inOrder(root.rightChild, callback)
        }
    }

    _postOrder(root, callback) {
        if (root !== null) {
            this._postOrder(root.leftChild, callback)
            this._postOrder(root.rightChild, callback)
            callback(root.data)
        }
    }
    levelOrder(callback) {
        this._order('levelOrder', callback)
    }

    _levelOrder(root, callback) {
        let nodes = []
        let cNode = null
        nodes.push(root)
        while (nodes.length !== 0) {
            cNode = nodes.shift()
            callback(cNode.data)
            if (cNode.leftChild !== null) {
                nodes.push(cNode.leftChild)
            }
            if (cNode.rightChild !== null) {
                nodes.push(cNode.rightChild)
            }
        }
    }
}

// let bst = new BinaryTree()
// bst.insert(70, 70)
// bst.insert(60, 60)
// bst.insert(89, 89)
// bst.insert(25, 25)
// bst.insert(66, 66)
// bst.insert(30, 30)
// bst.insert(28, 28)
//
// let preOrderArr = []
// let inOrderArr = []
// let postOrderArr = []
// let levelOrderArr = []
//
// bst.preOrder(data => {
//     preOrderArr.push(data)
// })
// console.log(preOrderArr.toString())
//
// bst.inOrder(data => {
//     inOrderArr.push(data)
// })
// console.log(inOrderArr.toString())
//
// bst.postOrder(data => {
//     postOrderArr.push(data)
// })
// console.log(postOrderArr.toString())
//
// bst.levelOrder(data => {
//     levelOrderArr.push(data)
// })
// console.log(levelOrderArr.toString())
