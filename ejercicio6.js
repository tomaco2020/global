
const array = [4 , 5 , 7 ,1]
function minSuma(array){
    
      let minimo = Math.min.apply(null, array)
      const set = array.filter(function(item){
        return item > minimo
      })
    //console.log(set)
}
//minSuma(array)
console.log(minSuma(array))



//martes 10 nov- ejercicio 6
// Dado un arreglo de numeros enteros encuentre la menor suma posible entre ellos
​
const array = [2,11,0,1,37,21,5,6]
​
function menorSuma(array) {
    //detecto el menor valor del arreglo
    let min=Math.min.apply(null, array)
    //filtro el arreglo sacando el menor valor
    const set = array.filter( function(item) {
        return item > min
    })
    //busco el segundo menor valor 
    let min2=Math.min.apply(null, set)
​
    //calculo la menor suma
    console.log('MENOR SUMA ', min + min2)
}
​
menorSuma(array)