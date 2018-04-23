// Le juste prix aléatoire
let nbreAleatoire = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let justeprix = nbreAleatoire(20, 80);
let nbreEssai =1;

let guessJustePrix = () => {
    let saisie = prompt("Entre le juste prix charo ! (il est compris entre 20 et 80)");
    if(saisie > justeprix){
        console.log("C'est moins que " + saisie + " charo !")
        nbreEssai++
    }
    if(saisie < justeprix){
        console.log("C'est plus que " + saisie + " charo !")
        nbreEssai++
    }
    if(saisie == justeprix){
        alert("C'est gagné en " + nbreEssai + " essai(s) charo !")
    }
    if(saisie.includes('')) {
        guessJustePrix()
    }
}
guessJustePrix()