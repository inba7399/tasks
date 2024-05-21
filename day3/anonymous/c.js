 sum=function (arr)  
 {
  let sum = 0
  for (let i = 0; i < arr.length; i++)
     {
      sum += arr[i]
     }
  return sum
}
const a = [1, 2, 3, 4, 5]
console.log(sum(a))