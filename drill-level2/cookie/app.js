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


