let a = ["onepice is the best anima of all time"];

let titleCaps = function(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        (function(str) {
            let words = str.toLowerCase().split(' ')
            for (let j = 0; j < words.length; j++) {
                words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1)
            }
            result.push(words.join(' '))
        })(arr[i])
    }
    return result
}(a)

console.log(titleCaps)
