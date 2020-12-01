//dado un arreglo de objetos, determinar la cantidad lenguajes, para ello crear una function que nos 
//retorne un nuevo objetos cdonde cada propiedad diga la cantidad de lenguajes hay presemtes

const list = [
    {firstName: 'Noah', lastName: 'Abb', country: 'Switzerland', continent: 'Europe', age: 40, language:'HTML'},
    {firstName: 'Carla', lastName: 'Bbb', country: 'Tahiti', continent: 'Oceania', age: 28, language:'Phyton'},
    {firstName: 'Maria', lastName: 'Cbb', country: 'Taiwan', continent: 'Asia', age: 35, language:'JavaS'},
    {firstName: 'Noah', lastName: 'Dbb', country: 'Switzerland', continent: 'Europe', age: 19, language:'JavaScript'},
    {firstName: 'Ramiro', lastName: 'Ebb', country: 'Tajikistan', continent: 'Asia', age: 35, language:'JavaScript'}
]

function nLanguage(array){
    let resultado = {}
    array.forEach(element => {

        if(resultado[element.language]){
            resultado[element.language]++
        } 
        else{
            resultado[element.language] = 1
        }
        
    });
    return resultado
}

console.log(nLanguage(list))