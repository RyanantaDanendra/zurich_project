const dropdown = document.getElementsByClassName("dropdown")[0];
const services = document.getElementById("services");

function changeDisplay() {
    dropdown.classList.add("dropdownShow");
}

function defaultDisplay() {
    dropdown.classList.remove("dropdownShow");
}

services.addEventListener("mouseover", changeDisplay);
dropdown.addEventListener("mouseover", changeDisplay);
dropdown.addEventListener("mouseout", defaultDisplay);
services.addEventListener("mouseout", defaultDisplay);

const backgroundImage = document.querySelectorAll(".backgroundImage");
let backgroundIndex = 0;

function changeBackground() {
    backgroundImage[backgroundIndex].classList.remove("show");

    backgroundIndex++;

    if(backgroundIndex >= backgroundImage.length) {
        backgroundIndex = 0;
    }

    backgroundImage[backgroundIndex].classList.add("show");
}

setInterval(changeBackground, 6000);