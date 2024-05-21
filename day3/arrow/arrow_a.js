let OddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num)
        }
    })
}

OddNumbers([1,2,3,4,56,76,8,89,9])