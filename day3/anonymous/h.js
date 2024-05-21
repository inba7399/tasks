rotateArray=function (arr, k) {
    let n = arr.length
    let rotations = k % n
    if (rotations === 0 || n <= 1) {
        return arr
    }
    let rotatedArray = [arr.slice(n - rotations), arr.slice(0, n - rotations)]
    return rotatedArray
}
let a = [1, 2, 3, 4, 5]
let k = 2
console.log(rotateArray(a, k))