// Exercice : addition

let nombres = [0, 1, 2, 3, 4]
let addition = 0
for (let i = 0; i < nombres.length; i++){ // length: indique le nombre d'éléments présents dans le tableau
    addition = addition + nombres[i]
    console.log(addition)
}

// Exercice : Vos meilleurs choix

let acteurs = ["","Denzel","Wood","Rock"]
for(let i= 1; i < acteurs.length; i++){
    console.log("Le numéro " + i  + " est " + acteurs[i]);
}

// Exercice : clone

let persos = ["Mario","Luigi","Peach"]
let dup_array = persos.slice(); //La méthode slice() renvoie un objet tableau, contenant une copie superficielle ( shallow copy ) d'une portion du tableau d'origine
let inser = dup_array.push("Bowser") // La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau
console.log(persos)
console.log(dup_array)