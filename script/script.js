var work = {
  "development" : [
    {
      title: "CAIDA Internship",
      description: "A summer-long, UX development experience at The Center of Applied Internet Data Analysis at UC San Diego using Meteor.js.",
      url: "caida"
    },
    {
      title: "Sun God Festival 2020",
      description: "Design and development of UC San Diego’s annual art and music festival website featuring past artists such as Drake and Kendrick Lamar.",
      url: "sgf"
    },
    {
      title: "Design Co – Join Our Team",
      description: "Development of Design Co’s recruiting page using React.js, aiming to encourage student designers join our team.",
      url: "designco"
    },
    {
      title: "UCSD Census",
      description: "Design and development of a website to engage and inform the UC San Diego campus community of the importance of being counted.",
      url: "census"
    },
    {
      title: "Triton Fest Spring 2020",
      description: "Development of a linktree-style webpage used to increase social media engagement for UC San Diego’s after-hours event series.",
      url: "tritonfest"
    }
  ],

  "design" : [
    {
      title: "GrandAMA App Design",
      description: "Design and prototyping of an advice-giving platform, powered by the wisdom of elders.",
      url: "grandama"
    },
    {
      title: "Illustrations and Prototypes",
      description: "A collection of my personal design projects.",
      url: "illustrations-prototypes"
    },
    {
      title: "Digital Photography",
      description: "A gallery of my hobby-turned-money-making skill.",
      url: "photography"
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
  let workGrid = document.getElementById("work-tab").children;

  let tab = document.getElementById("tab").children;
  if (window.innerWidth < 767) {
    tab[0].style.display = "block";
    tab[0].classList.add("active");
    tab[1].style.display = "block";
    tab[2].style.display = "none";
    tab[2].classList.add("active");
    workGrid[0].style.display = "block";
    workGrid[1].style.display = "none";
  } else {
    tab[0].style.display = "none";
    tab[0].classList.add("active");
    tab[1].style.display = "none";
    tab[2].style.display = "block";
    workGrid[0].style.display = "block";
    workGrid[1].style.display = "block";
  }
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

        // Development
        if (i == 0) {
          tab[i].classList.add("active");
          tab[i + 1].classList.remove("active");
          tab[i + 2].classList.add("active");
          tab[i + 3].classList.remove("active");
          aboutTab.style.display = "none";
          workTab.style.display = "grid";

          workGrid[0].style.display = "block";
          workGrid[1].style.display = "none";
        // Design
        } else if (i == 1) {
          tab[i - 1].classList.remove("active");
          tab[i].classList.add("active");
          tab[i + 1].classList.add("active");
          tab[i + 2].classList.remove("active");
          aboutTab.style.display = "none";
          workTab.style.display = "grid";

          workGrid[0].style.display = "none";
          workGrid[1].style.display = "block";
        // About
        } else {
          tab[i - 3].classList.remove("active");
          tab[i - 2].classList.remove("active");
          tab[i - 1].classList.remove("active");
          tab[i].classList.add("active");
          workTab.style.display = "none";
          aboutTab.style.display = "grid";    
        }
      } else {
        tab[0].style.display = "none";
        tab[1].style.display = "none";
        tab[2].style.display = "block";
        workGrid[0].style.display = "block";
        workGrid[1].style.display = "block";
        
        // Work
        if (i == 2) {
          tab[i - 2].classList.add("active");
          tab[i - 1].classList.remove("active");
          tab[i].classList.add("active");
          tab[i + 1].classList.remove("active");
          aboutTab.style.display = "none";
          workTab.style.display = "grid";

        // About
        } else {
          tab[i - 3].classList.remove("active");
          tab[i - 2].classList.remove("active");
          tab[i - 1].classList.remove("active");
          tab[i].classList.add("active");
          aboutTab.style.display = "grid";
          workTab.style.display = "none";
        }
      }
    })
  }

  window.addEventListener("resize", function() {
    if (window.innerWidth !== windowWidth) {
      windowWidth = window.innerWidth;
      
      let tab = document.getElementById("tab").children;
      if (windowWidth < 767) {
        tab[0].style.display = "block";
        tab[1].style.display = "block";
        tab[2].style.display = "none";
        workGrid[0].style.display = "block";
        workGrid[1].style.display = "none";
      } else {
        tab[0].style.display = "none";
        tab[1].style.display = "none";
        tab[2].style.display = "block";
        workGrid[0].style.display = "block";
        workGrid[1].style.display = "block";
      }
    }
  });

  window.addEventListener('popstate', function() {
    let url = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
    let project_length = work.development.length + work.design.length;
    for (let i = 0; i < project_length; i++) {
      let project = document.getElementsByClassName("work-item")[i].children[1].children[0];
      if (url == project.innerText) {
        console.log(document.getElementsByClassName("work-item")[i].children[1].children[0]);
        document.getElementsByClassName("work-item")[i].children[1].children[0].dispatchEvent('click');
      }
    }
    handleContainer(active, "translateY(100vh)");
  });


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

  // Open about tab
  document.getElementById("me").addEventListener("click", function() {
    document.getElementById("tab").scrollIntoView();
    document.getElementById("tab").children[3].dispatchEvent(new Event("click"));
  });
}

window.addEventListener("load", function(e) {
  document.body.classList.remove("fade");
});


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
    history.pushState(null, null, "/");
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
      history.pushState(null, null, lst[i].url);
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