// Exercice : PNJ (Personnage non-joueur)

let Character = {
    name : "kev",
    age : 25,
    items_to_give : ["papier","crayon","latte"],
}
for (let key in Character) {
    console.log(Character[key]);
}
let giveItem = () => {
    let random = (Math.round(Math.random() * Character.items_to_give.length));
    let item =  Character.items_to_give[random];
    console.log("Le PNJ vous donne une " + item);
}
giveItem()

// Exercice : Shop

class objet {
    constructor(title , minLevel, available) {
        this.title = title,
        this.physic = 50,
        this.magic = 50,
        this.minLevel = minLevel,
        this.available = available;
    }
}
let objects = [(new objet("épée",10 , true)),(new objet("hache", 15, true)),(new objet("sceptre", 5, false))];
let afficher = () => {
    objects.map((objets) => {
        console.log(objets);
})}
let dispo = () => {
    objects.map((objet) => {
        if(objet.available === true){
            console.log(objet);
        }
    })
}
let level = () => {
    objects.map((objet) => {
        if(objet.minLevel >= 10){
            console.log(objet);
        }
    })
}
afficher();
dispo();
level();

// Exercice : Personnage

let mainCharacter = {
    name : "Batman",
    level : 10,
    life : 100,
    weapon : {name: "poing", damage = 50},
    attack = () => { 
        
    }
}





