class SequenceQueue {
    constructor(maxQueueSize) {
        this.maxQueueSize = maxQueueSize
        this.queue = Array.apply(null, {length: maxQueueSize})
        this.front = 0
        this.rear = 0
    }

    isEmpty() {
        return this.front === this.rear
    }

    enQueue(element) {
        if (this.rear >= this.maxQueueSize) {
            return false
        }
        this.queue[this.rear++] = element
        return true
    }

    deQueue() {
        if (this.isEmpty()) return null
        return this.queue[this.front++]
    }

    length() {
        return this.rear - this.front
    }

    getQueueHead() {
        if (this.isEmpty()) return null
        return this.queue[this.front]
    }
}
