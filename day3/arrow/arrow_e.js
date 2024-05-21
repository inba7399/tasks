let  Palindrome = str => {
    const reversedStr = str.split('').reverse().join('')
    return str === reversedStr
};

let findPalindromes = arr => arr.filter(str => Palindrome(str))


let words = ["hello", "level", "radar", "world", "noon"]
let palindromeWords = findPalindromes(words)
console.log(palindromeWords)