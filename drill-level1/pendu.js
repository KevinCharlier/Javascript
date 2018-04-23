let toGuess = ['B','O','N','J','O','U','R']; // Mot à deviner
let guessed = ['', '', '', '', '', '', '']; // Mot (partiellement) déviné

let guessLetter = () => {
    let letter = prompt("Entrez la lettre"); // prompt -> Fonction JavaScript qui ouvre une boîte de dialogue avec zone de saisie de texte
    console.log(letter) // console.log -> Fonction JavaScript qui écrit le contenu de l'objet dans la console du navigateur
    for (let i = 0; i <= toGuess.length ; i++){ // toGuess.length -> Entier qui indique le nombre d'éléments présents dans le tableau. Elle est toujours supérieure au plus grand indice du tableau.
        letter=letter.toUpperCase()
         if(toGuess[i] == letter) {
             guessed[i] = letter
             console.log("Bravo", guessed)
         }
    }
    
     if(guessed.includes('')) {
       guessLetter()
   }else {
       console.log("Vous avez gagnez")
   }
    
}
guessLetter()