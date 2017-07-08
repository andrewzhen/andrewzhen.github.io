// google-analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-102146073-1', 'auto');
ga('send', 'pageview');

// start up
window.onload = function() {
	// Basketball tab
    var x = document.getElementById("btn1");
    refreshContent("Photography", "Basketball", "Traveling", "School");

	// Photography tab
	// var x = document.getElementById("btn2");
	// refreshContent("School", "Photography", "Basketball", "Traveling");
	
    x.style.fontSize = "36px";
    x.style.borderTopColor = "black";
}

function focus1() {
    var x = document.getElementById("btn1");
    x.style.fontSize = "36px";
    x.style.borderTopColor = "black";        

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
    x.style.fontSize = "36px";           
    x.style.borderTopColor = "black";

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
    x.style.fontSize = "36px";           
    x.style.borderTopColor = "black";

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
    x.style.fontSize = "36px";           
    x.style.borderTopColor = "black";                    
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

// scroll to top
window.onscroll = function() {
	scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}

// var modal = document.getElementById('myModal');
// var btn = document.getElementById('wechat');
// var span = document.getElementById("close")[0];

// fa fa-wechat.onclick = function() {
// 	modal.style.display = "block";
// }

// span.onclick = function() {
// 	modal.style.dispaly = "none";
// }

// window.onclick = function(event) {
// 	if(event.target == modal) {
// 		modal.style.display = "none";
// 	}
// }