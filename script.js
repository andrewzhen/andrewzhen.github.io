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
    // refreshContent("Architecture" , "Landscape", "Events", "Everyday");
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
var arch1Modal = document.getElementById('arch1Modal'); var arch1Btn = document.getElementById("arch1");
arch1Btn.onclick = function() { arch1Modal.style.display = "block"; }
arch1Span.onclick = function() { arch1Modal.style.display = "none"; }

var arch2Modal = document.getElementById('arch2Modal'); var arch2Btn = document.getElementById("arch2");
arch2Btn.onclick = function() { arch2Modal.style.display = "block"; }
arch2Span.onclick = function() { arch2Modal.style.display = "none"; }

var arch3Modal = document.getElementById('arch3Modal'); var arch3Btn = document.getElementById("arch3");
arch3Btn.onclick = function() { arch3Modal.style.display = "block"; }
arch3Span.onclick = function() { arch3Modal.style.display = "none"; }

var arch4Modal = document.getElementById('arch4Modal'); var arch4Btn = document.getElementById("arch4");
arch4Btn.onclick = function() { arch4Modal.style.display = "block"; }
arch4Span.onclick = function() { arch4Modal.style.display = "none"; }

var arch5Modal = document.getElementById('arch5Modal'); var arch5Btn = document.getElementById("arch5");
arch5Btn.onclick = function() { arch5Modal.style.display = "block"; }
arch5Span.onclick = function() { arch5Modal.style.display = "none"; }

var arch6Modal = document.getElementById('arch6Modal'); var arch6Btn = document.getElementById("arch6");
arch6Btn.onclick = function() { arch6Modal.style.display = "block"; }
arch6Span.onclick = function() { arch6Modal.style.display = "none"; }

var arch7Modal = document.getElementById('arch7Modal'); var arch7Btn = document.getElementById("arch7");
arch7Btn.onclick = function() { arch7Modal.style.display = "block"; }
arch7Span.onclick = function() { arch7Modal.style.display = "none"; }

var arch8Modal = document.getElementById('arch8Modal'); var arch8Btn = document.getElementById("arch8");
arch8Btn.onclick = function() { arch8Modal.style.display = "block"; }
arch8Span.onclick = function() { arch8Modal.style.display = "none"; }

var arch9Modal = document.getElementById('arch9Modal'); var arch9Btn = document.getElementById("arch9");
arch9Btn.onclick = function() { arch9Modal.style.display = "block"; }
arch9Span.onclick = function() { arch9Modal.style.display = "none"; }

var arch10Modal = document.getElementById('arch10Modal'); var arch10Btn = document.getElementById("arch10");
arch10Btn.onclick = function() { arch10Modal.style.display = "block"; }
arch10Span.onclick = function() { arch10Modal.style.display = "none"; }

var arch11Modal = document.getElementById('arch11Modal'); var arch11Btn = document.getElementById("arch11");
arch11Btn.onclick = function() { arch11Modal.style.display = "block"; }
arch11Span.onclick = function() { arch11Modal.style.display = "none"; }

var arch12Modal = document.getElementById('arch12Modal'); var arch12Btn = document.getElementById("arch12");
arch12Btn.onclick = function() { arch12Modal.style.display = "block"; }
arch12Span.onclick = function() { arch12Modal.style.display = "none"; }

//EVENTS
var eve1Modal = document.getElementById('eve1Modal'); var eve1Btn = document.getElementById("eve1");
eve1Btn.onclick = function() { eve1Modal.style.display = "block"; }
eve1Span.onclick = function() { eve1Modal.style.display = "none"; }

var eve2Modal = document.getElementById('eve2Modal'); var eve2Btn = document.getElementById("eve2");
eve2Btn.onclick = function() { eve2Modal.style.display = "block"; }
eve2Span.onclick = function() { eve2Modal.style.display = "none"; }

var eve3Modal = document.getElementById('eve3Modal'); var eve3Btn = document.getElementById("eve3");
eve3Btn.onclick = function() { eve3Modal.style.display = "block"; }
eve3Span.onclick = function() { eve3Modal.style.display = "none"; }

