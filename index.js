let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
canvas.style.border = "2px solid black";
let intervalID = 0;
let intervalBikeGen = 0;
let score = 0;
let constant = canvas.height - 300;
let bikes = [];
const music = new Audio("./amst.acc.mp3");
music.loop = true;
// bike coordinates: [{ x: 750, y: 620 }];//

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
person.src = "./img/tenor.gif";

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
  //ctx.drawImage(bike, 750, 620)//

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
  score = score + 1 / 10;
}

function bikeCollision(i) {
  const personBeginY = personY + person.height * 0.85;
  const personEndY = personY + person.height;
  const bikeBeginY = bikes[i].y + bike.height * 0.7;
  const bikeEndY = bikes[i].y + bike.height * 0.9;

  //   ctx.beginPath();
  //   ctx.lineWidth = "1";
  //   ctx.strokeStyle = "red";
  //   ctx.rect(bikes[i].x, bikeBeginY, bike.width, bikeEndY - bikeBeginY);
  //   ctx.stroke();

  //   ctx.beginPath();
  //   ctx.rect(personX, personBeginY, person.width, personEndY - personBeginY);
  //   ctx.stroke();

  if (
    //
    ((personX + person.width >= bikes[i].x &&
      personX + person.width <= bikes[i].x + bike.width) ||
      (personX < bikes[i].x + bike.width && personX > bikes[i].x)) &&
    ((personBeginY >= bikeBeginY && personBeginY <= bikeEndY) ||
      (personEndY >= bikeBeginY && personEndY <= bikeEndY))
  ) {
    gameOver();
    // alert (`GAME OVER! Your result is ${score.toFixed(0)}. Well done! :-)`);
    // location.reload();
  }
}

function startGame() {
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
      speed: (Math.random() + 1),
    });
  }, 3000);

  intervalID = setInterval(() => {
    requestAnimationFrame(draw);
  }, 10);
}
function gameOver() {
    let endScore = document.querySelector('span');
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
