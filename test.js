const array = [0,5,4,8]
array.push(17)
console.log(array)

const array1 = [1,2,5,7,8]
array1.pop()
console.log(array1)

const array2 = [1,2,5,7,8]
const last= array2.pop()
//array2.pop()
console.log(last)

const array3 = [1,2,5,7,8]
const first= array3.shift()
//array2.pop()
console.log(first)

const array4 = [1,2,5,7,8]
array4.unshift(100)
//array2.pop()
console.log(array4)

const array5 = [1,2,5,7,8]
const newarray = array5.slice(1,3)
//array2.pop()
console.log("array ", array5)
console.log("new Array ", newarray)
