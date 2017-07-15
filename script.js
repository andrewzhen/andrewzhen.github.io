// google-analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-102146073-1', 'auto');
ga('send', 'pageview');

// start up
window.onload = function() {
    var x = document.getElementById("btn1");
    refreshContent("Landscape" , "Architecture", "Events", "Everyday");
	
    x.style.fontSize = "2vw";
    x.style.borderTopColor = "white";
}

// social media modal
var weChatModal = document.getElementById('weChatModal'); var weChatBtn = document.getElementById("weChat");
var snapChatModal = document.getElementById('snapChatModal'); var snapChatBtn = document.getElementById("snapChat");

weChatBtn.onclick = function() { weChatModal.style.display = "block";}

snapChatBtn.onclick = function() { snapChatModal.style.display = "block";}

snapChatSpan.onclick = function() { snapChatModal.style.display = "none";}

weChatSpan.onclick = function() { weChatModal.style.display = "none";}

function focus1() {
    var x = document.getElementById("btn1");
    x.style.fontSize = "2vw";
    x.style.borderTopColor = "white";

    x = document.getElementById("btn2");
    x.style.fontSize = "";           
    x.style.borderTopColor = "";    

    x = document.getElementById("btn3");
    x.style.fontSize = "";           
    x.style.borderTopColor = "";    

    x = document.getElementById("btn4");
    x.style.fontSize = "";  
    x.style.borderTopColor = "";      
}

function focus2() {
    var x = document.getElementById("btn1");
    x.style.fontSize = ""; 
    x.style.borderTopColor = "";           

    x = document.getElementById("btn2");
    x.style.fontSize = "2vw";           
    x.style.borderTopColor = "white";

    x = document.getElementById("btn3");
    x.style.fontSize = ""; 
    x.style.borderTopColor = "";   

    x = document.getElementById("btn4");
    x.style.fontSize = "";  
    x.style.borderTopColor = "";          
}

function focus3() {
    var x = document.getElementById("btn1");
    x.style.fontSize = "";  
    x.style.borderTopColor = "";  

    x = document.getElementById("btn2");
    x.style.fontSize = "";
    x.style.borderTopColor = "";

    x = document.getElementById("btn3");
    x.style.fontSize = "2vw";           
    x.style.borderTopColor = "white";

    x = document.getElementById("btn4");
    x.style.fontSize = "";  
    x.style.borderTopColor = "";                      
}

function focus4() {
    var x = document.getElementById("btn1");
    x.style.fontSize = "";  
    x.style.borderTopColor = "";  

    x = document.getElementById("btn2");
    x.style.fontSize = "";
    x.style.borderTopColor = "";

    x = document.getElementById("btn3");
    x.style.fontSize = "";           
    x.style.borderTopColor = ""; 

    x = document.getElementById("btn4");
    x.style.fontSize = "2vw";           
    x.style.borderTopColor = "white";
}

function refreshContent(show, hide1, hide2, hide3) {
	var toShow = document.getElementById(show);
	var toHide1 = document.getElementById(hide1);
	var toHide2 = document.getElementById(hide2);
	var toHide3 = document.getElementById(hide3);
	
	toShow.style.display = "block";
	toHide1.style.display = "none";
	toHide2.style.display = "none";
	toHide3.style.display = "none";
}

// image gallery modal
var pho1Modal = document.getElementById("pho1Modal"); var pho1Btn = document.getElementById("pho1");
var pho2Modal = document.getElementById("pho2Modal"); var pho2Btn = document.getElementById("pho2");
var pho3Modal = document.getElementById("pho3Modal"); var pho3Btn = document.getElementById("pho3");
var pho4Modal = document.getElementById("pho4Modal"); var pho4Btn = document.getElementById("pho4");
var pho5Modal = document.getElementById("pho5Modal"); var pho5Btn = document.getElementById("pho5");
var phoM6odal = document.getElementById("pho6Modal"); var pho6Btn = document.getElementById("pho6");
var pho7Modal = document.getElementById("pho7Modal"); var pho7Btn = document.getElementById("pho7");
var pho8Modal = document.getElementById("pho8Modal"); var pho8Btn = document.getElementById("pho8");
var pho9Modal = document.getElementById("pho9Modal"); var pho9Btn = document.getElementById("pho9");

pho1Btn.onclick = function() { pho1Modal.style.display = "block";}
pho2Btn.onclick = function() { pho2Modal.style.display = "block";}
pho3Btn.onclick = function() { pho3Modal.style.display = "block";}
pho4Btn.onclick = function() { pho4Modal.style.display = "block";}
pho5Btn.onclick = function() { pho5Modal.style.display = "block";}
pho6Btn.onclick = function() { pho6Modal.style.display = "block";}
pho7Btn.onclick = function() { pho7Modal.style.display = "block";}
pho8Btn.onclick = function() { pho8Modal.style.display = "block";}
pho9Btn.onclick = function() { pho9Modal.style.display = "block";}

window.onclick = function(event) {
	if( event.target == weChatModal || event.target == snapChatModal ||
		event.target == pho1Modal || event.target == pho2Modal ||
		event.target == pho3Modal || event.target == pho4Modal ||
		event.target == pho5Modal || event.target == pho6Modal ||
		event.target == pho7Modal || event.target == pho8Modal || 
		event.target == pho9Modal) {
		weChatModal.style.display = "none"; snapChatModal.style.display = "none";
		pho1Modal.style.display = "none"; pho2Modal.style.display = "none";
		pho3Modal.style.display = "none"; pho4Modal.style.display = "none";
		pho5Modal.style.display = "none"; pho6Modal.style.display = "none";
		pho7Modal.style.display = "none"; pho8Modal.style.display = "none";
		pho9Modal.style.display = "none";
	}
}

pho1Span.onclick = function() { pho1Modal.style.display = "none";}
pho2Span.onclick = function() { pho2Modal.style.display = "none";}
pho3Span.onclick = function() { pho3Modal.style.display = "none";}
pho4Span.onclick = function() { pho4Modal.style.display = "none";}
pho5Span.onclick = function() { pho5Modal.style.display = "none";}
pho6Span.onclick = function() { pho6Modal.style.display = "none";}
pho7Span.onclick = function() { pho7Modal.style.display = "none";}
pho8Span.onclick = function() { pho8Modal.style.display = "none";}
pho9Span.onclick = function() { pho9Modal.style.display = "none";}