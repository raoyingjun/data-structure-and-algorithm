function adjustPartition(arr, left, right) {
    if (left < right) { // 因为以基准索引进行分区，分区最后越来越小，最后left等于right则是递归出口
        const mid = sort(arr, left, right) // 基准值的索引，以该值继续进行左右分区
        adjustPartition(arr, left, mid) // 参照基准值分出左区间
        adjustPartition(arr, mid + 1, right) // 参照基准值分出右区间
    }
}

function sort(arr, left, right) {
    const pivot = arr[left] // 记录当前基准值
    while (left < right) { // 如果left>=right则说明已经定位到了当前基准元素应该存放的位置
        while (
            (left < right)
            &&
            (arr[right] >= pivot)) right-- // 没有找到小于基准值的值
        if (left < right) arr[left++] = arr[right] // 找到小于基准值的值，放在左边
        while (
            (left < right)
            &&
            (arr[left] <= pivot)) left++ // 没有找到大于基准值的值
        if (left < right) arr[right--] = arr[left] // 找到了大于基准值的值，放在右边
    }
    arr[left] = pivot // 定位基准元素应该存放的位置
    return left // 返回当前基准值，给分区作为参考
}

function quickSort(arr) {
    adjustPartition(arr, 0, arr.length - 1)
}

const arr = [7, 3, 1, 9, 4, 8]

quickSort(arr)
console.log(arr)
