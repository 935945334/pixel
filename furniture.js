kg()
Mobile()
kk()



function Mobile(){
	if(window.orientation == 180 || window.orientation == 0){
		//竖屏
		document.body.style.height = window.innerHeight + "px";
		play.className = "play-Mobile-x";
		play.style.width = window.innerHeight + "px";
        kl.style.height = "100vw";
        kr.style.height = "100vw";
	}else if(window.orientation == 90 || window.orientation == -90){
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
	document.getElementById("tips3").innerHTML = "body宽度：" + document.body.offsetWidth + " body高度：" + document.body.offsetHeight;
    document.getElementById("tips4").innerHTML = "ktoffset宽度：" + kt.offsetWidth + "ktoffset高度：" + kt.offsetHeight;
    document.getElementById("tips5").innerHTML = "ktclient宽度：" + kt.clientWidth + " ktclient高度：" + kt.clientHeight;
    document.getElementById("tips6").innerHTML = "klclient宽度：" + kl.clientWidth + " klclient高度：" + kl.clientHeight;
}