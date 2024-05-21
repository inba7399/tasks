let words = function(str) {
    let reversedStr = str.split('').reverse().join('')
    return str === reversedStr
};

let Palindromes = function(arr) {
    return arr.filter(function(item) {
        return words(item.toString())
    });
};

let a = ["hello", "level", "radar", "world", "noon"]
let palindromeWords = Palindromes(a)
console.log(palindromeWords)