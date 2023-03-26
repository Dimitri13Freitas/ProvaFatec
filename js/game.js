const player = document.querySelector(".player");
const block = document.querySelector(".block");
const score = document.querySelector(".points");
const blockHeight = block.getBoundingClientRect().height;
const playerPosition = player.offsetLeft + 50;

let points = 0;

function animEnd() {
  player.classList.remove("pulo");
  console.log("ponto");
  points++;
  score.innerText = points;
}

function pulo({ keyCode }) {
  if (keyCode === 32 || keyCode === 38) {
    player.classList.add("pulo");
    player.addEventListener("animationend", animEnd);
  }
}

setInterval(() => {
  const blockPosition = block.offsetLeft;
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
