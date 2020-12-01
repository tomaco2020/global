//funcion que compara elementos del arreglo y retorna el distinto
//indexof obtiene el elemento n
//lastindexog obtiene el elemento anterior a n

const arr= [1,1,1,1,6,1,1]
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
    
  }
  console.log(findUniq(arr))
  