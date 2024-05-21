removeDuplicates=function (array) {
    return [new Set(array)];
}

let a = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];
let uniqueNumbers = removeDuplicates(a);
console.log(uniqueNumbers);
