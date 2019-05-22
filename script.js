var turnOn = false;
localStorage.setItem("status", turnOn);
var status = localStorage.getItem("turnOn");

if (turnOn) {
  darkmode();
  document.getElementById("checkDark").checked = true;
}

function darkmode(id="") {
  var page = id.split('-')[0];
  if (turnOn) {
    // Dark Nav
    if (page == "home" || page == "about") {
      try {
        document.getElementById("home-w").id = "home-b";
        document.getElementById("about-w").id = "about-b";
        document.getElementById("photo-w").id = "photo-b";
        document.getElementById("darkmode-txt-w").id = "darkmode-txt-b";
        activeTab(page + '-b');
      } catch (error) { console.log(error); }
    }

    // Snaash reddit
    try {
      document.getElementById("reddit").src = "assets/snaash/reddit-dark.png";
    } catch (error) { console.log(error); }

    changeColor("black", "white");

    turnOn = false;
  } else {
    // Light Nav
    if (page == "home" || page == "about") {
      try {
        document.getElementById("home-b").id = "home-w";
        document.getElementById("about-b").id = "about-w";
        document.getElementById("photo-b").id = "photo-w";
        document.getElementById("darkmode-txt-b").id = "darkmode-txt-w";
        activeTab(id.split('-')[0] + '-w');
      } catch (error) { console.log(error); }
    }

    // Snaash reddit
    try {
      document.getElementById("reddit").src = "assets/snaash/reddit-light.png";
    } catch (error) { console.log(error); }

    changeColor("white", "black");
    
    turnOn = true;
  }
}

function changeColor(newColor, otherColor) {
  document.getElementById("body").style.backgroundColor = otherColor;

  // Change color of these elements
  const changeColor = document.querySelectorAll("\
  #body, #home-x, #about-x, #photo-x, #darkmode-txt-x, #description, #description-2, #link, #work-1, \
  #work-2, #email, #resume, #linkedin, #github, #instagram, #note");
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
      document.getElementById("heading-container").p.style.color = "black";
    } else {
      pbar.backgroundColor = "rgb(230,230,230)";
    }
  } catch (error) { console.log(error); }
}

function emailOver() {
  document.getElementById('email').innerHTML = "andrewjzhen@gmail.com";
}

function emailLeave() {
  document.getElementById('email').innerHTML = "Email";
}

function activeTab(id) {
  var color = (id.split('-')[1] == 'b') ? 'black' : 'white';
  document.getElementById(id).style.borderBottom = "0.1vw solid " + color;
}