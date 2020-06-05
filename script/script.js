var work = {
  "development" : [
    // {
    //   title: "CAIDA Internship",
    //   description: 
    //     "A summer-long, UX development experience at The Center of \
    //     Applied Internet Data Analysis at UC San Diego using Meteor.js.",
    //   url: "caida"
    // },
    {
      title: "Design Co – Level Up",
      description: 
        "Web development of Design Co's 10-week design program that provides \
        students with the opportunity to tackle a real-world challenge.",
      url: "levelup"
    },
    {
      title: "Sun God Festival 2020",
      description: 
        "Web design and development of UC San Diego’s annual art and music \
        festival featuring past artists such as Drake and Kendrick Lamar.",
      url: "sun-god-festival"
    },
    {
      title: "Design Co – Join Our Team",
      description: 
        "Web development of Design Co’s recruiting intitative using React.js, \
        aiming to encourage student designers to join our leadership team.",
      url: "joinourteam"
    },
    {
      title: "Triton Fest – Good Clean Fun",
      description: 
        "Web development of a linktree-style resource page to increase \
        social media engagement for UC San Diego’s after-hours event series.",
      url: "triton-fest"
    },
    {
      title: "A.S. Concerts & Events",
      description: 
        "Web development of UC San Diego's student programming board \
        responsible for some of the longest standing campus traditions.",
      url: "asce"
    }
  ],

  "design" : [
    {
      title: "GrandAMA App Design",
      description: 
        "Design and prototyping of an advice-giving mobile application to \
        help bridge the gap between generations. Powered by the wisdom of \
        elders.",
      url: "grandama"
    },
    {
      title: "Illustrations and Prototypes",
      description: 
        "A collection of my personal design projects, ranging from line \
        animation to full-stack web development.",
      url: "illustrations-prototypes"
    },
    {
      title: "Digital Photography",
      description: 
        "A portfolio of my photography work. Responsibilities include \
        location-scouting, logistics planning, and photo editing.",
      url: "photography"
    }
  ]
}



// Variables
var active;
var activeTab = 0;
var body = document.getElementsByTagName("body")[0];
var workTab = document.getElementById("work-tab");
var aboutTab = document.getElementById("about-tab");
var workGrid = document.getElementById("work-tab").children;
var tab = document.getElementById("tab").children;
var scrollPos;



// Noise
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


resizeTabs = () => {
  if (window.innerWidth <= 767) {
    tab[0].style.display = "block";
    tab[1].style.display = "block";
    tab[2].style.display = "none";
    
    if (activeTab == 0) {
      workGrid[0].style.display = "block";
      workGrid[1].style.display = "none";
    }
  
    if (activeTab == 1) {
      workGrid[0].style.display = "none";
      workGrid[1].style.display = "block";
    }
  }
  
  if (window.innerWidth > 767) {
    tab[0].style.display = "none";
    tab[1].style.display = "none";
    tab[2].style.display = "block";
    workGrid[0].style.display = "block";
    workGrid[1].style.display = "block";
  }
}



toggleTab = tabIndex => {
  // Show Work tab by default
  workTab.style.display = "grid";
  aboutTab.style.display = "none";

  if (tabIndex == 0 || tabIndex == 2) {
    // Activate both Development and Work tabs

    if (tabIndex == 0 && window.innerWidth <= 767) {
      // Toggle Development tab if on mobile
      workGrid[0].style.display = "block";
      workGrid[1].style.display = "none";
    }
    tab[0].classList.add("active");
    tab[1].classList.remove("active");
    tab[2].classList.add("active");
    tab[3].classList.remove("active");

  } else if (tabIndex == 1) {
    // Display Design tab
    tab[0].classList.remove("active");
    tab[1].classList.add("active");
    tab[2].classList.add("active");
    tab[3].classList.remove("active");
    workGrid[0].style.display = "none";
    workGrid[1].style.display = "block";

  } else if (tabIndex == 3) {
    // Display About tab
    tab[0].classList.remove("active");
    tab[1].classList.remove("active");
    tab[2].classList.remove("active");
    tab[3].classList.add("active");
    workTab.style.display = "none";
    aboutTab.style.display = "grid";
  }
}



initializeTabs = () => {
  for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function() {
      activeTab = i;
      toggleTab(i);
    });
  }

  // Open about tab
  document.getElementById("me").addEventListener("click", function() {
    document.getElementById("tab").scrollIntoView({ behavior: "smooth" });
    document.getElementById("tab").children[3].dispatchEvent(new Event("click"));
  });
}



// Load events into DOM
window.onload = function() {
  loadWork(work.development, 0);
  loadWork(work.design, 1);
  resizeTabs();
  toggleTab(0)
  initializeTabs();

  window.addEventListener("resize", function() {
    resizeTabs();
  });

  window.addEventListener('popstate', function(e) {
    let url = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
    let project_length = work.development.length + work.design.length;
    for (let i = 0; i < project_length; i++) {
      let project = i < work.development.length ? work.development[i] : work.design[i] - work.development.length;
      if (url == project.url) {
        try {
          $('.work-nav')[0].dispatchEvent('click');
        } catch (error) {
          console.log("No forward history");
        }
      }
    }
    handleContainer(active, "translateX(100vw)");
  });
}



// Fade window on load
window.addEventListener("load", function(e) {
  document.body.classList.remove("fade");
});



// Work container handler
handleContainer = (el, direction) => {
  if (active != "home") {
    $('.work-container').css({ transform: 'translateX(100vw)' });
  
    setTimeout(function() {
      $('#container').remove();
      $('#content').load('index.html #container', function() {
        active = "home";
        loadWork(work.development, 0);
        loadWork(work.design, 1);
        
        // Re-initialize variables
        workTab = document.getElementById("work-tab");
        aboutTab = document.getElementById("about-tab");
        workGrid = document.getElementById("work-tab").children;
        tab = document.getElementById("tab").children;

        // Don't change order
        toggleTab(activeTab);
        resizeTabs();
        initializeTabs();
        document.documentElement.scrollTop = document.body.scrollTop = scrollPos;
      });
    }, 300);
  }
}



// Close work container with escape key
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    handleContainer(active, "translateX(100vw)");
    history.back();
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
    let a = document.createElement("a");
    let h3_text = document.createTextNode(lst[i].title);
    let p = document.createElement("p");
    let p_text = document.createTextNode(lst[i].description);

    div.classList.add("work-item");
    span.classList.add("numerate");
    span.appendChild(span_text);
    a.href = lst[i].url + ".html";
    a.addEventListener("click", function(e) {
      // Update scroll position
      scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      e.preventDefault();
      $('#container').remove();
      $('#content').load(this.href + ' #container', function() {
        setTimeout(function() {
          active = $('#container');
          $('.work-container').css({ transform: 'translateX(0)' });
        }, 10);

        // Close container
        $('.work-nav')[0].addEventListener('click', function() {
          handleContainer(active, 'translateX(100vw)');
          history.back();
        });
      });
      history.pushState(null, null, lst[i].url);
    });

    a.appendChild(h3_text);
    h3.appendChild(a);
    p.appendChild(p_text);
    div2.appendChild(h3);
    div2.appendChild(p);
    div.appendChild(span);
    div.appendChild(div2);
    document.getElementById("work-tab").children[col].appendChild(div);
  }
}



contactChange = (id, text) => {
  document.getElementById(id).innerHTML = text;
}



copy = (id, text) => {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.getElementById(id).innerHTML = "Copied";
  document.body.removeChild(el);
}