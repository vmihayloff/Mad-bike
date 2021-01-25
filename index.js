let canvas = document.querySelector ('canvas');
let ctx = canvas.getContext('2d');
canvas.style.border = '2px solid black';
let intervalID = 0;
let backImage = document.createElement ('img');
backImage.src = '/Images/amsterdam.pixel.png';
let streetImg = document.createElement ('img');
streetImg.src = '/Images/street.png';
let bike = document.createElement ('img');
bike.src = '/Images/bike.png';
let person = document.createElement ('img');
person.src = '/Images/tenor.gif';


function draw (){
    ctx.drawImage(backImage, 0, 0)
    ctx.drawImage(streetImg, 0, canvas.height - streetImg.height)
    ctx.drawImage(bike, 750, 620)
    ctx.drawImage(person, 20, 600)
}




intervalID = setInterval(() => {
    requestAnimationFrame (draw)
}, 100)
