var play = document.getElementById("play");
var kz = document.getElementById("k-z");
var ky = document.getElementById("k-y");
var k = document.getElementById("k");
var play = document.getElementById("play");
var furniture = document.getElementById("furniture");
var xuanren = document.getElementById("xuanren");
var ks = document.getElementById("k-s");
var kx = document.getElementById("k-x");
var kx1 = document.getElementById("k-x-1");
var character = document.getElementById("character");

var ksq = document.getElementById("k-s");
var kxq = document.getElementById("k-x");
var fzs1 = document.getElementById("f-z-s-1");
var fzs2 = document.getElementById("f-z-s-2");
var fzs3 = document.getElementById("f-z-s-3");
var fzs4 = document.getElementById("f-z-s-4");
var fzs5 = document.getElementById("f-z-s-5");
var fzz1 = document.getElementById("f-z-z-1");
var fzz2 = document.getElementById("f-z-z-2");
var fzz3 = document.getElementById("f-z-z-3");
var fxz1 = document.getElementById("f-x-z-1");
var fxz2 = document.getElementById("f-x-z-2");
var fxz3 = document.getElementById("f-x-z-3");
var fys1 = document.getElementById("f-y-s-1");
var fys2 = document.getElementById("f-y-s-2");
var fys3 = document.getElementById("f-y-s-3");
var fys4 = document.getElementById("f-y-s-4");
var fys5 = document.getElementById("f-y-s-5");
var fyx1 = document.getElementById("f-y-x-1");
var fyx2 = document.getElementById("f-y-x-2");
var fyx3 = document.getElementById("f-y-x-3");
pingmu();
jj()
characterHeight()
// pingmu1()
// function pingmu1(){
//     kz.style.height = screen.width + "px";
//     ky.style.height = screen.width + "px";
//     var a=kz.offsetWidth;
//     k.style.width = screen.width - a - a + "px";
//     k.style.height = "500px";
//     alert(a);
// }
    function characterHeight(){
        character.style.marginTop = ks.offsetHeight - 70 + "px"
        character.style.paddingTop =70 + "px"
        character.style.paddingLeft = ks.offsetWidth/2 - 30 + "px"
        // character.style.marginLeft = -300 + "px"
        // alert(ks.offsetHeight);
    }
    function pingmu(){
    	if(screen.width < screen.height && screen.width < 1365){
            //竖屏
            play.className = "play2";
            kz.style.height = screen.width + "px";
            ky.style.height = screen.width + "px";
            play.style.height = screen.width + "px";
            play.style.width = screen.height + "px";
            var b = kz.offsetWidth;
            var c = screen.height - b - b;
            var d = screen.width;
            k.style.width = c + "px";
            kx1.style.width = c + "px";
            var b=kz.offsetWidth;
        };
        if(screen.width > screen.height && screen.width < 1365){
            //横屏
            
            play.className = "play1";
            kz.style.height = screen.height + "px";
            ky.style.height = screen.height + "px";
            var b = kz.offsetWidth;
            var c = screen.width - b - b;
            k.style.width = c + "px";
            k.style.height = screen.height + "px";
            kx1.style.width = c + "px";
        }
        if(screen.width > screen.height && screen.width > 1365){
            //PC横屏            
            play.className = "play3";  
            k.style.width = "756px";
            k.style.height = "375px"; 
            kx1.style.width = "756px"; 
            kx1.style.height = "244px"; 
            kx1.style.bottom = "532px";      
        }
    }
    function jj(){
        var w = k.offsetWidth;
        var h = k.offsetHeight;
        furniture.style.width = w + "px";
        furniture.style.height = h + "px";
    }
  	const evt = "onorientationchange" in window ? "orientationchange" : "resize";
  	window.addEventListener(evt, function () {
            //判断横屏
            if(screen.width < screen.height && screen.width < 1080){
                //竖屏
                play.className = "play2";
                kz.style.height = screen.width + "px";
                ky.style.height = screen.width + "px";
                play.style.height = screen.width + "px";
                play.style.width = screen.height + "px";
                var b = kz.offsetWidth;
                var c = screen.height - b - b;
                var d = screen.width;
                k.style.width = c + "px";
                var b=kz.offsetWidth;
                // alert("1");    
            };
            if(screen.width > screen.height && screen.width < 1080){
                //横屏
                play.className = "play1";
                kz.style.height = screen.height + "px";
                ky.style.height = screen.height + "px";
                var b = kz.offsetWidth;
                var c = screen.width - b - b;
                k.style.width = c + "px";
                k.style.height = screen.height + "px";
                // alert("12");    

            }
            if(screen.width > screen.height && screen.width > 1080){
                //PC横屏            
                play.className = "play3";  
                k.style.width = "756px";
                k.style.height = "375x";  
                // alert("123");    
            }
    }, false);

    function get_canvas(ev, obj) {

        if (screen.width > screen.height) {
            m_clientX = ev.clientX - obj.offsetLeft;
            m_clientY = ev.clientY - obj.offsetTop;
        }else if(screen.width < screen.height) {
            m_clientX = ev.clientX -kx.offsetHeight;
            m_clientY = ev.clientY - obj.offsetLeft;
        }
        // alert(obj.offsetLeft);
    // m_clientX = ev.clientX - obj.offsetTop;
    // m_clientX = ev.clientX -kx.offsetHeight;
    // m_clientY = ev.clientY - obj.offsetLeft;
    
    document.getElementById("tips").innerHTML = "当前坐标：X：" + m_clientX + " ,Y：" + m_clientY;

    }




    




