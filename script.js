var turnOn = false;
localStorage.setItem("status", turnOn);
var status = localStorage.getItem("turnOn");
var bg = document.getElementById("light-bg").style;
var loc = document.getElementById("home-location");

if (turnOn) {
  darkmode();
  document.getElementById("checkDark").checked = true;
}

function darkmode() {
  if (turnOn) {
    try {
      bg.filter = "grayscale(30%)";
      bg.backgroundImage = "url(assets/light-bg.jpg)";
      loc.innerHTML = "Mt Woodson Summit, San Diego";
    } catch (error) {
      console.log(error);
    }
    changeColor("black", "white");

    turnOn = false;
  } else {
    try {
      bg.filter = "grayscale(0%)";
      bg.backgroundImage = "url(assets/dark-bg.jpg)";
      loc.innerHTML = "Sunset Cliffs, San Diego";
    } catch (error) {
      console.log(error);
    }
    changeColor("white", "black");
    
    turnOn = true;
  }
}

function changeColor(newColor, otherColor) {
  document.getElementById("body").style.backgroundColor = otherColor;

  const elementsList = document.querySelectorAll("#body, #home, #name, #about, #photo, #description, #description-2, #work-1, #work-2, #movie-wiki, #home-location, #email, #resume, #linkedin, #github, #instagram");
  const elementsArray = [...elementsList];

  elementsArray.forEach(element => {
    element.style.color = newColor;
  })
}

function mo(id) {
  document.getElementById(id).style.color = "#9E9E9E";

  if (id == "email") {
    document.getElementById(id).innerHTML = "andrewjzhen@gmail.com";
  }
}

function ml(id) {
  if (document.getElementById("body").style.backgroundColor == "black") {
    document.getElementById(id).style.color = "white";
  } else {
    document.getElementById(id).style.color = "black";
  }

  if (id == "email") {
    document.getElementById(id).innerHTML = "Email";
  }
}