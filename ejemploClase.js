// Dado un array de objetos con una propiedad donde nos indican el tipo de comida, 
//cree un objeto que nos permita saber cuantos platos de cada tipo se debe pedir

const list = [
    {firstName: 'Noah', lastName: 'Abb', country: 'Switzerland', continent: 'Europe', age: 40, language:'JavaScript' , meal: 'vegetarian'},
    {firstName: 'Carla', lastName: 'Bbb', country: 'Tahiti', continent: 'Oceania', age: 28, language:'JavaScript', meal: 'vegan'},
    {firstName: 'Maria', lastName: 'Cbb', country: 'Taiwan', continent: 'Asia', age: 35, language:'JavaScript', meal: 'standard'},
    {firstName: 'Noah', lastName: 'Dbb', country: 'Switzerland', continent: 'Europe', age: 19, language:'JavaScript', meal: 'vegetarian'},
    {firstName: 'Ramiro', lastName: 'Ebb', country: 'Tajikistan', continent: 'Asia', age: 35, language:'JavaScript'}
]

function returnMeal(array){
    let resultado = {}
    array.forEach(element => {

        if(resultado[element.meal]){
            resultado[element.meal]++
        } 
        else{
            resultado[element.meal] = 1
        }
        
    });
    return resultado
}

console.log(returnMeal(list))