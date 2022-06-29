function shellSort(arr) {
    const len = arr.length
    for (
        let gap = Math.floor(len / 2); // 初始的gap为数组长度的一半
        gap > 0; // gap如果等于0，则说明排序完序了
        gap = Math.floor(gap / 2)) { // 缩小增量。每次gap缩小为上次的一半
        for (let i = gap; i < len; i++) {// 比对每个gap区间，从gap位置开始，向后开始递增，直到数组末尾
            for (let j = i - gap; j >= 0;  j = j - gap) { // 这里的话跟插入排序思想一样
                if (arr[j] > arr[j + gap]) { // 如果当前这个元素大于当前间隔的后面那个元素，则交换
                    let tmp = arr[j]
                    arr[j] = arr[j + gap]
                    arr[j + gap] = tmp
                }
            }
        }
    }
}

const arr = [9, 4, 2, 6, 1, 8, 5]

shellSort(arr)

console.log(arr)
