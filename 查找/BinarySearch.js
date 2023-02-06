/**
 * @param {number[]} arr 有序数组
 * @param  {number} element 要查找的元素
 * @return {number | -1} 返回查找到的元素对应索引
 */
function binarySearch(arr, element) {
    let left = 0,
        right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (element > arr[mid]) {
            left = mid + 1
        } else if (element < arr[mid]) {
            right = mid - 1
        } else {
            return mid
        }
    }
    return -1
}


console.log(binarySearch([1, 4, 7, 19, 30], 7))

