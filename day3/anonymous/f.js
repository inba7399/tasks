function findMedianSortedArrays(nums1, nums2) {
    let mergedArray = mergeArrays(nums1, nums2)

    let length = mergedArray.length
    if (length % 2 === 0) {

        let midIndex1 = length / 2 - 1
        let midIndex2 = length / 2
        return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2
    } else {
        let midIndex = Math.floor(length / 2)
        return mergedArray[midIndex]
    }
}

function mergeArrays(nums1, nums2) {
    let mergedArray = []
    let i = 0, j = 0

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            mergedArray.push(nums1[i])
            i++
        } else {
            mergedArray.push(nums2[j])
            j++
        }
    }
    while (i < nums1.length) {
        mergedArray.push(nums1[i])
        i++
    }
    while (j < nums2.length) {
        mergedArray.push(nums2[j])
        j++
    }

    return mergedArray;
}

let nums1 = [1, 3, 5];
let nums2 = [2, 4, 6];
console.log(findMedianSortedArrays(nums1, nums2)); 
