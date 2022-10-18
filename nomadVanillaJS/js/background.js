const images = [ "images/0.png", "images/1.png", "images/2.png",];

const randImg = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img"); 
bgImg.id="bg"
bgImg.src=randImg;

document.body.append(bgImg);