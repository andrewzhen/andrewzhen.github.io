// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-102146073-1', 'auto');
ga('send', 'pageview');

//Start Up
window.onload = function() {
    var x = document.getElementById("btn1");
    refreshContent("Landscape" , "Portrait");
    x.style.fontWeight = "bold";
    x.style.color = "white";
    document.getElementById("topBtn").style.display = "none";
}

window.onscroll = function() { scrollFunction(); }

// Scroll to Top Functions
function scrollFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
}

//Social Media Modals
var weChatModal = document.getElementById('weChatModal'); 
var weChatBtn = document.getElementById("wechat");
var snapChatModal = document.getElementById('snapChatModal'); 
var snapChatBtn = document.getElementById("snapchat");
weChatBtn.onclick = function() { 
    weChatModal.style.display = "block";
    document.getElementById("topBtn").style.display = "none";
    disableScroll();
}
weChatModal.onclick = function() { 
    weChatModal.style.display = "none";
    document.getElementById("topBtn").style.display = "block";
    enableScroll();
}
snapChatBtn.onclick = function() { 
    snapChatModal.style.display = "block";
    document.getElementById("topBtn").style.display = "none";
    disableScroll();
}
snapChatModal.onclick = function() { 
    snapChatModal.style.display = "none";
    document.getElementById("topBtn").style.display = "block";
    enableScroll();
}

//Disable Scrolling for Modals
var keys = {37:1, 38:1, 39:1, 40:1};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}
function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

//Category Buttons
function focus1() {
    var x = document.getElementById("btn1");
    x.style.fontWeight = "bold";
    x.style.color = "white";
    x = document.getElementById("btn2");
    x.style = "";
}
function focus2() {
    var x = document.getElementById("btn1");
    x.style = "";
    x = document.getElementById("btn2");
    x.style.fontWeight = "bold";
    x.style.color = "white";
}
function refreshContent(show, hide1) {
    var toShow = document.getElementById(show);
    var toHide1 = document.getElementById(hide1); 
    toShow.style.display = "block";
    toHide1.style.display = "none";
}