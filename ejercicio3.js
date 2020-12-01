//Funcion 
/*const array=[10,45,71,3,89,100]
const set = array.map( function (item){
    return item+10    
})

console.log(set)*/

const array=[10,45,71,3,89,100]
console.log(array)
array.forEach(function(item, index){
    return array[index]= item+10
})
console.log(array)
