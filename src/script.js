const dropdown = document.getElementsByClassName("dropdown")[0];
const services = document.getElementById("services");
const arrow = document.getElementsByClassName("arrow")[0];

function changeDisplay() {
    if(dropdown.classList.contains("dropdownShow")) {
        dropdown.classList.remove("dropdownShow");
    } else {
        dropdown.classList.add("dropdownShow");
    }
}

function overDisplay() {
    dropdown.classList.add("dropdownShow");
}

function defaultDisplay() {
    dropdown.classList.remove("dropdownShow");
}

function addListeners() {
    if(window.innerWidth <= 700) {
        arrow.addEventListener("click", changeDisplay);
    } else {
        services.addEventListener("mouseover", overDisplay);
        services.addEventListener("mouseout", defaultDisplay);
        dropdown.addEventListener("mouseover", overDisplay);
        dropdown.addEventListener("mouseout", defaultDisplay);
    }
}

addListeners();

window.addEventListener('resize', addListeners);



const backgroundImage = document.querySelectorAll(".backgroundImage");
let backgroundIndex = 0;

// function changeBackground() {
//     backgroundImage[backgroundIndex].classList.remove("show");

//     backgroundIndex++;

//     if(backgroundIndex >= backgroundImage.length) {
//         backgroundIndex = 0;
//     }

//     backgroundImage[backgroundIndex].classList.add("show");
// }

// setInterval(changeBackground, 6000);

// HAMBURBER
const hamburger = document.getElementsByClassName("hamburger")[0];
const links = document.getElementsByClassName('links')[0];
const bgLinks = document.getElementsByClassName("bg-links")[0];

function hamburgerMenu() {
    if (links.style.transform === "translateX(0px)" && bgLinks.style.transform === "translateX(0px)") {
        links.style.transform = "translateX(-500px)";
        bgLinks.style.transform = "translateX(-500px)";
    } else {
        links.style.transform = "translateX(0px)";
        bgLinks.style.transform = "translateX(0px)";
    }
}

hamburger.addEventListener("click", hamburgerMenu);