var zuobiaoX = document.getElementById("zuobiao-x").value;
var zuobiaoY = document.getElementById("zuobiao-y").value;
var character = document.getElementById("character");
var role = document.getElementById("role");
var role_img = "imges/Abigail/Abigail.png";
var role_shang = "imges/Abigail/shang.gif";
var role_xia = "imges/Abigail/xia.gif";
var role_zuo = "imges/Abigail/zuo.gif";
var role_you = "imges/Abigail/you.gif";
function yidong(){
    alert(window.screen.availHeight);
    if (screen.width > screen.height) {
        var clientX = m_clientX;
        var clientY = m_clientY;
        window.clientX = clientX - parseInt(ks.offsetWidth/2);
        window.clientY = clientY -70;
        var i=0;
    }else if(screen.width < screen.height){
        var clientX = -m_clientX;
        var clientY = m_clientY;
        window.clientX = clientX -70; 
        window.clientY = clientY - parseInt(ks.offsetWidth/2);
        var i=0;
    }
        // var clientX = -m_clientX;
        // var clientY = m_clientY;
        // window.clientX = clientX -70; 
        // // window.clientX = clientX - parseInt(ks.offsetWidth/2);
        // window.clientY = clientY - parseInt(ks.offsetWidth/2);
        // // window.clientY = clientY -70;
        // // alert(clientY);
        // var i=0;

        yidongImgX();
        mouseTime = setInterval(function (){  //setInterval可一直执行内部函数
                if (screen.width > screen.height) {
                    yidongX();
                }else if(screen.width < screen.height){
                    // alert("1")
                    
                    yidongXX()
                }
                

                i++  //若过一秒，执行一次i++
         }, 5);


}
function yidongXX(){
     if(zuobiaoX < clientY){
            zuobiaoX = parseInt(zuobiaoX) + 1;
             document.getElementById("zuobiao-x").value = parseInt(document.getElementById("zuobiao-x").value) + 1;
            character.style.marginLeft = zuobiaoX + "px";
     }else if(zuobiaoX > clientY){
            zuobiaoX = parseInt(zuobiaoX) - 1;
             document.getElementById("zuobiao-x").value = parseInt(document.getElementById("zuobiao-x").value) - 1;
            character.style.marginLeft = zuobiaoX + "px";
     }else if(zuobiaoX == clientY){
        clearInterval(mouseTime);
        yidong_YY()
     }
    
}
function yidong_YY(){
    var i=0;
    yidongImgY()
    mouseTime = setInterval(function (){  //setInterval可一直执行内部函数
                
                yidongYY();

                 i++  //若过一秒，执行一次i++
         }, 5);
}
function yidongYY(){
    if(zuobiaoY < clientX){
            zuobiaoY = parseInt(zuobiaoY) + 1;
            document.getElementById("zuobiao-y").value = parseInt(document.getElementById("zuobiao-y").value) + 1;
            character.style.paddingTop = zuobiaoY  + 70 + "px";
        }else if(zuobiaoY > clientX){
            zuobiaoY = parseInt(zuobiaoY) - 1;
            document.getElementById("zuobiao-y").value = parseInt(document.getElementById("zuobiao-y").value) - 1;
            character.style.paddingTop = zuobiaoY + 70 + "px";
        }else if(zuobiaoY == clientX){
            clearInterval(mouseTime);
            role.src = role_img;
        }
}

