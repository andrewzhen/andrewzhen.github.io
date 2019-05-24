// GET FILE NAME
if (window.location.pathname.split('/').length == 2) {
  var file = window.location.pathname.split('/')[1];
  file = file == "about" ? "about" : "home";
} else {
  var file = window.location.pathname.split('/')[6];
  file = file == "index.html" ? "home" : 'about';
}

// CHANGE FILE TO CURRENT MODE
if (sessionStorage.getItem('toggle') == null) {
  sessionStorage.setItem("toggle", false);
  activeTab(file + "-b", false);
} else {
  if (sessionStorage.getItem('toggle') == "true") {
    darkMode(file + "-w");
    activeTab(file + "-w", true);
    document.getElementById("checkDark").checked = true;
  } else {
    defaultMode(file + "-b");
    activeTab(file + "-b", false);
    document.getElementById("checkDark").checked = false;
  }
}



// ACTIVE TAB
function activeTab(id, dark) {
  if (id.split('-')[0] == "home" || id.split('-')[0] == "about") {
    if (dark) {
      document.getElementById("checkDark").checked = true;
      document.getElementById(id).style.borderBottom = "0.1vw solid white"; 
    } else {
      document.getElementById("checkDark").checked = false;
      document.getElementById(id).style.borderBottom = "0.1vw solid black";
    }
  }
}



// TOGGLE
function toggle() {
  if (sessionStorage.getItem('toggle') == "false") {
    darkMode();
    sessionStorage.setItem('toggle', true);
    document.getElementById("checkDark").checked = true;
  } else {
    defaultMode();
    sessionStorage.setItem('toggle', false);
    document.getElementById("checkDark").checked = false;
  }
}



// DEFAULT MODE
function defaultMode() {
  // NAV
  try {
    document.getElementById("home-w").id = "home-b";
    document.getElementById("about-w").id = "about-b";
    document.getElementById("photo-w").id = "photo-b";
    document.getElementById("darkmode-txt-w").id = "darkmode-txt-b";
    activeTab(file + "-b", false);
  } catch (error) { console.log(error); }

  // Snaash > Reddit image
  try {
    document.getElementById("reddit").src = "assets/snaash/reddit-dark.png";
  } catch (error) { console.log(error); }

  // Other Components
  changeColor("black", "white");
}



// DARK MODE
function darkMode() {
  // NAV
  try {
    document.getElementById("home-b").id = "home-w";
    document.getElementById("about-b").id = "about-w";
    document.getElementById("photo-b").id = "photo-w";
    document.getElementById("darkmode-txt-b").id = "darkmode-txt-w";
    activeTab(file + "-w", true);
  } catch (error) { console.log(error); }

  // Snaash > Reddit image
  try {
    document.getElementById("reddit").src = "assets/snaash/reddit-light.png";
  } catch (error) { console.log(error); }

  // Other Components
  changeColor("white", "black");
} 



// CHANGE COLOR
function changeColor(newColor, otherColor) {
  document.getElementById("body").style.backgroundColor = otherColor;

  // Change color of these elements
  const changeColor = document.querySelectorAll("\
  #body, #home-x, #about-x, #photo-x, #darkmode-txt-x, #description, \
  #description-2, #title, #summary, #year, #about-txt, #movie-txt, #link, \
  #work-1, #work-2, #email, #resume, #linkedin, #github, #instagram, #note");
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
}



// EMAIL OVER
function emailOver() {
  document.getElementById('email').innerHTML = "andrewjzhen@gmail.com";
}

// EMAIL LEAVE
function emailLeave() {
  document.getElementById('email').innerHTML = "Email";
}