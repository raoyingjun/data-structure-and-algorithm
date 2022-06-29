class QueueNode {
    next = null

    constructor(data) {
        this.data = data
    }
}

class LinkQueue {
    constructor() {
        this.rear = this.front = new QueueNode(null)
    }

    isEmpty() {
        return this.rear === this.front
    }

    enQueue(element) {
        const nNode = new QueueNode(element)
        this.rear.next = nNode
        this.rear = nNode
    }

    deQueue() {
        if (this.isEmpty()) return null
        let val = null
        if (this.front.next === this.rear) {
            val = this.rear.data
            this.rear = this.front
        } else {
            val = this.front.next.data
            this.front.next = this.front.next.next
        }
        return val
    }

    getQueueHead() {
        if (this.isEmpty()) return null
        return this.front.next.data
    }
}
