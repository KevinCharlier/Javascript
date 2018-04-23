//Exercice : Diseur de bonne aventure

let metier = "chauffeur de taxi"
let pays = "Belgique"
let prenom = "Charo"
let nbreEnfants = 3

alert("Vous serez " + metier + " et habiterez en " + pays + ", et marié a " + prenom + " avec " + nbreEnfants + " enfants ")

// Exercice : Calculer l'âge

let today=new Date();
let annee = today.getFullYear();
let naissance = 1992
let age = annee - naissance
alert(age)

//Exercice : Bientôt vieux

let age = 25
let agemax = 86
let vie = (agemax - age) * 365 + " jours"
alert("Il vous reste " + vie + " à vivre")

//Exercice : Priorités

let result = (1 + 2) * 3 + 4 / 2;
alert(result)
