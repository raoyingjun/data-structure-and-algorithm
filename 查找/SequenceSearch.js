function sequenceSearch(arr, data) {
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === data) {
            return i
        }
    }
    return -1
}