const list = [
    {firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language:'JavaScript'},
    {firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language:'JavaScript'},
    {firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language:'HTML'},
    {firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language:'JavaScript'},
    {firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language:'CSS'}
]
 //function returns true if I find the value of the language property in the array
 // item is each object
function fLanguage(array){
    //const lList = array.map(function(item){
    const lList = array.forEach(function(item){

        let lLanguage = 'HTML'  
        if (item.language === lLanguage){
        return console.log('true')
        }
        else{
            return console.log('False')
        }
        return console.log(lLanguage)
    })
}
fLanguage(list)