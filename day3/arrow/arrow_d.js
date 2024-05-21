let Prime = num => {
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

let PrimeNumbers = arr => arr.filter(num => Prime(num))

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let Numbers = PrimeNumbers(a)
console.log(Numbers)