
roleHeight()
moveK()

function moveK(){
    movek.style.width = kb.offsetWidth - role_1.offsetWidth + 20 + "px";
    movek.style.height = kb.offsetHeight + "px";
    // kb1.style.height = kb.offsetHeight + "px";
}



//点击门触发
function xuanRen(){
    if (txt == 0) {
        document.getElementById("coordinate").style.display = "block";
        window.txt = 1;
    }else if (txt == 1) {
        document.getElementById("coordinate").style.display = "none";
        window.txt = 0;
    }





    jc();//若函数运行中则终止运行
    zt();//设置函数运行状态，t=1(运行中) t=0(未运行)
    roleMX();
    var i=0;
    //向门X轴移动的mouseTime
    mouseTime = setInterval(function (){  //setInterval可一直执行内部函数
        moveMX();  //执行向门X轴移动
        i++  //执行一次i++
    }, 5); 
}








//人物初始位置定位
function roleHeight(){
    role.style.marginTop = kt.offsetHeight - 60 + "px"
    role.style.paddingTop = 70 + "px";
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { 
        // alert("苹果")
        if (window.orientation == 90 || window.orientation == -90) {
            role.style.paddingLeft = parseInt(window.innerWidth/2) - 60 + "px";
        }else if(window.orientation == 180 || window.orientation == 0){
            role.style.paddingLeft = parseInt(window.innerHeight/2) - 60  + "px";
        }
    } else if (/(Android)/i.test(navigator.userAgent)) {
        // alert("安卓")
        if (window.orientation == 90 || window.orientation == -90) {
            role.style.paddingLeft = parseInt(window.innerWidth/2) - 60 + "px";
        }else if(window.orientation == 180 || window.orientation == 0){
            role.style.paddingLeft = parseInt(window.innerHeight/2) - 60  + "px";
        }
    } else {
        // alert("电脑")
        role.style.paddingLeft = parseInt(kt.offsetWidth/2) - 30  + "px";
    };
}
//获取点击坐标
function get_canvas(ev, obj) {
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
        // alert("手机")
        if (window.orientation == 90 || window.orientation == -90) {
            // alert("横屏");
            m_clientX = ev.clientX - kl.offsetWidth;
            m_clientY = ev.clientY - kt.offsetHeight;
        }else if(window.orientation == 180 || window.orientation == 0) {
            // alert("竖屏");
            m_clientX = ev.clientX - kb.offsetHeight;
            m_clientY = ev.clientY - kl.offsetWidth;
        } 
    }else{
        // alert("电脑")
        m_clientX = ev.clientX - obj.offsetLeft;
        m_clientY = ev.clientY - obj.offsetTop;
    }
    document.getElementById("tips").innerHTML = "当前坐标：X：" + m_clientX + " ,Y：" + m_clientY;
}
//开始移动
function move(){
    jc();//若函数运行中则终止运行
    zt();//设置函数运行状态，t=1(运行中) t=0(未运行)
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
        // alert("手机");
        if (window.orientation == 90 || window.orientation == -90) {
            // alert("横屏");
            // alert("定义坐标正常");
            var clientX = m_clientX;
            var clientY = m_clientY;
            window.clientX = clientX - parseInt(window.innerWidth/2) + 30 ;
            window.clientY = clientY - parseInt(role_1.height/3);
        }else if(window.orientation == 180 || window.orientation == 0){
            // alert("竖屏");
            // alert("定义坐标正常");
            var clientX = -m_clientX;
            var clientY = m_clientY;
            window.clientX = clientX - parseInt(role_1.height/3);
            window.clientY = clientY - parseInt(window.innerHeight/2) + 30;
        }
    }else{
        // alert("电脑");
        var clientX = m_clientX;
        var clientY = m_clientY;
        window.clientX = clientX - parseInt(kt.offsetWidth/2);
        window.clientY = clientY - parseInt(role_1.height/3);
    };
    
    roleX()
    var i=0;
    mouseTime = setInterval(function (){  //setInterval可一直执行内部函数
            if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
                // alert("手机");
                if (window.orientation == 90 || window.orientation == -90) {
                    // alert("苹果");
                    // alert("横屏");
                    moveXX();
                }else if(window.orientation == 180 || window.orientation == 0){
                    // alert("苹果");
                    // alert("竖屏");
                    moveXY();
                }
            }else{
                // alert("电脑");
                moveXX();
            };
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
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
            // alert("手机");
            if (window.orientation == 90 || window.orientation == -90) {
                // alert("苹果");
                // alert("横屏");
                moveYX();
            }else if(window.orientation == 180 || window.orientation == 0){
                // alert("苹果");
                // alert("竖屏");
                moveYY();
            }
        }else{
            // alert("电脑");
            moveYX();
        };
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
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
        // alert("手机");
        if (window.orientation == 90 || window.orientation == -90) {
            // alert("苹果");
            // alert("横屏");
            if (coordinateX.value < clientX) {
                role_1.src = role_right;
            }else if(coordinateX.value > clientX){
                role_1.src = role_left;
            }
        }else if(window.orientation == 180 || window.orientation == 0){
            // alert("苹果");
            // alert("竖屏");
            if (coordinateX.value < clientY) {
                role_1.src = role_right;
            }else if(coordinateX.value > clientY){
                role_1.src = role_left;
            }
        }
    }else{
        // alert("电脑");
        if (coordinateX.value < clientX) {
            role_1.src = role_right;
        }else if(coordinateX.value > clientX){
            role_1.src = role_left;
        }
    };   
}
function roleY(){
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
        // alert("手机");
        if (window.orientation == 90 || window.orientation == -90) {
            // alert("苹果");
            // alert("横屏");
            if (coordinateY.value < clientY) {
                role_1.src = role_bottom;
            }else if(coordinateY.value > clientY){
                role_1.src = role_top;
            }
        }else if(window.orientation == 180 || window.orientation == 0){
            // alert("苹果");
            // alert("竖屏");
            if (coordinateY.value < clientX) {
                role_1.src = role_bottom;
            }else if(coordinateY.value > clientX){
                role_1.src = role_top;
            }
        }
    }else{
        // alert("电脑");
        if (coordinateY.value < clientY) {
            role_1.src = role_bottom;
        }else if(coordinateY.value > clientY){
            role_1.src = role_top;
        }
    };
}

