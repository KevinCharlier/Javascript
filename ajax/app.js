// Exo 1 - charger le fichier "data.json"
let xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', false);
xhr.send(null);

// Exo 2 - ajouter un score aléatoire (0 -> 1000) à toutes ces personnes
let data = JSON.parse(xhr.responseText);
for (let i = 0; i < data.length; i++) {
  data[i].score = Math.round(Math.random() * 1000);
}
console.log('Score')
console.log(data)

// Exo 3 - classer l'odre du tableau selon les scores
data.sort((a, b) => {
  return a.score - b.score;
});

// Exo 4 - mettre personnes dans 3 categories (a > 750, b > 500, c < 500 ) - les catgories sont des tableaux
let catA = []
let catB = []
let catC = []
data.forEach((personnes) => {
  if (personnes.score > 750) {
    catA.push(personnes);
  } else if (personnes.score <= 750 && personnes.score > 500) {
    catB.push(personnes);
  } else {
    catC.push(personnes);
  }
});
console.log('Cat A')
console.log(catA)
console.log('Cat B')
console.log(catB)
console.log('Cat C')
console.log(catC)

// Exo 5 - compter combien de personne viennent du "Bahrain"
let bahrain = data.filter((pays) => {
  return pays.country == "Bahrain";
})
console.log('Personnes venant de Bahrain')
console.log(bahrain)

// Exo 6 - afficher le plus grand score dans la console
let scoreMax = data.sort((max) => {
  return Math.max(max.score);
});
console.log('Le score maximal')
console.log(scoreMax[0]);

// Exo 7 - afficher le plus petit score dans la console
let scoreMin = data.sort((min) => {
  return Math.min(min.score);
});
console.log('Le plus petit score')
console.log(scoreMin[0]);