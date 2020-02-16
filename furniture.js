kg()
Mobile()
kk()



function Mobile(){
	if(window.orientation == 180 || window.orientation == 0){
		//竖屏
		
		play.className = "play-Mobile-x";
		document.body.style.height = window.innerHeight + "px";
		play.style.width = window.innerHeight + "px";
        kl.style.height = "100vw";
        kr.style.height = "100vw";
	}else if(window.orientation == 90 || window.orientation == -90){
        //横屏
        play.className = "play-Mobile-y";
        play.style.width = window.innerWidth + "px";
        kl.style.height = "100vh";
        kr.style.height = "100vh";
        }
}
//屏幕选择时重新设定方向
window.addEventListener('orientationchange',function(){
    kg()
	Mobile()
	kk()
	// alert(window.orientation);
	if(window.orientation == 180 || window.orientation == 0){
		play.style.width = window.innerWidth + "px";
	}else if(window.orientation == 90 || window.orientation == -90){
		play.style.width = window.innerHeight + "px";
	}
	
});
function kk(){
    var w = k.offsetWidth;
    var h = k.offsetHeight;
    furniture.style.width = w + "px";
    furniture.style.height = h + "px";
}
function kg(){
	document.getElementById("tips1").innerHTML = "屏幕宽度：" + screen.width + " 屏幕高度：" + screen.height;
	document.getElementById("tips3").innerHTML = "人物宽度：" + role_1.width + " 人物高度：" + role_1.height;
	document.getElementById("tips2").innerHTML = "body宽度：" + document.body.offsetWidth + " body高度：" + document.body.offsetHeight;
	document.getElementById("tips4").innerHTML = "PLAY宽度：" + play.offsetWidth + " PLAY高度：" + play.offsetHeight;
}