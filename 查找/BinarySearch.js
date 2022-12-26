/**
 * @param {number[]} arr 有序数组
 * @param  {number} element 要查找的元素
 * @return {number | -1} 返回查找到的元素对应索引
 */
function binarySearch(arr, element) {
    let low = 0,
        high = arr.length - 1
    while (low <= high) {
        let mid = Math.ceil((low + high) / 2)
        if (element < arr[mid]) {
            high = mid - 1
        } else if (element >arr[mid]) {
            low = mid + 1
        } else {
            return mid
        }
    }
    return -1
}


console.log(binarySearch([1, 4, 7, 19, 30], 7))

