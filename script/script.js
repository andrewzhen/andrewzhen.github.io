// GET FILE NAME FROM EITHER WWW OR LOCAL
if (window.location.pathname.split('/').length == 2) {
  var file = window.location.pathname.split('/')[1];
  file = file == "about" ? "about" : "home";
} else {
  var file = window.location.pathname.split('/')[7];
  file = file == "index.html" ? "home" : 'about';
}



// INITIALIZE TOGGLE OR CHANGE TO CURRENT MODE
if (sessionStorage.getItem('toggle') == null) {
  // * FALSE DEFAULTS TO LIGHT MODE, TRUE DEFAULTS TO DARK MODE
  // * CHANGE NAV ID TO "-b" FOR LIGHT MODE AND "-w" for DARK MODE
  sessionStorage.setItem("toggle", true);
}
if (sessionStorage.getItem('toggle') == "true") {
  darkMode();
} else {
  defaultMode();
}



// ACTIVE TAB
function activeTab(id, dark) {
  try {
    if (dark) {
      document.getElementById("checkDark").checked = true;
    } else {
      document.getElementById("checkDark").checked = false;
    }
    document.getElementById(id).style.color = "#8C8C8C";
  } catch (error) { console.log(error); }
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
  // Work pages
  try {
    document.getElementById("content-margins").style.background = "#f5f5f5";
  } catch (error) { console.log(error); }

  // NAV
  try {
    document.getElementById("home-w").id = "home-b";
    document.getElementById("about-w").id = "about-b";
    document.getElementById("photo-w").id = "photo-b";
    activeTab(file + "-b", false);
    document.getElementById("description").style.filter = "none";
    document.getElementById("description-2").style.filter = "none";
  } catch (error) { console.log(error); }

  // Snaash > Reddit image
  try {
    document.getElementById("reddit").src = "assets/snaash/reddit-dark.png";
  } catch (error) { console.log(error); }

  // Other Components
  changeColor("#171717", "#f5f5f5");

  // Toggle navigation  color
  activeTab(file + "-b", false);
}



// DARK MODE
function darkMode() {
  // Work pages
  try {
    document.getElementById("content-margins").style.background = "#171717";
  } catch (error) { console.log(error); }

  // NAV
  try {
    document.getElementById("home-b").id = "home-w";
    document.getElementById("about-b").id = "about-w";
    document.getElementById("photo-b").id = "photo-w";
    activeTab(file + "-w", true);
  } catch (error) { console.log(error); }

  // Snaash > Reddit image
  try {
    document.getElementById("reddit").src = "assets/snaash/reddit-light.png";
  } catch (error) { console.log(error); }

  // Other Components
  changeColor("#f5f5f5", "#171717");

  // Toggle navigation color
  activeTab(file + "-w", true);
} 



// CHANGE COLOR
function changeColor(newColor, otherColor) {
  document.getElementById("body").style.backgroundColor = otherColor;

  // Change color of these elements
  const changeColor = document.querySelectorAll("\
  #body, #home-x, #about-x, #photo-x, #darkmode-txt-x, #description, \
  #description-2, #title, #summary, #year, #about-txt, #link, #asgs, #dco, #its, \
  #caida, #email, #resume, #linkedin, #github, #instagram, #note");
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
      element.style.color = "#171717";
    }
  })
}



// CONTACT CHANGE
function contactChange(id, text) {
  document.getElementById(id).innerHTML = text;
}



// COPY TEXT
function copy(id, text) {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.getElementById(id).innerHTML = "Copied";
  document.body.removeChild(el);
}