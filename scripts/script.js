// JavaScript Document
// Navigatie hamburger menu open en dicht
var deButton = document.querySelector(".hamburger-menu");
console.log(deButton)

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = document.querySelector("header nav span:nth-of-type(2)");
  deNav.classList.toggle("toonMenu");
}

//Making a background image scroll slower than everything else
document.querySelector("body").onscroll = function myFunction(){
  var scrolltotop = document.scrollingElement.scrollTop;
  var target = document.querySelector(".homepage section:first-of-type");
  var xvalue = "center";
  var factor = 0.5;
  var yvalue = scrolltotop * factor;
  target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}