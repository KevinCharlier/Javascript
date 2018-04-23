// Exercice : Minimum et maximum \\

let min = Math.min(7, 5, -12, 6, 32, 18, 14, -2)
console.log(min)

let max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35)
console.log(max)

let addition = max + min
console.log(addition)

// Exercice : Aléatoire 1 \\

let floatBateau = 10.4

let couleBateau = Math.floor(floatBateau)
console.log(couleBateau)

let voleBateau = Math.ceil(floatBateau);
console.log(voleBateau);

// Exercice : Aléatoire 2 \\

let random1 = Math.round(Math.random() * 50) + 50 // La valeur aléatoire entre 50 et 100
console.log(random1)

let random2 = Math.round(Math.random()) // La valeur aléatoire peut être seulement 0 ou 1
console.log(random2)

let random3 = Math.round(Math.random() * 10) // La valeur aléatoire peut aller de 0 à 10 inclu
console.log(random3)

// Exercice : Aléatoire 3 \\

let MK = ["Goro","Johnny Cago","Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"]
let numRandom = Math.floor(Math.random()*MK.length)
let FinishHim = MK[numRandom]
console.log(FinishHim)
