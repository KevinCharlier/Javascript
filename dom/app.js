// EXERCICE 1 : Manipulation de classes

// document.body.classList.remove('bg-aqua')
// document.body.classList.add('bg-olive') 
document.body.className = "bg-olive" // modifier les classes du body

document.getElementById("first-paragraph").className = "aqua" // modifier les classes de l'ID 'first-paragraph'

let bg_silver = document.getElementsByClassName("bg-silver")
for(i=0; i < bg_silver.length; i++){            // sélectionner tous les éléments qui ont la classe 'bg-silver'
    bg_silver[i].classList.add('bg-teal')
    bg_silver[i].classList.remove('bg-silver')
}

let blockquote = document.querySelectorAll("blockquote")
for(i=0; i < blockquote.length; i++){            // // sélectionner tous les éléments de type 'blockquote'
    blockquote[i].className = "bg-white"
}

// EXERCICE 2 : Selecteurs CSS 

document.querySelector("#my-table").classList.add('bg-purple') // ajout de la classe "bg-purple" à l'ID my-table

let p = document.querySelectorAll(".container p")
for(i=0; i < p.length; i++){            // // sélectionner tous les p qui sont dans la classe 'container'
    p[i].classList.add('shadow')
}

// EXERCICE 3

let pre = document.querySelectorAll("pre")
for(i=0; i < pre.length; i++){            // // sélectionner tous les éléments de type 'pre'
    pre[i].style.color = "white"
    pre[i].style.backgroundColor = "red"
    pre[i].style.borderTop = "3px solid black";
    pre[i].style.borderBottom = "3px solid yellow";
}

document.querySelector("h3").innerHTML = "<em>Italic title ! yeah !</em>" // remplace le contenu du 1er h3

document.querySelector("h2").innerHTML = "<strong>HTML doens't work !</strong>" // remplace le contenu du 1er h2

// EXERCICE 4

let ul = document.querySelector("ul") // Sélection du 1er ul
let li = document.createElement("li"); // Création d'un élément de type 'li'
li.innerHTML = "Mon meilleur ami est <a href=\"http://google.com/\" target=\"_blank\">Google</a>"; // remplace le contenu du li
ul.appendChild(li); // ajoute le li dans le ul

// EXERCICE 4 : Création et suppression de plusieurs éléments

let ol = document.querySelector("ol") // // Sélection du 1er ol
