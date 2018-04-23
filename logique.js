//Exercice : Langues

let langue = "en"
let msg 

if (langue === "fr"){
    msg = "Bonjour tout le monde"
}
if (langue === "es"){
    msg = "Hola, Mundo"
}
if (langue === "en"){
    msg = "Hello world"
}
alert(msg)

//Exercice : Affichage des scores

let score = 85
let rang

if (score >= 90){
    rang = "A"
}
if (score < 90){
    rang = "B"
}
if (score <= 50){
    rang = "C"
}
alert(rang)

//Exercice : Mettre au pluriel

let mot = "chaussure"
let nbre = 2
let res

if (nbre > 1){
    mot = mot + "s"
}
alert("Je possède " + nbre + " " + mot)





