
roleHeight()




//点击门触发
function xuanRen(){
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



window.onload = function() {
    role.style.marginTop = kt.offsetHeight - 40 + "px"
    role.style.paddingTop = 70 + "px";
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        inventory.style.maxWidth = screen.height + "px";
        inventory.style.maxHeight = screen.width + "px";
        document.getElementById("author").style.maxWidth = screen.height + "px";
        document.getElementById("author").style.maxHeight = screen.width + "px";
        xuan_ren.style.maxWidth = screen.height + "px";
        xuan_ren.style.maxHeight = screen.width + "px";
    }
    
}




//人物初始位置定位
function roleHeight(){
    
    if (/(iPhone|iPod|iOS)/i.test(navigator.userAgent)) { 
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
    } else if (/(iPad)/i.test(navigator.userAgent)) {
        //alert(navigator.userAgent); 
        role.style.paddingLeft = parseInt(window.innerWidth/2) - 60 + "px";
    } else {
        // alert("电脑")
        role.style.paddingLeft = parseInt(kt.offsetWidth/2) - 30  + "px";
        play.style.marginTop = "15%";
    };
}
//获取点击坐标
function get_canvas(ev, obj) {
    if (/(iPhone|iPod|iOS|Android)/i.test(navigator.userAgent)) {
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
        // alert(obj.offsetTop)
        m_clientX = ev.clientX - kb.offsetLeft;
        m_clientY = ev.clientY - kb.offsetTop;
    }
    document.getElementById("tips").innerHTML = "当前坐标：X：" + m_clientX + " ,Y：" + m_clientY;
}
//开始移动
function move(){
    jc();//若函数运行中则终止运行
    zt();//设置函数运行状态，t=1(运行中) t=0(未运行)
    if (/(iPhone|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
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
        window.clientY = clientY - parseInt(role_1.height/4);
    };
    
    roleX()
    var i=0;
    mouseTime = setInterval(function (){  //setInterval可一直执行内部函数
            if (/(iPhone|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
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
        if (/(iPhone|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
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
    if (/(iPhone|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
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
    if (/(iPhone|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
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
        moveMY();
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
        console.log(my_room);
        if (my_room == true) {
            xuan_ren.style.display = "flex";
            menu.style.display = "block";
            xuan_ren_img.style.display = "none"; 
        }else if (my_room == false) {
            console.log(my_room);
            neighbor();
        }
        document.getElementById("men").src = "imges/furniture/men.png";
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


xuan_ren_img.addEventListener("click",function(e){
    console.log(e.target.index);
    if (e.target.index != undefined) {
        var list = [Abigail,Haley,Leah,Maru,Penny,Emily,Alex,Elliott,Harvey,Sam,Sebastian,Shane];
        var name = list[e.target.index];
        for (var i = 0; i < Arr.length; i++) {
            var n = "imges/furniture/k-t/";
            if (i > 11 && i < 24) {
                n = "imges/furniture/k-b-t/";
            }else if (i > 23) {
                n = "imges/furniture/k-b-b/";
            }
            Arr[i].src = n + name[i];
        }
        kt.style.background = "url(imges/wall/" + name[39] + ".png) 0% 0% / auto 100%";
        kb.style.background = "url(imges/floor/" + name[38] + ".png) 0% 0% / auto 100%";
        xuan_ren.style.display = "none";
    }
    
})

function neighbor() {
    console.log(my_room);
    my_room = false;
    xuan_ren.style.display = "flex";
    menu.style.display = "none";
    xuan_ren_img.style.display = "flex";
}
function renovation() {
    console.log("renovation");
    for (var i = 0; i < Arr.length; i++) {
        var n = "imges/furniture/k-t/";
        if (i > 11 && i < 24) {
            n = "imges/furniture/k-b-t/";
        }else if (i > 23) {
            n = "imges/furniture/k-b-b/";
        }
        Arr[i].src = n + install[i];
    }
    for (var i = 0; i < installArr.length; i++) {
        installArr[i].style.pointerEvents = "auto";
        installArr[i].index = i;
        // console.log(installArr[i].index)
    }
    xuan_ren.style.display = "none";
    movek.style.pointerEvents = "none";
    document.getElementById("neighbor_Btn").style.display = "none";
    document.getElementById("renovation_Btn").style.display = "none";
    document.getElementById("save_Btn").style.display = "block";
    document.getElementById("cancel_Btn").style.display = "block";
    document.getElementById("wall_floor_Btn").style.display = "flex";
}
function saveBtn() {
    for (var i = 0; i < Arr.length; i++) {
        var n = "imges/furniture/k-t/";
        if (i > 11 && i < 24) {
            n = "imges/furniture/k-b-t/";
        }else if (i > 23) {
            n = "imges/furniture/k-b-b/";
        }
        Arr[i].src = n + user[i];
    }
    for (var i = 0; i < installArr.length; i++) {
        installArr[i].style.pointerEvents = "none";
    }
    movek.style.pointerEvents = "auto";
    xuan_ren.style.display = "none";
    document.getElementById("neighbor_Btn").style.display = "block";
    document.getElementById("renovation_Btn").style.display = "block";
    document.getElementById("save_Btn").style.display = "none";
    document.getElementById("cancel_Btn").style.display = "none";
    document.getElementById("wall_floor_Btn").style.display = "none";
}
function cancelBtn() {
    xuan_ren.style.display = "none";
}



// ktl.style.width = parseInt((kt_w - 48)/2) + "px";
// ktr.style.width = parseInt((kt_w - 48)/2) + "px";

var renovation_Num;
var renovation_img;
var k = document.getElementById("k");
var icon_width;
k.addEventListener("click",function(e){
    if (e.target.index != undefined) {
        inventory.style.display = "flex";
        renovation_Num = e.target.index;
        establish_fun()
        for (var i = 0; i < installArr.length; i++) {
            installArr[i].style.pointerEvents = "none";
        }
    }
    console.log(renovation_Num);
})
icon_box.addEventListener("click",function(e){
    console.log(e.target.index)
    if (e.target.index != undefined) {
        if (ICON == "k-b-t") {
            if (e.target.index > 85) {
                inventory_l_img.src = "imges/furniture/" + ICON + "/" + e.target.index + ".gif"
            }else{
                inventory_l_img.src = "imges/furniture/" + ICON + "/" + e.target.index + ".png"  
            }
        }else if (ICON == "k-b-b") {
            if (e.target.index > 67) {
                inventory_l_img.src = "imges/furniture/" + ICON + "/" + e.target.index + ".gif"
            }else {
                inventory_l_img.src = "imges/furniture/" + ICON + "/" + e.target.index + ".png"  
            }
        }else if (ICON == "k-t") {
            inventory_l_img.src = "imges/furniture/" + ICON + "/" + e.target.index + ".png"  
        }else if (ICON == "wall") {
            inventory_t_t.style.background = "url(imges/wall/" + e.target.index +".png) bottom";
        }else if (ICON == "floor") {
            inventory_t_b.style.background = "url(imges/floor/" + e.target.index +".png)";
        }
        if (renovation_Num < 12) {
            var ARR = ARR_width[0];
        }else if (renovation_Num > 23) {
            var ARR = ARR_width[2];
        }else{
            var ARR = ARR_width[1];
        }
        renovation_img = e.target.index;
        icon_width = ARR[renovation_img];
        inventory_l_img.style.width = ARR[renovation_img]*48 + "px"
        inventory_l_img.style.marginLeft = Math.abs(ARR[renovation_img]-3)*24 + "px"
        IMG_width = ARR[renovation_img];
    }
})
function determine() {
    if (ICON == "k-b-t") {
        if (renovation_img > 85) {
            Arr[renovation_Num].src = "imges/furniture/" + ICON + "/" + renovation_img + ".gif"
            user.splice(renovation_Num,1,renovation_img + ".gif");
        }else{
           Arr[renovation_Num].src = "imges/furniture/" + ICON + "/" + renovation_img + ".png"
            user.splice(renovation_Num,1,renovation_img + ".png"); 
        }
        save_img.splice(renovation_Num,1,icon_width);
        inventory_l_img.src = "imges/furniture/" + ICON + "/0.png"
    }else if (ICON == "k-b-b") {
        if (renovation_img > 67) {
            Arr[renovation_Num].src = "imges/furniture/" + ICON + "/" + renovation_img + ".gif"
            user.splice(renovation_Num,1,renovation_img + ".gif");
        }else{
            Arr[renovation_Num].src = "imges/furniture/" + ICON + "/" + renovation_img + ".png"
            user.splice(renovation_Num,1,renovation_img + ".png");
        }
        save_img.splice(renovation_Num,1,icon_width);
        inventory_l_img.src = "imges/furniture/" + ICON + "/0.png"
    }else if (ICON == "k-t"){
        Arr[renovation_Num].src = "imges/furniture/" + ICON + "/" + renovation_img + ".png"
        save_img.splice(renovation_Num,1,icon_width);
        user.splice(renovation_Num,1,renovation_img + ".png"); 
        inventory_l_img.src = "imges/furniture/" + ICON + "/0.png"
    }else if (ICON == "wall") {
        kt.style.background = "url(imges/wall/" + renovation_img + ".png) 0% 0% / auto 100%";
        user.splice(39,1,renovation_img);
    }else if (ICON == "floor") {
        kb.style.background = "url(imges/floor/" + renovation_img + ".png) 0% 0% / auto 100%";
        user.splice(38,1,renovation_img);
    }
    console.log(installArr[renovation_Num])
    inventory.style.display = "none";
    icon_box.innerHTML = "";
    icon_box.style.top = "0px";
    scrollbar_div.style.top = "0px";
    // console.log(install);
    // console.log(user);

    Disable();
}
function cancel() {
    console.log("cancel")
    inventory.style.display = "none";
    icon_box.innerHTML = "";
    inventory_l_img.src = "imges/furniture/" + ICON + "/0.png"
    icon_box.style.top = "0px";
    scrollbar_div.style.top = "0px";
    for (var i = 0; i < installArr.length; i++) {
        installArr[i].style.pointerEvents = "auto";
        installArr[i].index = i;
        // console.log(installArr[i].index)
    }
}
function Disable() {
    console.log("Disable")
    for (var i = 0; i < install.length; i++) {
        if (i < 12) {
            // console.log(user[i])
            if (user[i] != "0.png") {
                Arr[i].src = "imges/furniture/k-t/" + user[i];
            }else{
                Arr[i].src = "imges/furniture/k-t/" + install[i];
            }
        }else if (i > 23) {
            if (user[i] != "0.png") {
                Arr[i].src = "imges/furniture/k-b-b/" + user[i];
            }else{
                Arr[i].src = "imges/furniture/k-b-b/" + install[i];
            }
        }else{
            if (user[i] != "0.png") {
                Arr[i].src = "imges/furniture/k-b-t/" + user[i];
            }else{
                Arr[i].src = "imges/furniture/k-b-t/" + install[i];
            }
        }
        Arr[i].parentNode.style.pointerEvents = "auto";
    }
    for (var i = 0; i < save_img.length; i++) {
        if (save_img[i] > 0) {
            for (var x = 1; x < save_img[i]; x++) {
                Arr[i + x].src = "imges/furniture/" + ICON + "/0.png";
                Arr[i + x].parentNode.style.pointerEvents = "none";
                user.splice(i+x,1,"0.png");
                save_img.splice(i+x,1,0);
            }
        }
    }
}
function wall() {
    inventory.style.display = "flex";
    renovation_Num = "wall";
    ICON = "wall"
    inventory_t_t.style.height = "138px"
    for (var i = 0; i < installArr.length; i++) {
        installArr[i].style.pointerEvents = "none";
    }
    for (var i = 0 ; i < 36; i++) {
        var div = document.createElement("div");
        div.style.background = "url(imges/" + ICON +"/icon.png)";
        div.index = i;
        div.style.backgroundPosition = i*-48 + "px";
        icon_box.appendChild(div).className = "icon";
    }
}
function floor() {
    inventory.style.display = "flex";
    renovation_Num = "floor";
    ICON = "floor"
    inventory_t_t.style.height = "138px"
    for (var i = 0; i < installArr.length; i++) {
        installArr[i].style.pointerEvents = "none";
    }
    for (var i = 0 ; i < 26; i++) {
        var div = document.createElement("div");
        div.style.background = "url(imges/" + ICON +"/icon.png)";
        div.index = i;
        div.style.backgroundPosition = i*-48 + "px";
        icon_box.appendChild(div).className = "icon";
    }
}
var ICON = "k-t";
var ICON_Num = 70;

var icon_Num_1;
var scrollbar_H;






function establish_fun() {
    console.log(renovation_Num)
    if (renovation_Num < 12) {
        ICON = "k-t";
        ICON_Num = 70;
        if (renovation_Num == 11 || renovation_Num == 5) {
            var Range = 1;
        }
        if (renovation_Num == 10 || renovation_Num == 4) {
            var Range = 2;
        }
        var ARR = ARR_width[0];
        inventory_t_t.style.height = "138px"
        var ttt = parseInt(inventory_l_m.offsetHeight/5);
        inventory_l_img.style.top = ttt + "px"
    }else if (renovation_Num > 23) {
        ICON = "k-b-b";
        ICON_Num = 76;
        if (renovation_Num == 37) {
            var Range = 1;
        }
        if (renovation_Num == 36) {
            var Range = 2;
        }
        var ARR = ARR_width[2];
        inventory_t_t.style.height = "38px";
        var ttt = inventory_t.offsetHeight - 160;
        console.log(inventory_t.offsetHeight)
        inventory_l_img.style.top = ttt + "px"
    }else{
        ICON = "k-b-t";
        ICON_Num = 91;
        if (renovation_Num == 23 || renovation_Num == 17) {
            var Range = 1;
        }
        if (renovation_Num == 22 || renovation_Num == 16) {
            var Range = 2;
        }
        if (renovation_Num == 21 || renovation_Num == 15) {
            var Range = 3;
        }
        var ARR = ARR_width[1];
        var hhh = parseInt(inventory_t.offsetHeight/2);
        inventory_t_t.style.height = hhh + "px"
        var ttt = parseInt(inventory_t.offsetHeight/4);
        inventory_l_img.style.top = ttt + "px"
    }
    console.log(ICON)
    for (var i = 0 ; i < ICON_Num; i++) {
        var div = document.createElement("div");
        div.style.background = "url(imges/furniture/" + ICON + "/icon.png)";
        div.index = i;
        div.style.backgroundPosition = i*-48 + "px";
        if (ARR[i] > Range) {
            div.style.pointerEvents = "none";
            div.style.opacity = "0.5";
        }
        icon_box.appendChild(div).className = "icon";
    }
    if (70%parseInt(icon_box.offsetWidth/60) != 0) {//空按钮,填充空位
        icon_Num_1 = parseInt(icon_box.offsetWidth/60) - (70%parseInt(icon_box.offsetWidth/60))
    }else{
        icon_Num_1 = 0;
    }
    icon_box.style.width = inventory_r_m_1.offsetWidth -20 + "px";
    inventory_r_m_1.style.height = inventory_l_m_2.offsetHeight + "px";
    icon_box_H = inventory_r_m_1.offsetHeight - icon_box.offsetHeight;
    scrollbar_H = (scrollbar.offsetHeight-30)/(icon_box.offsetHeight-inventory_l_m_2.offsetHeight);
    inventory_l_img.src = "imges/furniture/" + ICON + "/" + user[renovation_Num];
    inventory_l_img.style.width = ARR[renovation_img]*48 + "px"
    inventory_l_img.style.marginLeft = Math.abs(ARR[renovation_img]-3)*24 + "px"

}


var iconArr = document.getElementsByClassName("icon");
for (var i = 0 ; i < iconArr.length; i++) {
    iconArr[i].index = i;
    // console.log(iconArr[i].index)
}



var X = 0;
var Y = 0;
var boxT = 0;
var boxL = 0;
var box_state = false;
inventory_r_m_1.onmousedown = function(e) {//鼠标移入菜单滚动条时开启农场移动状态
    X = e.clientX;
    Y = e.clientY;
    //获取偏移量
    boxT = icon_box.offsetTop;
    boxL = icon_box.offsetLeft;
    box_state = true;
}
window.onmousemove = function(e) {
    var icon_X = e.clientX;
    var icon_Y = e.clientY;
    icon_L = icon_X - (X + boxT);
    icon_T = icon_Y - (Y - boxT);
    if (box_state == true) {
        if (icon_T > 0) {
            icon_T = 0;
        }else if (icon_T < icon_box_H) {
            icon_T = icon_box_H;
        }
        icon_box.style.top = icon_T + "px";
        scrollbar_div.style.top = -(icon_T*scrollbar_H) + "px";
    }
    
}
window.onmouseup = function() {
    box_state = false;
}
inventory_r_m_1.addEventListener("touchstart", function(e) {//鼠标移入农场时开启农场移动状态
    //获取坐标
    X = e.targetTouches[0].clientX;
    Y = e.targetTouches[0].clientY;
    //获取偏移量
    boxT = icon_box.offsetTop;
    boxL = icon_box.offsetLeft;
})
window.addEventListener('touchmove', function(e) {
    var icon_X = e.targetTouches[0].clientX;
    var icon_Y = e.targetTouches[0].clientY;
    icon_L = icon_X - (X + boxT);
    icon_T = icon_Y - (Y - boxT);
    if(window.orientation == 180 || window.orientation == 0 && /(iPhone|iPod|iOS|Android)/i.test(navigator.userAgent)){
        //竖屏
        if (-icon_L > 0) {
            icon_L = 0;
        }
        else if (-icon_L < icon_box_H) {
            icon_L = -icon_box_H;
        }
        icon_box.style.top = -icon_L + "px";
        scrollbar_div.style.top = icon_L*scrollbar_H + "px";
    }else if(window.orientation == 90 || window.orientation == -90 && /(iPhone|iPod|iOS|Android)/i.test(navigator.userAgent)){
        //横屏
        if (icon_T > 0) {
            icon_T = 0;
        }else if (icon_T < icon_box_H) {
            icon_T = icon_box_H;
        }
        icon_box.style.top = icon_T + "px";
        scrollbar_div.style.top = -(icon_T*scrollbar_H) + "px";
    }
})




window.addEventListener('touchend', function() {//结束移动函数
    // console.log(icon_box.offsetTop)
    // if (icon_box.offsetTop > 0) {
    //     icon_box.style.top = "0px";
    //     scrollbar_div.style.top = "0px";
    // }else if (icon_box.offsetTop < icon_box_H) {
    //     icon_box.style.top = icon_box_H + "px";
    //     scrollbar_div.style.top = scrollbar.offsetHeight - 30 + "px";
    // }
})

function author() {
    document.getElementById("author").style.display = "flex";
    var author_H = document.getElementById("author-body").offsetHeight;
    document.getElementById("author-2").style.height = author_H - 36 + "px";
}
function return_room() {
    my_room = true;
    for (var i = 0; i < Arr.length; i++) {
        var n = "imges/furniture/k-t/";
        if (i > 11 && i < 24) {
            n = "imges/furniture/k-b-t/";
        }else if (i > 23) {
            n = "imges/furniture/k-b-b/";
        }
        Arr[i].src = n + user[i];
    }
    kt.style.background = "url(imges/wall/" + user[39] + ".png) 0% 0% / auto 100%";
    kb.style.background = "url(imges/floor/" + user[38] + ".png) 0% 0% / auto 100%";
    xuan_ren.style.display = "none";
}
function author_X() {
    document.getElementById("author").style.display = "none";
}


