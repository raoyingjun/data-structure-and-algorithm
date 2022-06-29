class CircularSequenceQueue {
    constructor(maxQueueSize) {
        this.maxQueueSize = maxQueueSize
        this.queue = Array.apply(null, {length: maxQueueSize})
        this.front = 0
        this.rear = 0
    }

    isEmpty() {
        return this.front === this.rear
    }

    isFull() {
        return (this.rear + 1) % this.maxQueueSize === this.front
    }

    enQueue(element) {
        if (this.isFull()) {
            return false
        }
        this.queue[this.rear++ % this.maxQueueSize] = element
        return true
    }

    deQueue() {
        if (this.isEmpty()) return null
        return this.queue[this.front++ % this.maxQueueSize]
    }

    length() {
        return (this.rear - this.front + this.maxQueueSize) % this.maxQueueSize
    }

    getQueueHead() {
        if (this.isEmpty()) return null
        return this.queue[this.front]
    }
}
