let convertToTitleCase = arr => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }
    return arr
}
let a= ["game of thrones is the best of all time"]
let titleCaseStrings = convertToTitleCase(a)
console.log(titleCaseStrings)