var eve4Modal = document.getElementById('eve4Modal'); var eve4Btn = document.getElementById("eve4");
eve4Btn.onclick = function() { eve4Modal.style.display = "block"; }
eve4Span.onclick = function() { eve4Modal.style.display = "none"; }

var eve5Modal = document.getElementById('eve5Modal'); var eve5Btn = document.getElementById("eve5");
eve5Btn.onclick = function() { eve5Modal.style.display = "block"; }
eve5Span.onclick = function() { eve5Modal.style.display = "none"; }

var eve6Modal = document.getElementById('eve6Modal'); var eve6Btn = document.getElementById("eve6");
eve6Btn.onclick = function() { eve6Modal.style.display = "block"; }
eve6Span.onclick = function() { eve6Modal.style.display = "none"; }

var eve7Modal = document.getElementById('eve7Modal'); var eve7Btn = document.getElementById("eve7");
eve7Btn.onclick = function() { eve7Modal.style.display = "block"; }
eve7Span.onclick = function() { eve7Modal.style.display = "none"; }

var eve8Modal = document.getElementById('eve8Modal'); var eve8Btn = document.getElementById("eve8");
eve8Btn.onclick = function() { eve8Modal.style.display = "block"; }
eve8Span.onclick = function() { eve8Modal.style.display = "none"; }

var eve9Modal = document.getElementById('eve9Modal'); var eve9Btn = document.getElementById("eve9");
eve9Btn.onclick = function() { eve9Modal.style.display = "block"; }
eve9Span.onclick = function() { eve9Modal.style.display = "none"; }

var eve10Modal = document.getElementById('eve10Modal'); var eve10Btn = document.getElementById("eve10");
eve10Btn.onclick = function() { eve10Modal.style.display = "block"; }
eve10Span.onclick = function() { eve10Modal.style.display = "none"; }

var eve11Modal = document.getElementById('eve11Modal'); var eve11Btn = document.getElementById("eve11");
eve11Btn.onclick = function() { eve11Modal.style.display = "block"; }
eve11Span.onclick = function() { eve11Modal.style.display = "none"; }

var eve12Modal = document.getElementById('eve12Modal'); var eve12Btn = document.getElementById("eve12");
eve12Btn.onclick = function() { eve12Modal.style.display = "block"; }
eve12Span.onclick = function() { eve12Modal.style.display = "none"; }

//EVERYDAY
var ed1Modal = document.getElementById('ed1Modal'); var ed1Btn = document.getElementById("ed1");
ed1Btn.onclick = function() { ed1Modal.style.display = "block"; }
ed1Span.onclick = function() { ed1Modal.style.display = "none"; }

var ed2Modal = document.getElementById('ed2Modal'); var ed2Btn = document.getElementById("ed2");
ed2Btn.onclick = function() { ed2Modal.style.display = "block"; }
ed2Span.onclick = function() { ed2Modal.style.display = "none"; }

var ed3Modal = document.getElementById('ed3Modal'); var ed3Btn = document.getElementById("ed3");
ed3Btn.onclick = function() { ed3Modal.style.display = "block"; }
ed3Span.onclick = function() { ed3Modal.style.display = "none"; }

var ed4Modal = document.getElementById('ed4Modal'); var ed4Btn = document.getElementById("ed4");
ed4Btn.onclick = function() { ed4Modal.style.display = "block"; }
ed4Span.onclick = function() { ed4Modal.style.display = "none"; }

var ed5Modal = document.getElementById('ed5Modal'); var ed5Btn = document.getElementById("ed5");
ed5Btn.onclick = function() { ed5Modal.style.display = "block"; }
ed5Span.onclick = function() { ed5Modal.style.display = "none"; }

var ed6Modal = document.getElementById('ed6Modal'); var ed6Btn = document.getElementById("ed6");
ed6Btn.onclick = function() { ed6Modal.style.display = "block"; }
ed6Span.onclick = function() { ed6Modal.style.display = "none"; }

