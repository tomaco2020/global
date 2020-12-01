const list = [
    {firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, languaje:'JavaScript'},
    {firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, languaje:'JavaScript'},
    {firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, languaje:'HTML'},
    {firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, languaje:'JavaScript'},
    {firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, languaje:'CSS'}
]
 //funcion que agrega una nueva propiedad (greeting/bienvenida) a los objetos del array
 //gList es el nuevo array
 // item es cada objeto
function greeting(array){
    const gList = array.map(function(item){
        item.greeting = 'hi '+ item.firstName + ', and welcome to de conference.';
        return item;
    })
    console.log (gList)
}
greeting(list)