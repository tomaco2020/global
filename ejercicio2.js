//Funcion shift elimina el primer elemento del arreglo 
const array=[10,45,71,3,14,48,71]
function eliminaElementos(){
    if (array.length > 5){//condicion  que compara la longitud (length) del arreglo
        let cont = 1 //variable contador 
        while (cont <=3){ //compara cont hasta 3
            array.pop() //Elimina el ultimo elemento
            cont++
        }
       }
}

eliminaElementos() 
console.log(" ")
console.log("se han removido los 3 ultimos elementos " ,array)
console.log(" ")
