let isPrime = function(num) {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

let findPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
        return isPrime(num)
    })
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let primeNumbers = findPrimeNumbers(a)
console.log(primeNumbers)