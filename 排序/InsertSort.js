function insertSort(arr) {
    // 这里进行遍历，默认第一个元素是有序的，所以索引从第二个元素开始
    for (let i = 1, len = arr.length; i < len; i++) {
        // 由于第i项之前的数组本身就是有序数组，因此从第j项开始，只需判断和前面一项的关系，遍历至结束
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) { // 如果第j项小于前面一项，则交换
                let tmp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = tmp
            }
        }
    }
}

const arr = [7, 5, 9, 4, 3, 1]

insertSort(arr)

console.log(arr)
