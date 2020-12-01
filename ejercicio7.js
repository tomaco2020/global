//funcion que devuelve el mayor producto entre dos elementos adyacentes de un array

const array = [3, 6, -2, -5, 7, 7]
function adjacentElementsProduct(inputArray) { 
    let numero = Number.NEGATIVE_INFINITY; 
    for(let i=0;i<inputArray.length-1;i++){ 
        if(inputArray[i]*inputArray[i+1] > numero){ 
            numero = inputArray[i]*inputArray[i+1]; 
        } 
    } return numero; 
} console.log(adjacentElementsProduct(array))