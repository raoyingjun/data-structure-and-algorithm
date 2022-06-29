/**
 * @param arr {string} 必须是有序数组
 */
function binarySearch(arr, data) {
    let low = 0,
        len = arr.length
        high = len - 1
        while (low <= high) {
            let mid = parseInt((low + high) / 2)
            if (arr[mid] > data) {
                high = mid - 1
            } else if (arr[mid] < data) {
                low = mid + 1
            } else {
                return mid
            }
        }
        return -1
} 


binarySearch([1, 4 ,7 ,19, 30], 7)