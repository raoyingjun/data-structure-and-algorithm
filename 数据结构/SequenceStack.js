class SequenceStack {
    constructor(maxStackSize) {
        this.maxStackSize = maxStackSize
        this.stack = Array.apply(null, {length: maxStackSize})
        this.top = -1
    }

    isEmpty() {
        return this.top === -1
    }

    pushStack(element) {
        if (this.top + 1 >= this.maxStackSize) return false
        this.top++
        this.stack[this.top] = element
        return true
    }

    popStack() {
        if (this.isEmpty()) return false
        return this.stack[this.top--]
    }

    getTopStack() {
        if (this.isEmpty()) return null
        return this.stack[this.top]
    }

    foreach(cb) {
        for (let i = 0, len = this.top + 1; i < len; i++) {
            cb(this.stack[i])
        }
    }
}
