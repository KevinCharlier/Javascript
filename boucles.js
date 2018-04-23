// Exercice : Pair et impair 

for (let i=0;i<=10;i++){
    if ((i % 2) === 0){ //tant que le reste est égal à 0, i est pair
        alert(i + " est pair")
    }
    else {
        alert(i + " est impair")
    }
}

// Exercice : Multiplication Tables

for (let i=0;i<=10;i++){
    let res = i * 9
    alert(i + " * 9 = " + res)
}

// Exercice : assigner des grades

let res = ""
let grades = a => {
    if (a > 90){
        res = "A"
    }
    else if (a > 80 && a <= 90){
        res = "B"
    }
    else if (a > 70 && a <= 80){
        res = "C"
    }
    else if (a > 65 && a <= 70){
        res = "D"
    }
    else{
        res = "F"
    }
    console.log("Pour " + a + " points vous avez le grade " + res)
}

for (let i=0;i<=100;i++){
    console.log(grades(i))
}

// Exercice : pyramide
let res = ""
for (let i=1;i<=5;i++){
    res += "*"
    console.log(res)
}