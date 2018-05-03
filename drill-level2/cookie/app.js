let cookie = document.getElementById("cookie");
let clic = document.getElementById("clic");
let affichage = document.getElementById("affichage");
let multiply = document.getElementById("multiplier");
let autoclick = document.getElementById("autoclick");
let bonus = document.getElementById("bonus");

let score = 0;
let click = 1
let multiplierCost = 25;
const autoclickCost = 100;
let bonusCost = 250;
let multiplier = 1;

multiply.disabled = true;
autoclick.disabled = true;
bonus.disabled = true;

let add = () => {
  score = score + click
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
};

let affichageScore = () => {
  affichage.innerHTML = "Vous avez " + score + " cookies";
  document.title = score + " Cookies";
  if (score >= multiplierCost) {
    multiply.disabled = false;
  }
  if (score >= autoclickCost) {
    autoclick.disabled = false;
  }
  if (score >= bonusCost) {
    bonus.disabled = false;
  }
};

let affichageBoutons = () => {
  multiply.value = "Multiplier X" + multiplier + " | cost: " + multiplierCost;
  autoclick.value = "Autoclick | cost: " + autoclickCost;
  bonus.value = "Bonus | cost: " + bonusCost;
};

let disabled = () => {
  if (score < multiplierCost) {
    multiply.disabled = true;
  }
  if (score < autoclickCost) {
    autoclick.disabled = true;
  }
  if (score < bonusCost) {
    bonus.disabled = true;
  }
};

let multiplicateur = () => {
  score = score - multiplierCost;
  click++
  multiplier++
  multiplierCost = multiplierCost * multiplier;
  disabled();
};

let autoclicker = () => {
  score = score - autoclickCost;
  setInterval(time, 1000);
  disabled();
};

let upScore = () => {
  score = score - bonusCost;
  disabled();
};

let time = () => {
  score++
}

setInterval(affichageScore, 100)
setInterval(affichageBoutons, 100)