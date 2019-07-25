// Start Up
window.onload = function() {
  document.getElementById("topBtn").style.display = "none";
}
window.onscroll = function() { 
  scrollFunction(); 
}

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