// my variables

const openMenu = document.querySelector(".headerIntro__nav--openMenu")
const closeBtn = document.querySelector(".headerIntro__nav--closeMenu");
const popUpMenu = document.querySelector(".headerIntro__navTwo")
const boxBack = document.querySelector(".headerIntro__nav--back");
const theBox = document.querySelector("#mobile-menu")
const myHTML = document.querySelector("html");

// adding eventListners to open and close mobile menu

      //open menu

openMenu.addEventListener(click, open);

      //close menu

closeBtn.addEventListener(click, close);      


//adding my functions 

function open(property) {

popUpMenu.style.visibility = "hidden";
}


function close (property) {

  popUpMenu.style.visibility = "visible";
}









