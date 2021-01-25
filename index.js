let canvas = document.querySelector ('canvas');
let ctx = canvas.getContext('2d');
canvas.style.border = '2px solid black';
let intervalID = 0;
let score = 0;
let constant = canvas.height - 300;
let bikes = [{x: 750, y: 620}];

let backImage = document.createElement ('img');
backImage.src = '/Images/amsterdam.pixel.png';
let streetImg = document.createElement ('img');
streetImg.src = '/Images/street.png';
let bike = document.createElement ('img');
bike.src = '/Images/bike.png';
let person = document.createElement ('img');
person.src = '/Images/tenor.gif';

let isLeftArrow = false;
let isRightArrow = false;
let isUpArrow = false;
let isDownArrow = false;

let personX = 20;
let personY = 600;
let movePerson = 40;


document.addEventListener('keydown', (event) => {
    if (event.keyCode == 39 || event.key == "ArrowRight") {
        isRightArrow = true;
        isLeftArrow = false;
    }
    else if (event.keyCode == 37 || event.key == "ArrowLeft") {
        isRightArrow = false;
        isLeftArrow = true;
    }
})

document.addEventListener('keydown', (event) => {
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
    ctx.drawImage(streetImg, 0, canvas.height - streetImg.height)
    ctx.drawImage(bike, 750, 620)
    ctx.drawImage(person, personX, personY)

    // for (let i = 0; i < bikes.length; i++){
    //     ctx.drawImage(bike, bikes[i].x, bikes[i].y)
    //     ctx.drawImage(person, bikes[i].x, bikes[i].y + constant)
    //     bikes[i].x--
    // }
    ctx.font = '22px Sans Serif'
    ctx.fillText( 'Score: ' + score, 10, 50)

    if (isRightArrow) {
        personX += movePerson
    }
    else if (isLeftArrow) {
        personX -= movePerson
    }
    isRightArrow = 0;
    isLeftArrow = 0;

    if (isUpArrow) {
        personY -= movePerson
    }
    else if (isDownArrow) {
        personY += movePerson
    }
    isUpArrow = 0;
    isDownArrow = 0;
}




intervalID = setInterval(() => {
    requestAnimationFrame (draw)
}, 100)
