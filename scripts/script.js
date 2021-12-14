// JavaScript Document
// Navigatie hamburger menu open en dicht
// de button element wordt gedeclareerd
var deButton = document.querySelector(".hamburger-menu");
//de functie toggleMenu wordt aangeroepen door een klik op de gedeclareerde button
deButton.addEventListener("click", toggleMenu);
//de functie toggleMenu wordt hiermee beschreven
function toggleMenu(event) {
  //het veranderende element wordt hier gedeclareerd
  deNav = document.querySelector("header nav span:nth-of-type(2)");
  // hiermee krijgt de de functie een toggle optie om de class aan en uit te zetten
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



//Functie reveal, wanneer de gebruiker scrollend de viewport binnenkomt wordt er een class toegevoegd aan de element of verwijderd.
function reveal(){
  //hiermee wordt de onderdeel geselecteerd, welk item er gerevealed moet worden.
  var reveals = document.querySelectorAll(".homepage section:nth-of-type(12) figure");
  
  for (var i = 0; i < reveals.length; i++){
    //windowHeight is de hoogte van de viewport
    var windowHeight = window.innerHeight;
    //elementTop is de afstand van de geselecteerde element vanaf bovenaan de viewport of de lengte dat er is gescrollt 
    var elementTop = reveals[i].getBoundingClientRect().top;
    //elementVisible is de hoogte wanneer het element wordt getoond aan de gebruiker
    var elementVisible = 150;
    //de if statement zorgt ervoor wanneer de class moet worden toegekend of moet worden verwijderd.
    if(elementTop < windowHeight - elementVisible){
      reveals[i].classList.add("active");
    }
    else{
      reveals[i].classList.remove("active");
    }
  }
}
//eventListener zorgt ervoor dat de gebruiker met de scroll beweging de functie activeert.
window.addEventListener("scroll", reveal);