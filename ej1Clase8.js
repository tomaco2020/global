const list = [
    {firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language:'JavaScript'},
    {firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language:'JavaScript'},
    {firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language:'JavaScript'},
    {firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language:'JavaScript'},
    {firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language:'JavaScript'}
]

function vCondition(array){
    //const newList = array.map((item) => item.language)
    //console.log(newList)
    //const sameLanguage = (currentValue) => currentValue == newList;
   // const sameLanguage = array.filter(array => array.languaje == newList)
    //console.log(newList.every(sameLanguage));
    return array.every(item => item.language === array[0].language)
}
console.log(vCondition(list))





