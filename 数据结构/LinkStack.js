class StackNode {
    next = null

    constructor(data) {
        this.data = data
    }
}

class LinkStack {
    top = new StackNode(null)

    isEmpty() {
        return this.top.next === null
    }

    pushStack(element) {
        let node = new StackNode(element)
        let cNode = this.top.next
        this.top.next = node
        node.next = cNode
    }

    popStack() {
        if (this.isEmpty()) return false
        let cNode = this.top.next
        this.top.next = cNode.next
        return cNode.data
    }

    getTopStack() {
        if (this.isEmpty()) return null
        return this.top.next.data
    }
}
