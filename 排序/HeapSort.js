function adjustHeap(arr, i, len) {
    let tmp = arr[i] // tmp存放大根堆顶
    let j = i * 2 + 1 // 左子节点
    while (j < len) {
        if (j < len - 1 && arr[j] < arr[j + 1]) j++ // 若存在右子节点，则判断哪个子节点大则j指向哪个子节点
        if (tmp >= arr[j]) break // 由于堆本身就是有序，如果此大根堆顶节点大于子节点，则无需再调整了，直接结束循环
        else { // 说明当前大根堆顶小于其子节点
            arr[i] = arr[j] // 把子节点的值赋值给当前大根堆
            i = j // 当前大根堆指向其子节点
            j = j * 2 + 1 // 子节点同样也向下调整使得与新的大根堆对应
        }
    }
    arr[i] = tmp // 最后把大根堆顶放置在合适的位置
}

function heapSort(arr) {
    let len = arr.length
    // 所有非叶子节点的从下到上，从右到左转变为大堆根。形成初始大根堆
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        adjustHeap(arr, i, len)
    }

    for (let j = len - 1; j > 0; j--) {
        let tmp = arr[0] // 得到的最大的值存起来
        arr[0] = arr[j] // 把最后一个数字放到大根堆顶，进行下一轮置换
        arr[j] = tmp  // 最大的值放到最后，不再进行处理了
        adjustHeap(arr, 0, j)// 已经处理好的跳过，只对没处理的进行处理
    }
    return arr
}

const arr = [7, 4, 8, 3, 2, 9, 6, 1]
heapSort(arr)
console.log(arr)
