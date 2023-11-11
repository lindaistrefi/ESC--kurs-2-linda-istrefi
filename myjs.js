// declaring my variables 
const mainMenu = document.querySelector(".containerMob");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const myHTML = document.querySelector("html");
const myMain = document.querySelector("main");
const containerMob = document.querySelector(".containerMob");

// adding eventlistner for click-functions
openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// creating my functions for elements
function show() {
      mainMenu.style.display = "block";
      myHTML.style.overflow = "hidden";
      myMain.style.visibility = "hidden";
      containerMob.style.display = "absolute"; 
}

function close(){
      mainMenu.style.display = "none";
      myHTML.style.removeProperty("overflow");
      myMain.style.visibility ="visible";
}

