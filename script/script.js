var work = {
  "development" : [
    {
      title: "CAIDA Internship",
      description: "A summer-long, UX development experience at The Center of Applied Internet Data Analysis at UC San Diego using Meteor.js."
    },
    {
      title: "Sun God Festival 2020",
      description: "Design and development of UC San Diego’s annual art and music festival website featuring past artists such as Drake and Kendrick Lamar."
    },
    {
      title: "Design Co – Join Our Team",
      description: "Development of Design Co’s recruiting page using React.js, aiming to encourage student designers join our team."
    },
    {
      title: "UCSD Census",
      description: "Design and development of a website to engage and inform the UC San Diego campus community of the importance of being counted."
    },
    {
      title: "Triton Fest Spring 2020",
      description: "Development of a linktree-style webpage used to increase social media engagement for UC San Diego’s after-hours event series."
    }
  ],

  "design" : [
    {
      title: "GrandAMA App Design",
      description: "Design and prototyping of an advice-giving platform, powered by the wisdom of elders."
    },
    {
      title: "Illustrations and Prototypes",
      description: "A collection of my personal design projects."
    },
    {
      title: "Digital Photography",
      description: "A gallery of my hobby-turned-money-making skill."
    }
  ]
}



// Variables
var active;
var body = document.getElementsByTagName("body")[0];
var windowWidth = window.innerWidth;



// Load events into DOM
window.onload = function() {
  loadWork(work.development, 0);
  loadWork(work.design, 1);

  let workTab = document.getElementById("work-tab");
  let aboutTab = document.getElementById("about-tab");
  let foot = document.getElementById("footer");
  let workGrid = document.getElementById("work-tab").children;

  let tab = document.getElementById("tab").children;
  if (window.innerWidth < 767) {
    tab[0].style.display = "block";
    tab[1].style.display = "block";
    tab[2].style.display = "none";
    workGrid[0].style.display = "block";
    workGrid[1].style.display = "none";
    tab[0].classList.add("active");
    foot.style.top = "63rem";
  } else {
    tab[0].style.display = "none";
    tab[1].style.display = "none";
    tab[2].style.display = "block";
    workGrid[0].style.display = "block";
    workGrid[1].style.display = "block";
    tab[2].classList.add("active");
    foot.style.top = "80rem";
  }
  tab[3].classList.remove("active");
  aboutTab.style.display = "none";
  workTab.style.display = "grid";

  for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function() {
      
      if (windowWidth < 767) {
        tab[0].style.display = "block";
        tab[1].style.display = "block";
        tab[2].style.display = "none";
        workGrid[0].style.display = "block";
        workGrid[1].style.display = "none";
        foot.style.top = "63rem";
        // Development
        if (i == 0) {
          tab[i].classList.toggle("active");
          tab[i + 1].classList.remove("active");
          tab[i + 3].classList.remove("active");
          aboutTab.style.display = "none";
          workTab.style.display = "grid";
          foot.style.top = "63rem";

          workGrid[0].style.display = "block";
          workGrid[1].style.display = "none";
        // Design
        } else if (i == 1) {
          tab[i - 1].classList.remove("active");
          tab[i].classList.toggle("active");
          tab[i + 2].classList.remove("active");
          aboutTab.style.display = "none";
          workTab.style.display = "grid";
          foot.style.top = "36rem";

          workGrid[0].style.display = "none";
          workGrid[1].style.display = "block";
        // About
        } else {
          tab[i - 3].classList.remove("active");
          tab[i - 2].classList.remove("active");
          tab[i].classList.toggle("active");
          workTab.style.display = "none";
          aboutTab.style.display = "grid";    
          foot.style.top = "5rem";
        }
      } else {
        
        tab[0].style.display = "none";
        tab[1].style.display = "none";
        tab[2].style.display = "block";
        workGrid[0].style.display = "block";
        workGrid[1].style.display = "block";
        
        // Work
        if (i == 2) {
          tab[i].classList.toggle("active");
          tab[i + 1].classList.remove("active");
          aboutTab.style.display = "none";
          workTab.style.display = "grid";
          foot.style.top = "80rem";

        // About
        } else {
          tab[i - 1].classList.remove("active");
          tab[i].classList.toggle("active");
          aboutTab.style.display = "grid";
          workTab.style.display = "none";
          foot.style.top = "10rem";
        }
      }
    })
  }

  window.addEventListener("resize", function() {
    if (window.width != windowWidth) {
      windowWidth = window.innerWidth;
      
      let tab = document.getElementById("tab").children;
      if (window.innerWidth < 767) {
        tab[0].style.display = "block";
        tab[1].style.display = "block";
        tab[2].style.display = "none";
        workGrid[0].style.display = "block";
        workGrid[1].style.display = "none";
        tab[0].classList.add("active");
        tab[1].classList.remove("active");
        foot.style.top = "63rem";
      } else {
        tab[0].style.display = "none";
        tab[1].style.display = "none";
        tab[2].style.display = "block";
        workGrid[0].style.display = "block";
        workGrid[1].style.display = "block";
        tab[2].classList.add("active");
        foot.style.top = "80rem";
      }
      tab[3].classList.remove("active");
      aboutTab.style.display = "none";
      workTab.style.display = "grid";
    }
  })


  const noise = () => {
    let canvas, ctx;
    let wWidth, wHeight;
    let noiseData = [];
    let frame = 0;
    let loopTimeout;

    // Create Noise
    const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
          buffer32[i] = 0xff000000;
        }
      }

      noiseData.push(idata);
    };

    // Play Noise
    const paintNoise = () => {
      if (frame === 9) {
        frame = 0;
      } else {
        frame++;
      }

      ctx.putImageData(noiseData[frame], 0, 0);
    };

    // Loop
    const loop = () => {
      paintNoise(frame);

      loopTimeout = window.setTimeout(() => {
        window.requestAnimationFrame(loop);
      }, (1000 / 25));
    };

    // Setup
    const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;

      canvas.width = wWidth;
      canvas.height = wHeight;

      for (let i = 0; i < 10; i++) {
        createNoise();
      }

      loop();
    };

    // Reset
    let resizeThrottle;
    const reset = () => {
      window.addEventListener('resize', () => {
        window.clearTimeout(resizeThrottle);

        resizeThrottle = window.setTimeout(() => {
          window.clearTimeout(loopTimeout);
          setup();
        }, 200);
      }, false);
    };

    // Init
    const init = (() => {
      canvas = document.getElementById('noise');
      ctx = canvas.getContext('2d');

      setup();
    })();
  };

  noise();
}



