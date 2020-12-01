//ejercicio 6
const list = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Maria', country: 'Taiwan', continent: 'Europe', age: 35, language: 'HTML' },
    { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];
  function filtroPorLenguaje2 (array,language){
    const found = array.find(function(item){
        return item.language == language
    })
    if (found != undefined){
        console.log(found.firstName+' from '+ found.country + ' was the first '+ language + ' developer in the conference')
    }else{
        console.log('There are no '+language+' developers in the conference')
    }
  }
filtroPorLenguaje2 (list, 'HTML')