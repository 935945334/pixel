var coordinateX = document.getElementById("coordinate-x");
var coordinateY = document.getElementById("coordinate-y");
var role = document.getElementById("role");
var kt = document.getElementById("k-t");
var kb = document.getElementById("k-b");
var kl = document.getElementById("k-l");
var role_1 = document.getElementById("role-1");
var role_img = "imges/Abigail/Abigail.png";
var role_top = "imges/Abigail/top.gif";
var role_bottom = "imges/Abigail/bottom.gif";
var role_left = "imges/Abigail/left.gif";
var role_right = "imges/Abigail/right.gif";
var t = 0; 
roleHeight()
function xuanRen(){
    if (t == 0) {
        alert(parseInt(kt.offsetWidth/2));
    }
    if (t == 1) {
        alert(kt.offsetWidth);
    }
}
function roleHeight(){
    // role.style.marginTop = "70px";
    role.style.marginTop = kt.offsetHeight - 60 + "px"
    role.style.paddingTop = 70 + "px";
    // role.style.paddingLeft = "500px"
    // role.style.paddingLeft = kt.offsetWidth/2;
    role.style.paddingLeft = parseInt(kt.offsetWidth/2) + "px";
    // role.style.marginLeft = - 30 + "px"
    // alert(kt.offsetHeight);
}
function get_canvas(ev, obj) {
    if (screen.width > screen.height) {
        m_clientX = ev.clientX - obj.offsetLeft;
        m_clientY = ev.clientY - obj.offsetTop;
    }else if(screen.width < screen.height) {
        m_clientX = ev.clientX - kb.offsetHeight;
        m_clientY = ev.clientY - kl.offsetWidth;
    } 
    document.getElementById("tips").innerHTML = "当前坐标：X：" + m_clientX + " ,Y：" + m_clientY + ",top" + kb.offsetHeight + ",left" + kl.offsetWidth + "XXX" + t;
}
function move(){
    jc();//若函数运行中则终止运行
    zt();//设置函数运行状态，t=1(运行中) t=0(未运行)
    
    if (screen.width > screen.height) {
        var clientX = m_clientX;
        var clientY = m_clientY;
        window.clientX = clientX - parseInt(kt.offsetWidth/2);
        // window.clientX = clientX;
        window.clientY = clientY;
        // window.clientY = clientY -70;
        
    }else if(screen.width < screen.height){
        var clientX = -m_clientX;
        var clientY = m_clientY;
        window.clientX = clientX;
        // window.clientX = clientX -70; 
        window.clientY = clientY - parseInt(kt.offsetWidth/2);
        // window.clientY = clientY;
    }
    roleX()
    var i=0;
    mouseTime = setInterval(function (){  //setInterval可一直执行内部函数
            // alert("横屏")
            if (screen.width > screen.height) {
                // alert("横屏")
                moveXX();
            }else if(screen.width < screen.height){
                // alert("竖屏")
                moveXY()
                
                
            }   
            i++  //执行一次i++
        }, 5);
}

function jc(){
    if (t == 1) {
        clearInterval(mouseTime);
    }
}
function zt(){
    var t = 1;
    window.t = t;
}
function moveXX(){
    // alert("横屏")
    if(coordinateX.value < clientX){
        coordinateX.value = parseInt(coordinateX.value) + 1;
        role.style.marginLeft = coordinateX.value + "px";
    }
    else if(coordinateX.value > clientX){
        coordinateX.value = parseInt(coordinateX.value) - 1;
        role.style.marginLeft = coordinateX.value + "px";
    }
    else if(coordinateX.value == clientX){
        clearInterval(mouseTime);
        moveY()
    }
}
function moveXY(){
    // alert("竖屏")
    if(coordinateX.value < clientY){
        coordinateX.value = parseInt(coordinateX.value) + 1;
        role.style.marginLeft = coordinateX.value + "px";
    }else if(coordinateX.value > clientY){
        coordinateX.value = parseInt(coordinateX.value) - 1;
        role.style.marginLeft = coordinateX.value + "px";
    }else if(coordinateX.value == clientY){
        clearInterval(mouseTime);
        moveY()
    }
}
function moveY(){
    roleY()
    var i=0;
    mouseTime = setInterval(function (){  //setInterval可一直执行内部函数
        // alert("横屏")
        if (screen.width > screen.height) {
            // alert("横屏")
            moveYX();
        }else if(screen.width < screen.height){
             // alert("竖屏")
            moveYY();   
        }   
        i++  //执行一次i++
    }, 5);
}
function moveYX(){
    if(coordinateY.value < clientY){
        coordinateY.value = parseInt(coordinateY.value) + 1;
        role.style.paddingTop = coordinateY.value + "px";
    }
    else if(coordinateY.value > clientY){
        coordinateY.value = parseInt(coordinateY.value) - 1;
        role.style.paddingTop = coordinateY.value + "px";
    }
    else if(coordinateY.value == clientY){
        clearInterval(mouseTime);
        var t = 0;
        window.t = t;
        role_1.src = role_img;
    }
}
function moveYY(){
    if(coordinateY.value < clientX){
        coordinateY.value = parseInt(coordinateY.value) + 1;
        role.style.paddingTop = coordinateY.value + "px";
    }else if(coordinateY.value > clientX){
        coordinateY.value = parseInt(coordinateY.value) - 1;
        role.style.paddingTop = coordinateY.value + "px";
    }else if(coordinateY.value == clientX){
        clearInterval(mouseTime);
        var t = 0;
        window.t = t;
        role_1.src = role_img;
    }
}

function roleX(){
    if (screen.width > screen.height){
        if (coordinateX.value < clientX) {
            role_1.src = role_right;
        }else if(coordinateX.value > clientX){
            role_1.src = role_left;
        }
    }else if(screen.width < screen.height){
        if (coordinateX.value < clientY) {
            role_1.src = role_right;
        }else if(coordinateX.value > clientY){
            role_1.src = role_left;
        }
    }
    
}
function roleY(){
    if (screen.width > screen.height){
        if (coordinateY.value < clientY) {
            role_1.src = role_bottom;
        }else if(coordinateY.value > clientY){
            role_1.src = role_top;
        }
    }else if(screen.width < screen.height){
        if (coordinateY.value < clientX) {
            role_1.src = role_bottom;
        }else if(coordinateY.value > clientX){
            role_1.src = role_top;
        }
    }
}


