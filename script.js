var turnOn = false;
localStorage.setItem("status", turnOn);
var status = localStorage.getItem("turnOn");

if (turnOn) {
  darkmode();
  document.getElementById("checkDark").checked = true;
}

function darkmode() {
  if (turnOn) {
    try {
      var bg = document.getElementById("light-bg").style;
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
      var bg = document.getElementById("light-bg").style;
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

  const elementsList = document.querySelectorAll("#body, #home, #name, #about, #photo, #description, #description-2, #work-1, #work-2, #movie-wiki, #email, #resume, #linkedin, #github, #instagram");
  const elementsArray = [...elementsList];

  elementsArray.forEach(element => {
    element.style.color = newColor;
  })

  try {
    var pbar = document.getElementById("parallax-bar").style;

    if (newColor == "white") {
      document.getElementById("parallax-bar").style.backgroundColor = "rgb(30,30,30)";
    } else {
      document.getElementById("parallax-bar").style.backgroundColor = "rgb(230,230,230)";
    }
  } catch (error) {
    console.log(error)
  }
}

function mo(id) {
  if (document.getElementById("body").style.backgroundColor == "black") {
    document.getElementById(id).style.color = "#BDBDBD";
    if (id == "email") {
      document.getElementById(id).innerHTML = "andrewjzhen@gmail.com";
      document.getElementById("email").style.color = "white";
    }
  } else {
    document.getElementById(id).style.color = "#616161";
    if (id == "email") {
      document.getElementById(id).innerHTML = "andrewjzhen@gmail.com";
      document.getElementById("email").style.color = "black";
    }
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