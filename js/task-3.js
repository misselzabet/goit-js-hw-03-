
function filterArray(numbers, value) {
  let arr = [];
  for (let index = 0; index < numbers.length; index++) {
 if(numbers[index] > (value)) {
    arr.push(numbers[index]);
 }
  }
  return arr
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4)); 
console.log(filterArray([1, 2, 3, 4, 5], 5)); 
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20)); 




