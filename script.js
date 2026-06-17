const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

document.getElementById("startScreen")
.addEventListener("click", () => {

document.getElementById("startScreen").style.display = "none";

const music = document.getElementById("bgMusic");

if (music) {
music.play().catch(() => {});
}

});

function nextSlide() {

slides[currentSlide].classList.remove("active-slide");

currentSlide++;

if(currentSlide < slides.length){

slides[currentSlide]
.classList.add("active-slide");

}

}

async function startCamera(){

document.getElementById("beforeReveal")
.style.display = "none";

const video =
document.getElementById("video");

video.style.display = "block";

try{

const stream =
await navigator.mediaDevices.getUserMedia({
video:true
});

video.srcObject = stream;

}catch(err){

console.log(err);

}

setTimeout(() => {

document.getElementById("afterReveal")
.style.display = "block";

},1000);

}

function openPopup(){

document.getElementById("popup")
.style.display = "flex";

}

function closePopup(){

document.getElementById("popup")
.style.display = "none";

}
