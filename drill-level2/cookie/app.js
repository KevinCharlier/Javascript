let score = 0;

let add = () => {
  score = score + 1;
  document.getElementById("main").value = score;
  document.title = score + " Cookies";
};

let save = () => {
  localStorage.setItem("score", score);
};

let load = () => {
  score = localStorage.getItem("score");
  score = parseInt(score);
  document.getElementById("main").value = score;
  document.title = score + " Cookies";
  affichage.innerHTML = "Vous avez " + score + " cookies";
};

let affichageScore = () => {
  affichage.innerHTML = "Vous avez " + score + " cookies";
}

let multiply = document.getElementById("multiplier");
let autoclick = document.getElementById("autoclick");
let bonus = document.getElementById("bonus");

let multiplierCost = 20;
let autoclickCost = 200;
let bonusCost = 600;
let multiplier = 1;

multiply.disabled = true;
autoclick.disabled = true;
bonus.disabled = true;

let disabled = () => {
  if (score > 50) {
    multiply.disabled = false;
  }
  if (score > 500) {
    autoclick.disabled = false;
  }
  if (score > 5000) {
    bonus.disabled = false
  }
}

let affichageBoutons = () => {
  multiply.value = "Multiplier X" + multiplier + " | cost: " + multiplierCost;
  autoclick.value = "Autoclick | cost: " + autoclickCost;
  bonus.value = "Bonus | cost: " + bonusCost;
}

affichageBoutons()
disabled()