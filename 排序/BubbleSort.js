function bubbleSort(arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) { // 只用遍历0到len-1次，即可排完所有元素
        for (let j = 0; j < len - 1 - i; j++) { // 从0找到len-i-1项，因为其之后的都已经排好序了
            if (arr[j] > arr[j + 1]) { // 比后面那项大，则交换值
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
}

const arr = [3, 6, 2, 1, 8, 4, 9]

bubbleSort(arr)

console.log(arr)