//向门移动的功能区↓
//向门X轴移动
function moveMX(){
    // alert("横屏")
    if(coordinateX.value < 0){
        coordinateX.value = parseInt(coordinateX.value) + 1;
        role.style.marginLeft = coordinateX.value + "px";
    }
    else if(coordinateX.value > 0){
        coordinateX.value = parseInt(coordinateX.value) - 1;
        role.style.marginLeft = coordinateX.value + "px";
    }
    else if(coordinateX.value == 0){
        clearInterval(mouseTime);
        moveMY()
    }
}

//向门Y轴移动的mouseTime
function moveMY(){
    roleMY()
    var i=0;
    mouseTime = setInterval(function (){  //setInterval可一直执行内部函数
        moveMYX();
        i++  //执行一次i++
    }, 5);
}


//向门Y轴移动
function moveMYX(){
    if(coordinateY.value < 0){
        coordinateY.value = parseInt(coordinateY.value) + 1;
        role.style.paddingTop = coordinateY.value + "px";
    }
    else if(coordinateY.value > 0){
        coordinateY.value = parseInt(coordinateY.value) - 1;
        role.style.paddingTop = coordinateY.value + "px";
    }
    else if(coordinateY.value == 0){
        clearInterval(mouseTime);
        var t = 0;
        window.t = t;
        role_1.src = role_img;
    }
}

//向门Y轴移动时的贴图
function roleMY(){
    if (coordinateY.value < 0) {
        role_1.src = role_bottom;
    }else if(coordinateY.value > 0){
        role_1.src = role_top;
    }
}
//向门X轴移动时的贴图
function roleMX(){
    if (coordinateX.value < 0) {
        role_1.src = role_right;
    }else if(coordinateX.value > 0){
        role_1.src = role_left;
    }
}
//向门移动的功能区↑