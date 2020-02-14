var play = document.getElementById("play");
var kl = document.getElementById("k-l");
var kr = document.getElementById("k-r");
var k = document.getElementById("k");
var play = document.getElementById("play");
var furniture = document.getElementById("furniture");
var choice = document.getElementById("choice");
var kt = document.getElementById("k-t");
var kb = document.getElementById("k-b");
var kb1 = document.getElementById("k-b-1");
var role = document.getElementById("role");
var role_1 = document.getElementById("role-1");
kg()
Mobile()
kk()



function Mobile(){
	if(screen.width < screen.height && screen.width < 1080){
		//竖屏
		play.className = "play-Mobile-x";
        kl.style.height = "100vw";
        kr.style.height = "100vw";
	}else if(screen.width > screen.height && screen.width < 1080){
        //横屏
        play.className = "play-Mobile-y";
        kl.style.height = "100vh";
        kr.style.height = "100vh";
        }
}
function kk(){
    var w = k.offsetWidth;
    var h = k.offsetHeight;
    furniture.style.width = w + "px";
    furniture.style.height = h + "px";
}
function kg(){
	document.getElementById("tips1").innerHTML = "屏幕宽度：" + screen.width + " 屏幕高度：" + screen.height;
	document.getElementById("tips2").innerHTML = "人物宽度：" + role_1.width + " 人物高度：" + role_1.height;
	
}