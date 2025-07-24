const o = document.getElementById("o");
const x = document.getElementById("x");
const boxs = document.querySelectorAll(".box");
const restart = document.getElementById("restart");

var currentPlayer = "x";
o.addEventListener("click", (e) => {
    e.preventDefault();
  o.classList.add("active");
  x.classList.remove("active");
    currentPlayer = "o";
});
x.addEventListener("click", (e) => {
    e.preventDefault();
  x.classList.add("active");
  o.classList.remove("active");
    currentPlayer = "x";
});

boxs.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPlayer === "x" && !box.classList.contains("x") && !box.classList.contains("o")) {
      box.classList.add("x");
      currentPlayer = "o";
      o.classList.add("active");
      x.classList.remove("active");
    }
    else if (currentPlayer === "o" && !box.classList.contains("x") && !box.classList.contains("o")) {
      box.classList.add("o");
      currentPlayer = "x";
      x.classList.add("active");
      o.classList.remove("active");
    }
    checkWinner();
  });
});
function checkWinner() {
    const winningCombinations = [
        ["box1", "box2", "box3"],
        ["box4", "box5", "box6"],
        ["box7", "box8", "box9"],
        ["box1", "box4", "box7"],
        ["box2", "box5", "box8"],
        ["box3", "box6", "box9"],
        ["box1", "box5", "box9"],
        ["box3", "box5", "box7"]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (document.getElementById(a).classList.contains("x") &&
            document.getElementById(b).classList.contains("x") &&
            document.getElementById(c).classList.contains("x")) {
            alert("Conguratulation Team X wins! 🎉\n restart if you guys wanna match more 😁🦾");
            resetGame();
            return;
        } else if (document.getElementById(a).classList.contains("o") &&
                   document.getElementById(b).classList.contains("o") &&
                   document.getElementById(c).classList.contains("o")) {
            alert("Conguratulation Team O wins! 🎉\n restart if you guys wanna match more 😁🦾");
            resetGame();
            return;
        }
    }
}