var ed7Modal = document.getElementById('ed7Modal'); var ed7Btn = document.getElementById("ed7");
ed7Btn.onclick = function() { ed7Modal.style.display = "block"; }
ed7Span.onclick = function() { ed7Modal.style.display = "none"; }

var ed8Modal = document.getElementById('ed8Modal'); var ed8Btn = document.getElementById("ed8");
ed8Btn.onclick = function() { ed8Modal.style.display = "block"; }
ed8Span.onclick = function() { ed8Modal.style.display = "none"; }

var ed9Modal = document.getElementById('ed9Modal'); var ed9Btn = document.getElementById("ed9");
ed9Btn.onclick = function() { ed9Modal.style.display = "block"; }
ed9Span.onclick = function() { ed9Modal.style.display = "none"; }

window.onclick = function(event) {
	if( event.target == weChatModal || event.target == snapChatModal ||    //social media
		event.target == land1Modal || event.target == land2Modal ||        //landscape
		event.target == land3Modal || event.target == land4Modal ||
		event.target == land5Modal || event.target == land6Modal ||
		event.target == land7Modal || event.target == land8Modal || 
		event.target == land9Modal || event.target == arch1Modal ||        //architecture
        event.target == arch2Modal || event.target == arch3Modal ||
        event.target == arch4Modal || event.target == arch5Modal ||
        event.target == arch6Modal || event.target == arch7Modal ||
        event.target == arch8Modal || event.target == arch9Modal ||
        event.target == arch10Modal || event.target == arch11Modal ||
        event.target == arch12Modal || event.target == eve1Modal ||        //events
        event.target == eve2Modal || event.target == eve3Modal ||
        event.target == eve4Modal || event.target == eve5Modal ||
        event.target == eve66Modal || event.target == eve7Modal ||
        event.target == eve8Modal || event.target == eve9Modal ||
        event.target == eve10Modal || event.target == eve11Modal ||
        event.target == eve12Modal || event.target == ed1Modal ||          //everyday
        event.target == ed2Modal || event.target == ed3Modal ||
        event.target == ed4Modal || event.target == ed5Modal ||
        event.target == ed6Modal || event.target == ed7Modal ||
        event.target == ed8Modal || event.target == ed9Modal
        )
    {
		weChatModal.style.display = "none"; snapChatModal.style.display = "none";

		land1Modal.style.display = "none"; land2Modal.style.display = "none";
		land3Modal.style.display = "none"; land4Modal.style.display = "none";
		land5Modal.style.display = "none"; land6Modal.style.display = "none";
		land7Modal.style.display = "none"; land8Modal.style.display = "none";
		land9Modal.style.display = "none";

        arch1Modal.style.display = "none"; arch2Modal.style.display = "none";
        arch3Modal.style.display = "none"; arch4Modal.style.display = "none";
        arch5Modal.style.display = "none"; arch6Modal.style.display = "none";
        arch7Modal.style.display = "none"; arch8Modal.style.display = "none";
        arch9Modal.style.display = "none"; arch10Modal.style.display = "none";
        arch11Modal.style.display = "none"; arch12Modal.style.display = "none";

        eve1Modal.style.display = "none"; eve2Modal.style.display = "none";
        eve3Modal.style.display = "none"; eve4Modal.style.display = "none";
        eve5Modal.style.display = "none"; eve6Modal.style.display = "none";
        eve7Modal.style.display = "none"; eve8Modal.style.display = "none";
        eve9Modal.style.display = "none"; eve10Modal.style.display = "none";
        eve11Modal.style.display = "none"; eve12Modal.style.display = "none";

        ed1Modal.style.display = "none"; ed2Modal.style.display = "none";
        ed3Modal.style.display = "none"; ed4Modal.style.display = "none";
        ed5Modal.style.display = "none"; ed6Modal.style.display = "none";
        ed7Modal.style.display = "none"; ed8Modal.style.display = "none";
        ed9Modal.style.display = "none";
	}
}