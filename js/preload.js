/**
 * Created by goldenmelon on 22.08.15.
 */
/*var arr = new Array(5);
 for(var i = 0; i < arr.length; i++){
 arr[i] = new Image();
 }
 arr[0].src = "../images/shutterstock_70010998_720.jpg";
 arr[1].src = "../images/shutterstock_92066195_720..jpg";
 arr[2].src = "../images/shutterstock_107922686_720.jpg";
 arr[3].src = "../images/shutterstock_109936955_720.jpg";
 arr[4].src = "../images/shutterstock_153829943_720.jpg";*/
var image = new Image();
image.src = "../images/shutterstock_70010998.jpg";
window.onload = function () {
    var preloader = document.getElementById("fixed-box");
    var opacity = 1;

    setInterval(function () {
        opacity = opacity - 0.01;
        preloader.style.opacity = opacity;
        var ieopacity = opacity * 100;
        preloader.style.filter = "alpha(opacity=" + ieopacity + ")";
    }, 10);
    setTimeout(function () {
        document.body.removeChild(preloader);
    }, 1000)
};