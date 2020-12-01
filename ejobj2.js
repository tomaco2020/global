const list = [
    {firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, languaje:'JavaScript'},
    {firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, languaje:'JavaScript'},
    {firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, languaje:'HTML'},
    {firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, languaje:'JavaScript'},
    {firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, languaje:'CSS'}
]

function continent(object, vcontinent){
    let i =  0
    let counter = 0
    
    for(i=0; i < object.length-1; i++){
        if(object[i].continent.includes(vcontinent)){
            counter++
        }
    }
    console.log('')
    console.log ('The number of attendees from the continent', vcontinent , 'is:', counter)   
}

continent(list,'Europe')