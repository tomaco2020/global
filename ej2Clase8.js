const list = [
    {firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 40, language:'JavaScript'},
    {firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language:'JavaScript'},
    {firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language:'JavaScript'},
    {firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language:'JavaScript'},
    {firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 35, language:'JavaScript'}
]

function ageMax(array){
    const newList = array.map((item) => item.age)
    const max = Math.max(...newList)
    let maxAge = array.filter(array => array.age === max);
    console.log(maxAge);
}

ageMax(list)
