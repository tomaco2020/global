const list = [
    {firstName: 'Noah', lastName: 'Abb', country: 'Switzerland', continent: 'Europe', age: 40, language:'JavaScript'},
    {firstName: 'Carla', lastName: 'Bbb', country: 'Tahiti', continent: 'Oceania', age: 28, language:'JavaScript'},
    {firstName: 'Maria', lastName: 'Cbb', country: 'Taiwan', continent: 'Asia', age: 35, language:'JavaScript'},
    {firstName: 'Noah', lastName: 'Dbb', country: 'Switzerland', continent: 'Europe', age: 19, language:'JavaScript'},
    {firstName: 'Ramiro', lastName: 'Ebb', country: 'Tajikistan', continent: 'Asia', age: 35, language:'JavaScript'}
]

function addUserName(array){
    const currentYear = new Date().getFullYear() //dev uleve el ano actual
    array.forEach(element => element.userName = (element.firstName + element.lastName.charAt()).toLowerCase() + (currentYear-element.age)) 
    // foreach hace un looping que crea la propiedad userName apartir de firstName + la primer letra de lastName(charAt) ty los pone en minuscula
    // toLowerCase y le agrega el ano de nacimiento apartir de la resta entre el ano actual y la propiedad age
    return array
}   

console.log(addUserName(list))