// Work container handler
handleContainer = (el, direction) => {
  if (direction == "translateY(0)") {
    body.style.overflow = "hidden";
    active = el;
    el.style.visibility = "visible";

  } else {
    body.style.overflow = "scroll";
    active = null;
    el.style.visibility = "hidden";
  }

  el.style.transform = direction;
  el.scrollTop = 0;
}



// Close work container with escape key
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    try {
      handleContainer(active, "translateY(100vh)");
    } catch (error) {}
  }
};



// Load Events and Add Event Listeners
loadWork = (lst, col) => {
  for (let i = 0; i < lst.length; i++) {
    let div = document.createElement("div");
    let span = document.createElement("span");
    let work_num = i + 1 < 10 ? "0" + (i + 1).toString() + "." : (i + 1).toString() + ".";
    let span_text = document.createTextNode(work_num);
    let div2 = document.createElement("div");
    let h3 = document.createElement("h3");
    let h3_text = document.createTextNode(lst[i].title);
    let p = document.createElement("p");
    let p_text = document.createTextNode(lst[i].description);
  
    let container = document.getElementById("work-pages").children[col].children[i];

    div.classList.add("work-item");
    span.classList.add("numerate");
    span.appendChild(span_text);
    h3.appendChild(h3_text);
    h3.addEventListener("click", function() {
      handleContainer(container, "translateY(0)");
    })
    p.appendChild(p_text);
    div2.appendChild(h3);
    div2.appendChild(p);
    div.appendChild(span);
    div.appendChild(div2);
    document.getElementById("work-tab").children[col].appendChild(div);

    // Close button
    container.children[0].children[0].addEventListener("click", function() {
      handleContainer(container, "translateY(100vh)");
    })
  }
}



// Expand cover image
// let imageTop = document.getElementById("dco-img").offsetTop;
// document.getElementsByClassName("work-container")[2].addEventListener("scroll", function() {
//   console.log(document.getElementById("dco-img").offsetTop, imageTop);

//   let img = document.getElementsByClassName("sticky-image")[2];

//   if (document.getElementById("dco-img").offsetTop - imageTop > 10) {
//     img.style.top = "0";
//     img.style.borderRadius = "0";
//     img.style.height = "100vh";

//     if (document.getElementById("content").style.width == "1300px") {
//       img.style.marginLeft = "calc((100vw - 1300px) / -2)";
//       img.style.width = "calc(45% + (100vw - 1300px) / 2)"; 
//     } else {
//       img.style.marginLeft = "calc((100vw - 75%) / -2)";
//       img.style.width = "calc(45% + (100vw - 75%) / 2)";
//     }
//   } else {
//     img.style.top = "5rem";
//     img.style.borderRadius = "10px";
//     img.style.marginLeft = "0";
//     img.style.width = "45%";
//     img.style.height = "80vh";
//   }
// })



