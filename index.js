let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
canvas.style.border = "2px solid black";
let intervalID = 0;
let intervalBikeGen = 0;
let score = 0;
let bikes = [];

const music = new Audio("./amst.acc.mp3");
music.loop = true;
const bellMusic = new Audio("./bellring.flac");
let gameRunning = false;

let startButton = document.querySelector("#start");
let splashScreen = document.querySelector("#splashScreen");
let gameOverScreen = document.querySelector("#gameOverScreen");
let restartButton = document.querySelector("#restart");

let backImage = document.createElement("img");
backImage.src = "./img/amsterdam.pixel.png";
let streetImg = document.createElement("img");
streetImg.src = "./img/street.png";
let bike = document.createElement("img");
bike.src = "./img/bike.png";
let person = document.createElement("img");
person.src = "./img/person.png";

let isLeftArrow = false;
let isRightArrow = false;
let isUpArrow = false;
let isDownArrow = false;

let personX = 20;
let personY = 600;
let movePerson = 25;
let streetImgX = 0;
let streetImgY = canvas.height - streetImg.height;

document.addEventListener("keydown", (event) => {
  if (event.keyCode == 39 || event.key == "ArrowRight") {
    isRightArrow = true;
    isLeftArrow = false;
  } else if (event.keyCode == 37 || event.key == "ArrowLeft") {
    isRightArrow = false;
    isLeftArrow = true;
  }
  if (event.keyCode == 38 || event.key == "ArrowUp") {
    isUpArrow = true;
    isDownArrow = false;
  } else if (event.keyCode == 40 || event.key == "ArrowDown") {
    isUpArrow = false;
    isDownArrow = true;
  }
});

function draw() {
  ctx.drawImage(backImage, 0, 0);
  ctx.drawImage(streetImg, streetImgX, streetImgY);
  //   ctx.canvas.width  = window.innerWidth;
  //   ctx.canvas.height = window.innerHeight;

  for (let i = 0; i < bikes.length; i++) {
    ctx.drawImage(bike, bikes[i].x, bikes[i].y);
    bikes[i].x -= bikes[i].speed;
    bikeCollision(i);
    if (bikes[i].x + bike.width < 0) {
      bikes[i].x = canvas.width;
    }
  }

  ctx.drawImage(person, personX, personY);

  ctx.font = "22px Sans Serif";
  ctx.fillText("Score: " + score.toFixed(0), 10, 50);

  if (isRightArrow && personX + movePerson < canvas.width - person.height) {
    personX += movePerson;
  } else if (isLeftArrow && personX > 0) {
    personX -= movePerson;
  }
  isRightArrow = 0;
  isLeftArrow = 0;

  if (isUpArrow && personY > 560) {
    personY -= movePerson;
  } else if (
    isDownArrow &&
    personY + movePerson < canvas.height - person.height
  ) {
    personY += movePerson;
  }
  isUpArrow = 0;
  isDownArrow = 0;
  score = score + 1 / 60;
}

function bikeCollision(i) {
  const personBeginY = personY + person.height * 0.85;
  const personEndY = personY + person.height;
  const bikeBeginY = bikes[i].y + bike.height * 0.7;
  const bikeEndY = bikes[i].y + bike.height * 0.9;

  if (
    ((personX + person.width >= bikes[i].x &&
      personX + person.width <= bikes[i].x + bike.width) ||
      (personX < bikes[i].x + bike.width && personX > bikes[i].x)) &&
    ((personBeginY >= bikeBeginY && personBeginY <= bikeEndY) ||
      (personEndY >= bikeBeginY && personEndY <= bikeEndY))
  ) {
    bellMusic.play();
    if (gameRunning) {
      gameRunning = false;
      setTimeout(gameOver, 300);
    }
  }
}

function startGame() {
  gameRunning = true;
  personX = 20;
  personY = 600;
  bikes = [];
  score = 0;

  canvas.style.display = "block";
  gameOverScreen.style.display = "none";
  splashScreen.style.display = "none";
  music.play();

  intervalBikeGen = setInterval(() => {
    const randomNum = Math.random();
    const minNum = 540;
    bikes.push({
      x: canvas.width,
      y: minNum + randomNum * streetImg.height,
      speed: Math.random() + 1,
    });
  }, 3000);

  intervalID = setInterval(() => {
    requestAnimationFrame(draw);
  }, 10);
}
function gameOver() {
  let endScore = document.querySelector("span");
  endScore.innerHTML = score.toFixed(0);

  clearInterval(intervalID);
  clearInterval(intervalBikeGen);
  music.pause();
  music.currentTime = 0;

  canvas.style.display = "none";
  startButton.style.display = "block";
  gameOverScreen.style.display = "block";
}

window.addEventListener("load", () => {
  canvas.style.display = "none";
  gameOverScreen.style.display = "none";

  startButton.addEventListener("click", () => {
    startGame();
  });
  restartButton.addEventListener("click", () => {
    startGame();
  });
});
