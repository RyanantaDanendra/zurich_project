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

// HAMBURBER
const hamburger = document.getElementsByClassName("hamburger")[0];
const links = document.getElementsByClassName('links')[0];
const bgLinks = document.getElementsByClassName("bg-links")[0];

function hamburgerMenu() {
    if(links.style.transform === "translateX(0)" && bgLinks.style.transform === "translateX(0)") {
        links.style.transform = "translateX(-500px)";
        bgLinks.style.transform = "translateX(-500px)";
    } else {
        links.style.transform = "translateX(0%)";
        bgLinks.style.transform = "translateX(0%)";

    }
}

hamburger.addEventListener("click", hamburgerMenu);