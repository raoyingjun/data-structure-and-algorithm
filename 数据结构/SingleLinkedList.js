class ListNode {
    next = null

    constructor(data) {
        this.data = data
    }
}

class SingleLinkedList {
    constructor(...elements) {
        this.head = new ListNode(null)
        let cNode = this.head
        for (let i = 0, len = elements.length; i < len; i++) {
            cNode.next = new ListNode(elements[i])
            cNode = cNode.next
        }
    }

    insertElementInTail(element) {
        let cNode = this.head
        while (cNode.next !== null) {
            cNode = cNode.next
        }
        cNode.next = new ListNode(element)
    }

    insertElementInHead(element) {
        let cNode = this.head
        let node = new ListNode(element) // node
        node.next = cNode.next
        cNode.next = node
    }

    findElement(element) {
        let i = 0
        let cNode = this.head
        while (cNode.next !== null && cNode.data !== element) {
            cNode = cNode.next
            i++
        }
        if (cNode.data === element) return i
        return -1
    }

    isEmpty() {
        return this.length() === 0
    }

    length() {
        let length = 0
        let cNode = this.head
        while (cNode.next !== null) {
            cNode = cNode.next
            length++
        }
        return length
    }

    deleteElement(element) {
        if (this.isEmpty()) return false
        let cNode = this.head
        let pNode = cNode
        while (cNode.next !== null && cNode.data !== element) {
            pNode = cNode
            cNode = cNode.next
        }
        if (cNode.data === element) {
            pNode.next = cNode.next
            return true
        }
        return false
    }

    foreach(cb) {
        let cNode = this.head
        while (cNode.next !== null) {
            cNode = cNode.next
            cb(cNode.data)
        }
    }
}


