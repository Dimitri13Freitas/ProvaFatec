const player = document.querySelector(".player");
const block = document.querySelector(".block");
const score = document.querySelector(".points");
const highScore = document.querySelector(".high");
const rot = document.querySelector(".rot");

const blockHeight = block.getBoundingClientRect().height;
const playerPosition = player.offsetLeft + 50;

let blockPosition = null;
let points = 0;
let direction = 0;

window.onload = () => {
  if (window.localStorage.getItem("highScore")) {
    highScore.innerText = window.localStorage.getItem("highScore");
  }
};

function animEnd() {
  player.classList.remove("pulo");
  if (blockPosition <= playerPosition) {
    points++;
    direction++;
    if (direction === 5) {
      rot.classList.remove("rotateFour");
      rot.classList.add("rotateOne");
    } else if (direction === 10) {
      rot.classList.replace("rotateOne", "rotateTwo");
    } else if (direction === 15) {
      rot.classList.replace("rotateTwo", "rotateThree");
    } else if (direction === 20) {
      rot.classList.replace("rotateThree", "rotateFour");
      direction = 0;
    }
    score.innerText = points;
    if (points > window.localStorage.getItem("highScore"))
      window.localStorage.setItem("highScore", points);
  }
}

function pulo({ keyCode }) {
  if (keyCode === 32 || keyCode === 38) {
    player.classList.add("pulo");
    player.addEventListener("animationend", animEnd);
  }
}

setInterval(() => {
  blockPosition = block.offsetLeft;
  const playerY = +window.getComputedStyle(player).bottom.replace("px", "");
  if (
    blockPosition <= playerPosition &&
    playerY < blockHeight &&
    blockPosition > playerPosition - 50
  ) {
    block.style.animation = "none";
    player.style.animation = "none";
    block.style.left = `${player.getBoundingClientRect().left + 50}px`;
  }
}, 10);

window.addEventListener("keydown", pulo);
