function adjustPartition(arr, low, high) {
    if (low < high) { // 因为以基准索引进行分区，分区最后越来越小，最后low等于high则是递归出口
        const mid = sort(arr, low, high) // 基准值的索引，以该值继续进行左右分区
        adjustPartition(arr, low, mid) // 参照基准值分出左区间
        adjustPartition(arr, mid + 1, high) // 参照基准值分出右区间
    }
}

function sort(arr, low, high) {
    const pivot = arr[low] // 记录当前基准值
    while (low < high) { // 如果low>=high则说明已经定位到了当前基准元素应该存放的位置
        while (
            (low < high)
            &&
            (arr[high] >= pivot)) high-- // 没有找到小于基准值的值
        if (low < high) arr[low++] = arr[high] // 找到小于基准值的值，放在左边
        while (
            (low < high)
            &&
            (arr[low] <= pivot)) low++ // 没有找到大于基准值的值
        if (low < high) arr[high--] = arr[low] // 找到了大于基准值的值，放在右边
    }
    arr[low] = pivot // 定位基准元素应该存放的位置
    return low // 返回当前基准值，给分区作为参考
}

function quickSort(arr) {
    adjustPartition(arr, 0, arr.length - 1)
}

const arr = [7, 3, 1, 9, 4, 8]

quickSort(arr)
console.log(arr)
