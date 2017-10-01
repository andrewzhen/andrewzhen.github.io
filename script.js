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

weChatSpan.onclick = function() { weChatModal.style.display = "none";}

snapChatBtn.onclick = function() { snapChatModal.style.display = "block";}

snapChatSpan.onclick = function() { snapChatModal.style.display = "none";}

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

//LANDSCAPE
var land1Modal = document.getElementById('land1Modal'); var land1Btn = document.getElementById("land1");
land1Btn.onclick = function() { land1Modal.style.display = "block"; }
land1Span.onclick = function() { land1Modal.style.display = "none"; }

var land2Modal = document.getElementById('land2Modal'); var land2Btn = document.getElementById("land2");
land2Btn.onclick = function() { land2Modal.style.display = "block"; }
land2Span.onclick = function() { land2Modal.style.display = "none"; }

//jkhkj
var land3Modal = document.getElementById("land3Modal"); var land3Btn = document.getElementById("land3");
land3Btn.onclick = function() { land3Modal.style.display = "block";}
land3Span.onclick = function() { land3Modal.style.display = "none";}

var land4Modal = document.getElementById("land4Modal"); var land4Btn = document.getElementById("land4");
land4Btn.onclick = function() { land4Modal.style.display = "block";}
land4Span.onclick = function() { land4Modal.style.display = "none";}

var land5Modal = document.getElementById("land5Modal"); var land5Btn = document.getElementById("land5");
land5Btn.onclick = function() { land5Modal.style.display = "block";}
land5Span.onclick = function() { land5Modal.style.display = "none";}

var land6Modal = document.getElementById("land6Modal"); var land6Btn = document.getElementById("land6");
land6Btn.onclick = function() { land6Modal.style.display = "block";}
land6Span.onclick = function() { land6Modal.style.display = "none";}

var land7Modal = document.getElementById("land7Modal"); var land7Btn = document.getElementById("land7");
land7Btn.onclick = function() { land7Modal.style.display = "block";}
land7Span.onclick = function() { land7Modal.style.display = "none";}

var land8Modal = document.getElementById("land8Modal"); var land8Btn = document.getElementById("land8");
land8Btn.onclick = function() { land8Modal.style.display = "block";}
land8Span.onclick = function() { land8Modal.style.display = "none";}

var land9Modal = document.getElementById("land9Modal"); var land9Btn = document.getElementById("land9");
land9Btn.onclick = function() { land9Modal.style.display = "block";}
land9Span.onclick = function() { land9Modal.style.display = "none";}

//ARCHITECTURE
// var arch1Modal = document.getElementById('arch1Modal'); var arch1Btn = document.getElementById("arch1");
// arch1Btn.onclick = function() { arch1Modal.style.display = "block"; }
// arch1Span.onclick = function() { arch1Modal.style.display = "none"; }

// var arch2Modal = document.getElementById('arch2Modal'); var arch2Btn = document.getElementById("arch2");
// arch2Btn.onclick = function() { arch2Modal.style.display = "block"; }
// arch2Span.onclick = function() { arch2Modal.style.display = "none"; }

// var arch3Modal = document.getElementById('arch3Modal'); var arch3Btn = document.getElementById("arch3");
// arch3Btn.onclick = function() { arch3Modal.style.display = "block"; }
// arch3Span.onclick = function() { arch3Modal.style.display = "none"; }

// var arch4Modal = document.getElementById('arch4Modal'); var arch4Btn = document.getElementById("arch4");
// arch4Btn.onclick = function() { arch4Modal.style.display = "block"; }
// arch4Span.onclick = function() { arch4Modal.style.display = "none"; }

// var arch5Modal = document.getElementById('arch5Modal'); var arch5Btn = document.getElementById("arch5");
// arch5Btn.onclick = function() { arch5Modal.style.display = "block"; }
// arch5Span.onclick = function() { arch5Modal.style.display = "none"; }

// var arch6Modal = document.getElementById('arch6Modal'); var arch6Btn = document.getElementById("arch6");
// arch6Btn.onclick = function() { arch6Modal.style.display = "block"; }
// arch6Span.onclick = function() { arch6Modal.style.display = "none"; }

// var arch7Modal = document.getElementById('arch7Modal'); var arch7Btn = document.getElementById("arch7");
// arch7Btn.onclick = function() { arch7Modal.style.display = "block"; }
// arch7Span.onclick = function() { arch7Modal.style.display = "none"; }

// var arch8Modal = document.getElementById('arch8Modal'); var arch8Btn = document.getElementById("arch8");
// arch8Btn.onclick = function() { arch8Modal.style.display = "block"; }
// arch8Span.onclick = function() { arch8Modal.style.display = "none"; }

// var arch9Modal = document.getElementById('arch9Modal'); var arch9Btn = document.getElementById("arch9");
// arch9Btn.onclick = function() { arch9Modal.style.display = "block"; }
// arch9Span.onclick = function() { arch9Modal.style.display = "none"; }

// var arch10Modal = document.getElementById('arch10Modal'); var arch10Btn = document.getElementById("arch10");
// arch10Btn.onclick = function() { arch10Modal.style.display = "block"; }
// arch10Span.onclick = function() { arch10Modal.style.display = "none"; }

// var arch11Modal = document.getElementById('arch11Modal'); var arch11Btn = document.getElementById("arch11");
// arch11Btn.onclick = function() { arch11Modal.style.display = "block"; }
// arch11Span.onclick = function() { arch11Modal.style.display = "none"; }

// var arch12Modal = document.getElementById('arch12Modal'); var arch12Btn = document.getElementById("arch12");
// arch12Btn.onclick = function() { arch12Modal.style.display = "block"; }
// arch12Span.onclick = function() { arch12Modal.style.display = "none"; }

window.onclick = function(event) {
	if( event.target == weChatModal || event.target == snapChatModal ||
		event.target == land1Modal || event.target == land2Modal ||
		event.target == land3Modal || event.target == land4Modal ||
		event.target == land5Modal || event.target == land6Modal ||
		event.target == land7Modal || event.target == land8Modal || 
		event.target == land9Modal 
        // || event.target == arch1Modal ||
        // event.target == arch2Modal || event.target == arch3Modal ||
        // event.target == arch4Modal || event.target == arch5Modal ||
        // event.target == arch6Modal || event.target == arch7Modal ||
        // event.target == arch8Modal || event.target == arch9Modal ||
        // event.target == arch10Modal || event.target == arch11Modal ||
        // event.target == arch12Modal 
        )
    {
		weChatModal.style.display = "none"; snapChatModal.style.display = "none";

		land1Modal.style.display = "none"; land2Modal.style.display = "none";
		land3Modal.style.display = "none"; land4Modal.style.display = "none";
		land5Modal.style.display = "none"; land6Modal.style.display = "none";
		land7Modal.style.display = "none"; land8Modal.style.display = "none";
		land9Modal.style.display = "none";

        // arch1Modal.style.display == "none"; arch2Modal.style.display == "none";
        // arch3Modal.style.display == "none"; arch4Modal.style.display == "none";
        // arch5Modal.style.display == "none"; arch6Modal.style.display == "none";
        // arch7Modal.style.display == "none"; arch8Modal.style.display == "none";
        // arch9Modal.style.display == "none"; arch10Modal.style.display == "none";
        // arch11Modal.style.display == "none"; arch12Modal.style.display == "none";
	}
}