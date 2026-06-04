function nextSlide(current, next) {
  document.getElementById(current).classList.remove("active");
  document.getElementById(next).classList.add("active");
}

function revealCamera() {
  document.getElementById("tapReveal").style.display = "none";
  document.getElementById("cameraReveal").style.display = "flex";
}

function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