// Show Dark Mode if Script Enabled
try {
  document.getElementById("darkmode").style.display = "block";
} catch (error) { console.log(error); }



// Set Initial Dark Mode Settings
if (sessionStorage.getItem('toggle') == null) {
  // * FALSE = LIGHT MODE, TRUE = DARK MODE
  sessionStorage.setItem("toggle", true);
}
if (sessionStorage.getItem('toggle') == "true") {
  darkMode();
} else {
  defaultMode();
}



// Toggle Dark Mode Button and SessionStorage
function toggle() {
  if (sessionStorage.getItem('toggle') == "false") {
    darkMode();
    sessionStorage.setItem('toggle', true);
  } else {
    defaultMode();
    sessionStorage.setItem('toggle', false);
  }
}



// Default Mode
function defaultMode() {
  document.getElementById("checkDark").checked = false;

  let lightColor = "#F7F7F8"
  document.getElementById("message").style.backgroundColor = lightColor;
  document.getElementsByClassName("details")[0].style.backgroundColor = lightColor;
  document.getElementById("noise").style.backgroundColor = "none";

  // Invert Logos
  try {
    document.getElementById("reddit").src = "assets/images/grandama/reddit-dark.png";
    document.getElementById("grandama").src = "assets/images/grandama/grandama-dark.png";
  } catch (error) { console.log(error); }

  // Other Components
  // changeColor("#171717", "#f5f5f5");
  changeColor("#171717", "#FFFFFF");
}



// Dark Mode
function darkMode() {
  document.getElementById("checkDark").checked = true;

  let darkColor = "#2B2B2B";
  document.getElementById("message").style.backgroundColor = darkColor;
  document.getElementsByClassName("details")[0].style.backgroundColor = darkColor;
  document.getElementById("noise").style.backgroundColor = "#FFFFFF";

  // Invert Logos
  try {
    document.getElementById("reddit").src = "assets/images/grandama/reddit-light.png";
    document.getElementById("grandama").src = "assets/images/grandama/grandama-light.png";
  } catch (error) { console.log(error); }

  // Other Components
  changeColor("#FFFFFF", "#171717");
} 



// Toggle Dark Mode Colors
function changeColor(newColor, otherColor) {
  body.style.backgroundColor = otherColor;

  // Tab active background color
  let tab = document.getElementById("tab").children;
  for (let x = 0; x < tab.length; x++) {
    tab[x].classList.toggle("dark");
  }

  // Work container background color
  let workPages = document.getElementById("work-pages").children;
  for (let col = 0; col < workPages.length; col++) {
    for (let row = 0; row < workPages[col].children.length; row++) {
      workPages[col].children[row].style.backgroundColor = otherColor;
    }
  }

  // Details background color
  let detailBg = document.getElementsByClassName("details");
  for (let j = 0; j < detailBg.length; j++) {
    detailBg[j].style.backgroundColor = body.style.backgroundColor == "rgb(23, 23, 23)" ? "#2B2B2B" : "#F7F7F8";
  }

  // Close button
  let close = document.getElementsByClassName("work-content");
  for (let k = 0; k < close.length; k++) {
    close[k].children[0].src = body.style.backgroundColor == "rgb(23, 23, 23)" ? "assets/images/done-white.svg" : "assets/images/done.svg";
  }
  
  // Title hover states
  let workItems = document.getElementsByClassName("work-item");
  for (let i = 0; i < workItems.length; i++) {
    let title = workItems[i].children[1].children[0];
    title.style.background = "linear-gradient(to right, " + newColor + " 50%, " + otherColor + " 50%)";
    title.style.backgroundSize = "260% 170%";
    title.style.backgroundPosition = "right bottom";
  }

  // Rewrite title hover state CSS
  let css = ".work-item div h3:hover { cursor: pointer; background-position: left bottom !important; color: " + otherColor + " ; }"
  let style = document.createElement("style");
  style.appendChild(document.createTextNode(css));
  document.getElementsByTagName("head")[0].appendChild(style);

  // Change color of these elements
  const changeColor = document.querySelectorAll("\
  #headline-text, #darkmode-txt, #content, #email, #resume, #linkedin, #github, #copyright");
  const changeColorList = [...changeColor];

  changeColorList.forEach(element => {
    element.style.color = newColor;
  })
}



// Contact Change
function contactChange(id, text) {
  document.getElementById(id).innerHTML = text;
}



// Copy Email Text
function copy(id, text) {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.getElementById(id).innerHTML = "Copied";
  document.body.removeChild(el);
}