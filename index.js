// coté client 

//les variables

var hello = "bonjour"; //obsolète

let hello = "bonjour"; //new (mtn OS6 - avant OS5: souvent présent sur internet)

const HELLO = "bonjour" //pas obliger de mettre ; js l accepte mais par convention on le met

hello + "David" //concaténation

// les conditions

var a = 5
var b = 5

if (a === b) {
    var ab = a + b;
} //js declarera la variable globale ab (var ab;) tout en haut du script => confusion parfois

var a = 5
var b = 5

if (a === b) {
    let ab = a + b;
} //js declarera la variable seulement dans le block et sera accessible que dans ce block

//let permet de faire plus facilement une boucle dans une boucle



//les tableaux (pas de tableaux associatifs dans js)

let array = ["david", "claude"]

let hero = { //objet, cela remplace un peu un tableau associatif (MEGA VARIABLE !!!PAS ORIENTE OBJET)
    name: "Harry",
    xp: 89,
    objet: "lunette",
    crier() { //méthode
        console.log("WOWOWO")
    }
}

hero(crier)

let classe = ["Claude", "Sarah", "Geof"]

classe.foreach(function (eleve) {
    console.log(eleve);
})


// les fonctions

let hello = function () {
    return "hello";
}

hello();

let hello = () => "hello"; //nouvelle convention d'écriture

hello();


// orienté objet

class Hero {
    constructor(name = "Harry", xp ="89"){
        this.name = name;
        this.xp = xp;
        this.vie = 100;
    }

    attaque(enemy){
        console.log ("Vous avez" + this.xp + "en moins");
    }
}

let hero2 = new Hero ("Jean", "56");

hero2.attaque("tintin");