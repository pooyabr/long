window.onscroll = myfunc;
window.onload = myfunc;
window.onresize = myfunc;
function myfunc() {
var scrollTop = window.body.scrollTop;
document.getElementById("cloud1").style.left = scrollTop *-0.9  + "px";
document.getElementById("cloud2").style.left = scrollTop *-1.5  + "px";
document.getElementById("cloud3").style.left = scrollTop *-0.5  + "px";

if (scrollTop < 1500) {
  document.getElementById("character").style.top =100+ scrollTop  + "px";
    document.getElementById("character").style.background = "url('img/characterfall.png')";
  document.getElementById("cloud1").style.opacity = 1;
      document.getElementById("cloud2").style.opacity = 1;
      document.getElementById("cloud3").style.opacity = 1;
}

else if (scrollTop >1500 && scrollTop < 6750) {
  document.getElementById("cloud1").style.opacity = 0;
  document.getElementById("cloud2").style.opacity = 0;
  document.getElementById("cloud3").style.opacity = 0;
    document.getElementById("character").style.top = 100+ scrollTop  + "px";
    document.getElementById("bg1").style.left = 1500-scrollTop  + "px";
    document.getElementById("bg1").style.top = scrollTop   + "px";
    document.getElementById("character").style.background = "url('img/character.png')";
        document.getElementById("body").style.background = "#fff";
}


else if ( scrollTop > 6751) {
    document.getElementById("character").style.top = scrollTop  + "px";
    document.getElementById("bg1").style.left = 1500-6751  + "px";
    document.getElementById("bg1").style.top = 6751 + "px";
    document.getElementById("character").style.background = "url('img/characterfalldark.png')";
      document.getElementById("dog").style.top = 500+ scrollTop  + "px";
    document.getElementById("body").style.background = "#000";

}



if (scrollTop > 1500 && scrollTop < 4900) {
  document.getElementById("dog").style.left = -1200 + scrollTop * 0.7  + "px";
  document.getElementById("dog").style.top = 500+ scrollTop  + "px";
  document.getElementById("dog").style.opacity = 1;
      console.log("scrollTop >1500 < 5500 : "+ scrollTop >5501);
}
else if (scrollTop >4901) {

  document.getElementById("dog").style.left = (scrollTop /10) *.9 + "px";
  document.getElementById("dog").style.top = 500+ scrollTop  + "px";
    document.getElementById("dog").style.opacity = 1;
    console.log("scrollTop >5501 : " + scrollTop >5501);
}

else {
  document.getElementById("dog").style.opacity = 0 ;

}

if (scrollTop > 6751) {
              document.getElementById("dog").style.top = 6751 + 500  + "px";
}


if (scrollTop > 7000) {
      document.getElementById("eye").style.opacity = 1;

}
else {
      document.getElementById("eye").style.opacity = 0;

}

}