function yidongImgX(){
    if(screen.width > screen.height){
        if(zuobiaoX < clientX){
            role.src = role_you;
        }else if(zuobiaoX > clientX){
            role.src = role_zuo;
        }
    }else if(screen.width < screen.height){
        if(zuobiaoX < clientY){
            role.src = role_you;
        }else if(zuobiaoX > clientY){
            role.src = role_zuo;
        }
    }
    // alert(clientX,clientY);
    
}

function yidongX(){
    if(zuobiaoX < clientX){
        zuobiaoX = parseInt(zuobiaoX) + 1;
        document.getElementById("zuobiao-x").value = parseInt(document.getElementById("zuobiao-x").value) + 1;
        character.style.marginLeft = zuobiaoX + "px";
    }else if(zuobiaoX > clientX){
        zuobiaoX = parseInt(zuobiaoX) - 1;
        document.getElementById("zuobiao-x").value = parseInt(document.getElementById("zuobiao-x").value) - 1;
        character.style.marginLeft = zuobiaoX + "px";
        // alert(clientX)
    }else if(zuobiaoX == clientX){
        clearInterval(mouseTime);
        yidong_Y()
    }
}
function yidongImgY(){
    // alert(zuobiaoX);
    // alert(zuobiaoY);
    // alert(clientX);
    // alert(clientY);
    if(screen.width > screen.height){
        if(zuobiaoY < clientY){
            role.src = role_xia;
        }else if(zuobiaoY > clientY){
            role.src = role_shang;
        }
    }else if(screen.width < screen.height){
        if(zuobiaoY < clientX){
            role.src = role_xia;
        }else if(zuobiaoY > clientX){
            role.src = role_shang;
        }
    }
    // alert(clientX,clientY);
    // if(zuobiaoY < clientY){
    //     role.src = role_xia;
    // }else if(zuobiaoY > clientY){
    //     role.src = role_shang;
    // }
}
function yidong_Y(){
    var i=0;
    yidongImgY()
    mouseTime = setInterval(function (){  //setInterval可一直执行内部函数
                
                yidongY();

                 i++  //若过一秒，执行一次i++
         }, 5);
}
function yidongY(){
        if(zuobiaoY < clientY){
            zuobiaoY = parseInt(zuobiaoY) + 1;
            document.getElementById("zuobiao-y").value = parseInt(document.getElementById("zuobiao-y").value) + 1;
            character.style.paddingTop = zuobiaoY + 70 + "px";
        }else if(zuobiaoY > clientY){
            zuobiaoY = parseInt(zuobiaoY) - 1;
            document.getElementById("zuobiao-y").value = parseInt(document.getElementById("zuobiao-y").value) - 1;
            character.style.paddingTop = zuobiaoY + 70 + "px";
        }else if(zuobiaoY == clientY){
            clearInterval(mouseTime);
            role.src = role_img;
        }
}








