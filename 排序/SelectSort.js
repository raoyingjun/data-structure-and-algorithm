function selectSort(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) { // 从0开始到len-1次即可排完所有的元素
        let minPos = i // 记录最小的索引
        for (let j = i + 1; j < len; j++) { // 从第i项后面一项开始遍历
            if (arr[j] < arr[minPos]) { // 找到了比minPos小的值的索引
                minPos = j // 更新minPos
            }
        }
        if (minPos !== i) { // 找到了更小的值的索引
            let tmp = arr[i]
            arr[i] = arr[minPos]
            arr[minPos] = tmp
        }
    }
}

const arr = [3, 1, 6, 5, 2, 9, 4]

selectSort(arr)

console.log(arr)
