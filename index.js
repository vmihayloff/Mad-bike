let canvas = document.querySelector ('canvas');
let ctx = canvas.getContext('2d');
canvas.style.border = '2px solid black';
let intervalID = 0;
let score = 0;
let constant = canvas.height - 300;
let bikes = [{x: 750, y: 620}];

let startButton = document.querySelector ('#start');
let splashScreen = document.querySelector ('#splashScreen');
let gameOverScreen = document.querySelector ('#gameOverScreen')

let backImage = document.createElement ('img');
backImage.src = 'images/amsterdam.pixel.png';
let streetImg = document.createElement ('img');
streetImg.src = 'images/street.png';
let bike = document.createElement ('img');
bike.src = 'images/bike.png';
let person = document.createElement ('img');
person.src = 'images/tenor.gif';

let isLeftArrow = false;
let isRightArrow = false;
let isUpArrow = false;
let isDownArrow = false;

let personX = 20;
let personY = 600;
let movePerson = 30;
let streetImgX = 0;
let streetImgY = canvas.height - streetImg.height;

document.addEventListener('keydown', (event) => {
    if (event.keyCode == 39 || event.key == "ArrowRight") {
        isRightArrow = true;
        isLeftArrow = false;
    }
    else if (event.keyCode == 37 || event.key == "ArrowLeft") {
        isRightArrow = false;
        isLeftArrow = true;
    }
    if (event.keyCode == 38 || event.key == "ArrowUp") {
        isUpArrow = true;
        isDownArrow = false;
    }
    else if (event.keyCode == 40 || event.key == "ArrowDown") {
        isUpArrow = false;
        isDownArrow = true;
    }
})

function draw (){
    ctx.drawImage(backImage, 0, 0)
    ctx.drawImage(streetImg, streetImgX, streetImgY)
    //ctx.drawImage(bike, 750, 620)//


    for (let i = 0; i < bikes.length; i++){
        ctx.drawImage(bike, bikes[i].x, bikes[i].y)
        bikes[i].x--
        bikeCollision(i)
        if (bikes[i].x + bike.width < 0) {
            bikes[i].x = canvas.width
        }
    }

    ctx.drawImage(person, personX, personY)

    ctx.font = '22px Sans Serif'
    ctx.fillText( 'Score: ' + score.toFixed(0), 10, 50)

    if (isRightArrow && (personX + movePerson < canvas.width - person.height)) { 
        personX += movePerson
    }
    else if (isLeftArrow && (personX > 0)) {
        personX -= movePerson
    }
    isRightArrow = 0;
    isLeftArrow = 0;

    if (isUpArrow && personY > 560) {
        personY -= movePerson
    }
    else if (isDownArrow && personY + movePerson < canvas.height - person.height) {
        personY += movePerson
    }
    isUpArrow = 0;
    isDownArrow = 0;
    score = score + 1 / 10;


}

function bikeCollision (i) {
    if (((personX + person.width >= bikes[i].x && personX + person.width <= bikes[i].x + bike.width) || 
    ( personX < bikes[i].x + bike.width && personX > bikes[i].x)) && 
    ((personY <= bikes[i].y + bike.height && personY >= bikes[i].y)|| 
    (bikes[i].y > personY && bikes[i].y < personY + person.height))){

        clearInterval (intervalID);
        gameOver()
        // alert (`GAME OVER! Your result is ${score.toFixed(0)}. Well done! :-)`);
        // location.reload();
    }
}

function startGame () {
    canvas.style.display = 'block'
    gameOverScreen.style.display = 'none'
    splashScreen.style.display = 'none'
    intervalID = setInterval (() => {
        requestAnimationFrame (draw)
    }, 10)
}
function gameOver () {
    canvas.style.display = 'none'
    startButton.style.display = 'block'
    gameOverScreen.style.display = 'flex'
}


window.addEventListener ('load', () => {
    canvas.style.display = 'none'
    gameOverScreen.style.display = 'none'

    startButton.addEventListener ('click', () => {
        startGame()
    })

})