function xuanRen(){
        xuanren.style.display='flex';
    }
    function qieHuan(){
        xuanren.style.display='none';
    }
    function Abigail(){
        ksq.style.background = "url(imges/qiang-5.png)";
        ksq.style.backgroundSize = "auto 100%";
        ksq.style.backgroundRepeat = "repeat-x";
        kxq.style.background = "url(imges/diban-1.png)";
        kxq.style.backgroundSize = "auto 100%";
        kxq.style.backgroundRepeat = "repeat-x";
        fzs1.src="imges/furniture/qiang-z-s-6.png";
        fzs2.src="imges/furniture/qiang-z-s-5.png";
        fzs3.src="imges/furniture/qiang-z-s-1.png";
        fzs4.src="imges/furniture/qiang-z-s-2.png";
        fzs5.src="imges/furniture/qiang-z-s-4.png";
        fzz1.src="imges/furniture/jiaju-2.png";
        fzz2.src="imges/furniture/guizi-1.png";
        fzz3.src="imges/furniture/guizi-2.png";
        fxz1.src="imges/furniture/z-x-3.png";
        fxz2.src="imges/furniture/z-x-0.png";
        fxz3.src="imges/furniture/z-x-2.png";
        fys2.src="imges/furniture/y-s-k-2.png";
        fys3.src="imges/furniture/y-s-z-2.png";
        fys4.src="imges/furniture/y-s-k-1.png";
        fys5.src="imges/furniture/y-s-z-4.png";
        fyx1.src="imges/furniture/y-x-1.png";
        fyx2.src="imges/furniture/y-x-5.gif";
        fyx3.src="imges/furniture/y-x-2.png";
        qieHuan()
    }
    function Penny(){
        ksq.style.background = "url(imges/qiang-6.png)";
        ksq.style.backgroundSize = "auto 100%";
        ksq.style.backgroundRepeat = "repeat-x";
        kxq.style.background = "url(imges/diban-5.png)";
        kxq.style.backgroundSize = "auto 100%";
        kxq.style.backgroundRepeat = "repeat-x";
        fzs1.src="imges/furniture/qiang-z-s-6.png";
        fzs2.src="imges/furniture/qiang-z-s-1.png";
        fzs3.src="imges/furniture/qiang-z-s-8.png";
        fzs4.src="imges/furniture/qiang-z-s-1.png";
        fzs5.src="imges/furniture/qiang-z-s-7.png";
        fzz1.src="imges/furniture/jiaju-3.png";
        fzz2.src="imges/furniture/guizi-3.png";
        fzz3.src="imges/furniture/Penny.gif";
        fxz1.src="imges/furniture/z-x-5.png";
        fxz2.src="imges/furniture/z-x-0.png";
        fxz3.src="imges/furniture/z-x-4.png";
        fys2.src="imges/furniture/y-s-k-3.png";
        fys3.src="imges/furniture/y-s-z-1.png";
        fys4.src="imges/furniture/y-s-k-4.png";
        fys5.src="imges/furniture/y-s-z-6.png";
        fyx1.src="imges/furniture/y-x-0.png";
        fyx2.src="imges/furniture/y-x-1.png";
        fyx3.src="imges/furniture/y-x-6.png";
        qieHuan()
    }
    function Leah(){
        ksq.style.background = "url(imges/qiang-7.png)";
        ksq.style.backgroundSize = "auto 100%";
        ksq.style.backgroundRepeat = "repeat-x";
        kxq.style.background = "url(imges/diban-6.png)";
        kxq.style.backgroundSize = "auto 100%";
        kxq.style.backgroundRepeat = "repeat-x";
        fzs1.src="imges/furniture/qiang-z-s-11.png";
        fzs2.src="imges/furniture/qiang-z-s-9.png";
        fzs3.src="imges/furniture/qiang-z-s-1.png";
        fzs4.src="imges/furniture/qiang-z-s-10.png";
        fzs5.src="imges/furniture/qiang-z-s-12.png";
        fzz1.src="imges/furniture/jiaju-4.png";
        fzz2.src="imges/furniture/guizi-5.png";
        fzz3.src="imges/furniture/guizi-6.png";
        fxz1.src="imges/furniture/z-x-6.png";
        fxz2.src="imges/furniture/z-x-0.png";
        fxz3.src="imges/furniture/z-x-7.png";
        fys2.src="imges/furniture/y-s-k-5.png";
        fys3.src="imges/furniture/y-s-z-8.gif";
        fys4.src="imges/furniture/y-s-k-6.png";
        fys5.src="imges/furniture/y-s-z-7.png";
        fyx1.src="imges/furniture/y-x-8.png";
        fyx2.src="imges/furniture/Leah.gif";
        fyx3.src="imges/furniture/y-x-7.png";
        qieHuan()
    }
    function Haley(){
        ksq.style.background = "url(imges/qiang-8.png)";
        ksq.style.backgroundSize = "auto 100%";
        ksq.style.backgroundRepeat = "repeat-x";
        kxq.style.background = "url(imges/diban-1.png)";
        kxq.style.backgroundSize = "auto 100%";
        kxq.style.backgroundRepeat = "repeat-x";
        fzs1.src="imges/furniture/qiang-z-s-14.png";
        fzs2.src="imges/furniture/qiang-z-s-13.png";
        fzs3.src="imges/furniture/qiang-z-s-14.png";
        fzs4.src="imges/furniture/qiang-z-s-15.png";
        fzs5.src="imges/furniture/qiang-z-s-14.png";
        fzz1.src="imges/furniture/jiaju-5.png";
        fzz2.src="imges/furniture/guizi-7.png";
        fzz3.src="imges/furniture/guizi-8.png";
        fxz1.src="imges/furniture/z-x-4.png";
        fxz2.src="imges/furniture/z-x-8.png";
        fxz3.src="imges/furniture/z-x-0.png";
        fys2.src="imges/furniture/y-s-k-5.png";
        fys3.src="imges/furniture/y-s-z-2.png";
        fys4.src="imges/furniture/y-s-k-7.png";
        fys5.src="imges/furniture/y-s-z-8.png";
        fyx1.src="imges/furniture/Haley.gif";
        fyx2.src="imges/furniture/z-x-0.png";
        fyx3.src="imges/furniture/y-x-10.png";
        qieHuan()
    }
     function Maru(){
        ksq.style.background = "url(imges/qiang-9.png)";
        ksq.style.backgroundSize = "auto 100%";
        ksq.style.backgroundRepeat = "repeat-x";
        kxq.style.background = "url(imges/diban-9.png)";
        kxq.style.backgroundSize = "auto 100%";
        kxq.style.backgroundRepeat = "repeat-x";
        fzs1.src="imges/furniture/qiang-z-s-17.png";
        fzs2.src="imges/furniture/qiang-z-s-16.png";
        fzs3.src="imges/furniture/qiang-z-s-18.png";
        fzs4.src="imges/furniture/qiang-z-s-16.png";
        fzs5.src="imges/furniture/qiang-z-s-19.png";
        fzz1.src="imges/furniture/jiaju-6.png";
        fzz2.src="imges/furniture/guizi-10.png";
        fzz3.src="imges/furniture/guizi-9.png";
        fxz1.src="imges/furniture/z-x-9.png";
        fxz2.src="imges/furniture/z-x-10.png";
        fxz3.src="imges/furniture/z-x-11.png";
        fys2.src="imges/furniture/y-s-k-8.png";
        fys3.src="imges/furniture/y-s-z-9.png";
        fys4.src="imges/furniture/y-s-k-10.png";
        fys5.src="imges/furniture/y-s-z-10.png";
        fyx1.src="imges/furniture/z-x-0.png";
        fyx2.src="imges/furniture/Maru.gif";
        fyx3.src="imges/furniture/y-x-11.png";
        qieHuan()
    }
    function Emily(){
        ksq.style.background = "url(imges/qiang-10.png)";
        ksq.style.backgroundSize = "auto 100%";
        ksq.style.backgroundRepeat = "repeat-x";
        kxq.style.background = "url(imges/diban-11.png)";
        kxq.style.backgroundSize = "auto 100%";
        kxq.style.backgroundRepeat = "repeat-x";
        fzs1.src="imges/furniture/qiang-z-s-3.png";
        fzs2.src="imges/furniture/qiang-z-s-1.png";
        fzs3.src="imges/furniture/qiang-z-s-13.png";
        fzs4.src="imges/furniture/qiang-z-s-1.png";
        fzs5.src="imges/furniture/qiang-z-s-8.png";
        fzz1.src="imges/furniture/jiaju-7.png";
        fzz2.src="imges/furniture/guizi-11.png";
        fzz3.src="imges/furniture/guizi-12.png";
        fxz1.src="imges/furniture/z-x-12.png";
        fxz2.src="imges/furniture/z-x-13.png";
        fxz3.src="imges/furniture/z-x-14.gif";
        fys2.src="imges/furniture/y-s-k-12.png";
        fys3.src="imges/furniture/y-s-z-2.png";
        fys4.src="imges/furniture/y-s-k-11.png";
        fys5.src="imges/furniture/y-s-z-11.png";
        fyx1.src="";
        fyx2.src="imges/furniture/Emily.gif";
        fyx3.src="imges/furniture/y-x-12.png";
        qieHuan()
    }
    function Sebastian(){
        ksq.style.background = "url(imges/qiang-2.png)";
        ksq.style.backgroundSize = "auto 100%";
        ksq.style.backgroundRepeat = "repeat-x";
        kxq.style.background = "url(imges/diban-12.png)";
        kxq.style.backgroundSize = "auto 100%";
        kxq.style.backgroundRepeat = "repeat-x";
        fzs1.src="imges/furniture/qiang-z-s-20.png";
        fzs2.src="imges/furniture/qiang-z-s-16.png";
        fzs3.src="imges/furniture/qiang-z-s-21.png";
        fzs4.src="imges/furniture/qiang-z-s-16.png";
        fzs5.src="imges/furniture/qiang-z-s-19.png";
        fzz1.src="imges/furniture/jiaju-6.png";
        fzz2.src="imges/furniture/guizi-13.png";
        fzz3.src="imges/furniture/guizi-14.png";
        fxz1.src="imges/furniture/Sebastian.gif";
        fxz2.src="imges/furniture/z-x-15.png";
        fxz3.src="";
        fys2.src="imges/furniture/y-s-k-14.png";
        fys3.src="imges/furniture/y-s-z-2.png";
        fys4.src="imges/furniture/y-s-k-13.png";
        fys5.src="imges/furniture/y-s-z-12.png";
        fyx1.src="imges/furniture/y-x-14.png";
        fyx2.src="imges/furniture/y-x-13.png";
        fyx3.src="imges/furniture/y-x-15.png";
        qieHuan()
    }
    function Alex(){
        ksq.style.background = "url(imges/qiang-2.png)";
        ksq.style.backgroundSize = "auto 100%";
        ksq.style.backgroundRepeat = "repeat-x";
        kxq.style.background = "url(imges/diban-12.png)";
        kxq.style.backgroundSize = "auto 100%";
        kxq.style.backgroundRepeat = "repeat-x";
        fzs1.src="imges/furniture/qiang-z-s-20.png";
        fzs2.src="imges/furniture/qiang-z-s-16.png";
        fzs3.src="imges/furniture/qiang-z-s-21.png";
        fzs4.src="imges/furniture/qiang-z-s-16.png";
        fzs5.src="imges/furniture/qiang-z-s-19.png";
        fzz1.src="imges/furniture/jiaju-6.png";
        fzz2.src="imges/furniture/guizi-13.png";
        fzz3.src="imges/furniture/guizi-14.png";
        fxz1.src="imges/furniture/Sebastian.gif";
        fxz2.src="imges/furniture/z-x-15.png";
        fxz3.src="";
        fys2.src="imges/furniture/y-s-k-14.png";
        fys3.src="imges/furniture/y-s-z-2.png";
        fys4.src="imges/furniture/y-s-k-13.png";
        fys5.src="imges/furniture/y-s-z-12.png";
        fyx1.src="imges/furniture/y-x-14.png";
        fyx2.src="imges/furniture/y-x-13.png";
        fyx3.src="imges/furniture/y-x-15.png";
        qieHuan()
    }