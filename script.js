var turnOn = false;
localStorage.setItem("status", turnOn);
var status = localStorage.getItem("turnOn");

if (turnOn) {
  darkmode();
  document.getElementById("checkDark").checked = true;
}

function darkmode() {
  if (turnOn) {
    // Landing image
    try {
      var bg = document.getElementById("light-bg").style;
      bg.filter = "grayscale(30%)";
      bg.backgroundImage = "url(assets/light-bg.jpg)";
    } catch (error) {
      console.log(error);
    }

    // Snaash reddit
    try {
      document.getElementById("reddit").src = "assets/snaash/reddit-dark.png";
    } catch (error) {
      console.log(error);
    }

    changeColor("black", "white");

    turnOn = false;
  } else {
    // Landing image
    try {
      var bg = document.getElementById("light-bg").style;
      bg.filter = "grayscale(0%)";
      bg.backgroundImage = "url(assets/dark-bg.jpg)";
    } catch (error) {
      console.log(error);
    }

    // Snaash reddit
    try {
      document.getElementById("reddit").src = "assets/snaash/reddit-light.png";
    } catch (error) {
      console.log(error);
    }

    changeColor("white", "black");
    
    turnOn = true;
  }
}

function changeColor(newColor, otherColor) {
  document.getElementById("body").style.backgroundColor = otherColor;

  // Change color of these elements
  const changeColor = document.querySelectorAll("\
  #body, #home, #name, #about, #photo, #description, #description-2, #work-1, \
  #work-2, #movie-wiki, #email, #resume, #linkedin, #github, #instagram");
  const changeColorList = [...changeColor];

  changeColorList.forEach(element => {
    element.style.color = newColor;
  })

  // Don't change color of these elements
  const sameColor = document.querySelectorAll("\
  #work-title, #work-header, #work-value, #logo-caption");
  const sameColorList = [...sameColor];

  sameColorList.forEach(element => {
    if (element != "longterm-title" && element != "longterm-description") {
      element.style.color = "black";
    }
  })

  try {
    var pbar = document.getElementById("parallax-bar").style;

    if (newColor == "white") {
      pbar.backgroundColor = "rgb(30,30,30)";
      document.getElementById("name-div").style.borderLeft = "0.3vw dotted white";
      document.getElementById("heading-container").p.style.color = "black";
    } else {
      pbar.backgroundColor = "rgb(230,230,230)";
      document.getElementById("name-div").style.borderLeft = "0.3vw dotted black";
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