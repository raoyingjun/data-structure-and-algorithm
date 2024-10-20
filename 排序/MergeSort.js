function mergeSort(arr) {
    divide(arr, 0, arr.length - 1)
}

function merge(arr, left, mid, right) {
    const tmpArr = [] // 存储已排好序的数组
    let tmpPos = 0
    let l = left // 左边从哪里开始合并
    let r = mid + 1 // 右边从哪里开始合并
    // 如果左边还有，右边也还有的。则判断哪个值小，小的先入队列
    while (l <= mid && r <= right) tmpArr[tmpPos++] = arr[l] < arr[r] ? arr[l++] : arr[r++]
    // 对比完了，左边还有多的吗，有的话全部入队
    while (l <= mid) tmpArr[tmpPos++] = arr[l++];
    // 同样，判断右边是否还有多的，有的话入队
    while (r <= right) tmpArr[tmpPos++] = arr[r++];
    // 最后左边区间和右边区间合并到一起
    for (let i = 0, len = tmpPos; i < len; i++) {
        // 合并的位置是从是从索引left开始的
        arr[left + i] = tmpArr[i]
    }
}

function divide(arr, left, right) {
    if (left === right) { // 说明分割已到最小单位了
        return
    }
    const mid = Math.floor((left + right) / 2) // 中间值，以中间值为参照分割左区间和右区间
    divide(arr, left, mid) // 分割左区间
    divide(arr, mid + 1, right) // 分割右区间
    merge(arr, left, mid, right) // 合并左区间和右区间
}

const arr = [7, 3, 1, 9, 4, 8]

mergeSort(arr)
console.log(arr)
