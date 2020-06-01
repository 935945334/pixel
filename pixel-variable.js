var coordinateX = document.getElementById("coordinate-x");
var coordinateY = document.getElementById("coordinate-y");
var role = document.getElementById("role");
var kt = document.getElementById("k-t");
var kt_w = kt.scrollWidth;
console.log(kt_w)
var kb = document.getElementById("k-b");
var kl = document.getElementById("k-l");
var role_1 = document.getElementById("role-1");
var role_img = "imges/Abigail/Abigail.png";
var role_top = "imges/Abigail/top.gif";
var role_bottom = "imges/Abigail/bottom.gif";
var role_left = "imges/Abigail/left.gif";
var role_right = "imges/Abigail/right.gif";
var t = 0; 
var play = document.getElementById("play");
var kr = document.getElementById("k-r");
var k = document.getElementById("k");
var furniture = document.getElementById("furniture");
var choice = document.getElementById("choice");
var kb1 = document.getElementById("k-b-1");
var txt = 0;
var movek = document.getElementById("movek");
var ktl = document.getElementById("k-t-l");
var ktr = document.getElementById("k-t-r");
var k_t_l = document.getElementsByClassName("k-t-l-div");
var k_t_r = document.getElementsByClassName("k-t-r-div");
var k_b_t_l = document.getElementsByClassName("k-b-t-l-div");
var k_b_t_r = document.getElementsByClassName("k-b-t-r-div");
var k_b_b = document.getElementsByClassName("k-b-b-div");
var portrait = document.getElementsByClassName("portrait");
var xuan_ren = document.getElementById("xuan_ren");
var xuan_ren_img = document.getElementById("xuan_ren_img");
var menu = document.getElementById("menu");
var ArrArr = [k_t_l,k_t_r,k_b_t_l,k_b_t_r,k_b_b];
var Arr = document.getElementsByClassName("play-img");

var Abigail = ["6.png","1.png","5.png","23.png","0.png","2.png","22.png","0.png","34.png","0.png","1.png","4.png","16.png","0.png","39.png","0.png","0.png","29.png","0.png","0.png","2.png","0.png","1.png","0.png","17.png","15.png","32.png","0.png","0.png","Abigail.gif","0.png","0.png","16.png","0.png","0.png","0.png","2.png","3.png",1,5];
var Haley = ["14.png","0.png","14.png","0.png","25.png","0.png","14.png","34.png","14.png","15.png","14.png","13.png","40.png","0.png","0.png","34.png","0.png","0.png","0.png","41.png","7.png","0.png","8.png","27.png","18.png","35.png","23.png","0.png","0.png","Haley.gif","0.png","0.png","0.png","37.png","0.png","0.png","10.png","0.png",1,8];
var Leah = ["12.png","1.png","34.png","6.png","11.png","9.png","10.png","0.png","0.png","0.png","1.png","0.png","18.png","0.png","0.png","42.png","5.png","6.png","0.png","43.png","26.png","0.png","45.png","46.png","20.png","21.png","0.png","0.png","15.png","22.png","7.png","8.png","Leah.gif","0.png","0.png","37.png","0.png","25.png",6,7];
var Maru = ["17.png","0.png","0.png","34.png","27.png","0.png","18.png","0.png","26.png","0.png","0.png","19.png","47.png","0.png","27.png","36.png","10.png","0.png","0.png","35.png","9.png","0.png","20.png","0.png","24.png","0.png","36.png","0.png","38.png","0.png","0.png","26.png","Maru.gif","0.png","0.png","0.png","25.png","11.png",9,9];
var Penny = ["34.png","0.png","37.png","0.png","0.png","0.png","36.png","0.png","0.png","0.png","28.png","0.png","51.png","23.png","3.png","0.png","Penny.gif","50.png","28.png","24.png","0.png","48.png","18.png","0.png","17.png","41.png","0.png","0.png","40.png","0.png","0.png","39.png","0.png","15.png","19.png","0.png","5.png","0.png",6,6];
var Emily = ["29.png","0.png","38.png","0.png","13.png","1.png","0.png","30.png","0.png","0.png","1.png","13.png","11.png","0.png","22.png","0.png","12.png","0.png","parrot.gif","0.png","0.png","43.png","52.png","0.png","28.png","30.png","0.png","42.png","0.png","Emily.gif","0.png","0.png","39.png","0.png","0.png","12.png","0.png","0.png",11,10];
var Alex = ["0.png","19.png","0.png","39.png","40.png","0.png","41.png","34.png","1.png","19.png","1.png","13.png","52.png","0.png","48.png","7.png","0.png","51.png","54.png","55.png","56.png","53.png","24.png","0.png","43.png","0.png","0.png","44.png","0.png","48.png","0.png","Alex.gif","0.png","47.png","45.png","0.png","0.png","46.png",15,11];
var Elliott = ["0.png","42.png","0.png","0.png","0.png","0.png","43.png","0.png","0.png","0.png","0.png","44.png","61.png","0.png","Elliott.gif","0.png","0.png","0.png","63.png","59.png","0.png","0.png","0.png","60.png","49.png","0.png","50.png","0.png","54.png","0.png","0.png","0.png","0.png","0.png","8.png","51.png","0.png","52.png",6,12];
var Harvey = ["47.png","0.png","0.png","1.png","0.png","0.png","48.png","34.png","46.png","0.png","45.png","0.png","52.png","0.png","64.png","0.png","0.png","68.png","0.png","0.png","65.png","0.png","0.png","67.png","32.png","55.png","0.png","0.png","0.png","0.png","0.png","0.png","42.png","57.png","0.png","0.png","56.png","0.png",1,14];
var Sam = ["49.png","32.png","34.png","0.png","51.png","0.png","50.png","0.png","0.png","0.png","52.png","0.png","15.png","0.png","0.png","69.png","70.png","0.png","51.png","24.png","0.png","0.png","71.png","0.png","32.png","0.png","0.png","0.png","0.png","0.png","Sam.gif","0.png","0.png","0.png","0.png","0.png","2.png","1.png",6,13];
var Sebastian = ["1.png","0.png","19.png","31.png","0.png","20.png","33.png","0.png","0.png","32.png","0.png","1.png","72.png","0.png","Sebastian.gif","0.png","0.png","0.png","13.png","0.png","0.png","14.png","73.png","0.png","32.png","0.png","0.png","59.png","58.png","0.png","0.png","59.png","0.png","0.png","0.png","0.png","60.png","0.png",12,2];
var Shane = ["0.png","53.png","0.png","34.png","0.png","16.png","16.png","0.png","34.png","0.png","21.png","50.png","18.png","0.png","0.png","57.png","77.png","0.png","0.png","78.png","38.png","74.png","75.png","0.png","61.png","62.png","63.png","0.png","39.png","0.png","0.png","Shane.gif","0.png","0.png","0.png","64.png","6.png","0.png",1,15];

















// console.log(Arr.length)
// console.log(Abigail.length)


for (var i = 0; i < portrait.length; i++) {
	portrait[i].index = i
}





