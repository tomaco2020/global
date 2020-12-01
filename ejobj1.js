/*class Heroe{
    constructor(name, position, live, hurt, experience){
        this.hName
        this.hPosition
        this.hLive
        this.hHurt
        this.hExperience
    }
}

const heroe1 = new Heroe("Heroe","00",100,5,0)
console.log(heroe1)*/

const heroe = {
    name : "Heroe1",
    position : "00",
    live : 100, 
    hurt : 5, 
    experience : 0,

}

function heroeCreator(object,vname){
    object.name = vname
    return console.log(object)    
    }

heroeCreator(heroe,'Spiderman')