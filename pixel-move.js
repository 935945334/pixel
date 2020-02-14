var coordinateX = document.getElementById("coordinate-x");
var coordinateY = document.getElementById("coordinate-y");
var role = document.getElementById("role");
var kt = document.getElementById("k-t");
var role_img = "imges/Abigail/Abigail.png";
roleHeight()
function roleHeight(){
    role.style.marginTop = "70px";
    // role.style.marginTop = kt.offsetHeight - 70 + "px"
    // role.style.paddingTop =70 + "px"
    // role.style.paddingLeft = kt.offsetWidth/2 - 30 + "px"
    // role.style.marginLeft = -300 + "px"
    // alert(kt.offsetHeight);
}
function get_canvas(ev, obj) {
    if (screen.width > screen.height) {
        m_clientX = ev.clientX - obj.offsetLeft;
        m_clientY = ev.clientY - obj.offsetTop;
    }else if(screen.width < screen.height) {
        m_clientX = ev.clientX - obj.offsetHeight;
        m_clientY = ev.clientY - obj.offsetLeft;
    } 
    document.getElementById("tips").innerHTML = "当前坐标：X：" + m_clientX + " ,Y：" + m_clientY;
}

function move(){
    if (screen.width > screen.height) {
        var clientX = m_clientX - 30;
        var clientY = m_clientY;
        // window.clientX = clientX - parseInt(kt.offsetWidth/2);
        window.clientX = clientX;
        window.clientY = clientY;
        // window.clientY = clientY -70;
        var i=0;
    }else if(screen.width < screen.height){
        var clientX = -m_clientX;
        var clientY = m_clientY - 30;
        window.clientX = clientX;
        // window.clientX = clientX -70; 
        // window.clientY = clientY - parseInt(kt.offsetWidth/2);
        window.clientY = clientY;
        
    }
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
        moveYX()
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
        moveYY()
    }
}

function moveYX(){
    if(coordinateY.value < clientY){
        coordinateY.value = parseInt(coordinateY.value) + 1;
        role.style.paddingTop = coordinateY.value + "px";
    }
    else if(coordinateY.value > clientY){
        coordinateX.value = parseInt(coordinateX.value) - 1;
        role.style.paddingTop = coordinateY.value + "px";
    }
    else if(coordinateY.value == clientY){
        clearInterval(mouseTime);
    }
}
function moveYY(){
    // alert("a")
    if(coordinateY.value < clientX){
        coordinateY.value = parseInt(coordinateY.value) + 1;
        role.style.paddingTop = coordinateY.value + "px";
    }
    else if(coordinateY.value > clientX){
        coordinateX.value = parseInt(coordinateX.value) - 1;
        role.style.paddingTop = coordinateY.value + "px";
    }
    else if(coordinateY.value == clientX){
        clearInterval(mouseTime);
    }
}