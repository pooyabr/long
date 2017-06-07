function characterPosition() {
  var scrollTop = document.body.scrollTop;
 var scrollLeft = document.body.scrollLeft;
if (scrollTop < 1500) {
document.getElementById("character").style.background = "url('img/characterfall.png')";
document.getElementById("cloud1").style.left = -(scrollTop)* 1.1  + "px";
document.getElementById("cloud2").style.left = -(scrollTop)* 0.9  + "px";
document.getElementById("cloud3").style.left = -(scrollTop)* 1.63  + "px";
document.getElementById("character").style.top = 200 + scrollTop + "px";
document.getElementById("bg1").style.left = 0 + "px";
console.log(scrollTop + " scrollTop")
}
else if (scrollTop > 1500 && scrollTop <7500) {
    document.getElementById("character").style.background = "url('img/character.png')";
document.getElementById("character").style.top = 200 + scrollTop + "px";
document.getElementById("bg1").style.left = -(scrollTop)* 0.7  + "px";
document.getElementById("bg1").style.top = 100 + scrollTop + "px";
document.getElementsByTagName("body")[0].className += "MyClass";
console.log(scrollTop + " scrollTop / 14")
}


else if (scrollTop > 7501) {
/*document.getElementById("body").style.backgroundimage = "black";
document.getElementById("character").style.top = 200 + scrollTop + "px";
//document.getElementById("bg1").style.left = -(scrollTop)* 0.7  + "px";
document.getElementById("bg1").style.top = 100 + scrollTop *0.5 + "px";
console.log(scrollTop + " scrollTop / 14")*/
document.getElementById("character").style.background = "url('img/characterfalldark.png')";
document.getElementById("character").style.top = 200 + scrollTop + "px";
document.getElementsByTagName("body")[0].style.background = "#242424";
}

}

function dogPosition() {
  var scrollTop = document.body.scrollTop;
   console.log("Dog Left : " + scrollTop);

  if (scrollTop > 1700 && scrollTop <7500) {
      document.getElementById("dog").style.opacity = 1 ;
             document.getElementById("dog").style.top = 580 + scrollTop + "px";
             //document.getElementById("dog").style.left = -(scrollTop)*0.7 + "px";

            var i = 0;

             while (i < 900) {
               document.getElementById("dog").style.left = -(scrollTop /20) + "px";
               i = i + 200;

             }
             var dogC = document.getElementById("dog");
             console.log("Dog Left : " + dogC.scrollLeft);
}
else if (scrollTop <= 1599){
  document.getElementById("dog").style.opacity = 0 ;
}
}













/*function containpic() {
  var i = 0;
while (i < 10) {
  var h = window.innerHeight;
  var w = window.innerWidth;
  var pic = document.getElementsByClassName("biggest")[i];
  var left = w - pic.width;
document.getElementsByClassName("biggest")[i].setAttribute("width" ,w );
while (pic.height > h) {
  w--;
  document.getElementsByClassName("biggest")[i].setAttribute("width" ,w );
}
i++;
}
  console.log("left :  " + left);
  console.log("w " + w);
  console.log("pic Width : " +  pic.width +"pic height : " +  pic.height );
  console.log("h " + h);
  console.log();
}


*/
