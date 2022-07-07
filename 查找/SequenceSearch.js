/**
 * @param {number[]} arr 有序数组
 * @param  {number} element 要查找的元素
 * @return {Number | -1} 返回查找到的元素对应索引
 */
function sequenceSearch(arr, element) {
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === element) {
            return i
        }
    }
    return -1
}

console.log(sequenceSearch([1, 4, 7, 19, 30], 19))
