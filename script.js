var redsquare = document.querySelector(".square");
var wholecross = document.querySelector(".cross");
var toprightTri = document.querySelector(".triangle-topright");
var botleftTri = document.querySelector(".triangle-bottomleft");
var circle = document.querySelector(".circle");
var circleOne = document.querySelector(".circleOne");
var circleTwo = document.querySelector(".circleTwo");
var circleThree = document.querySelector(".circleThree");
var background =  document.querySelector(".color");

// var timer;

var count = 1;

redsquare.addEventListener("click", function () {
  redsquare.setAttribute("style", "display: none");
  background.setAttribute("style", "background-color: black");

  wholecross.setAttribute("style", "display: block");

  var timer = setInterval(function () {
    console.log(count++);
  }, 1000);

  setTimeout(function () {
    clearInterval(timer);
    // console.log("its working, its working");

    wholecross.setAttribute("style", "display: none");
    background.setAttribute("style", "background-color: green");

    toprightTri.setAttribute("style", "display:block");
  }, 1000);

  var timer2 = setInterval(function () {
    console.log(count++);
  }, 1000);

  setTimeout(function () {
    clearInterval(timer2);

    toprightTri.setAttribute("style", "display:none");
    background.setAttribute("style", "background-color: orange");

    botleftTri.setAttribute("style", "display:block");
  }, 2000);

  var timer3 = setInterval(function () {
    console.log(count++);
  }, 1000);

  setTimeout(function () {
    clearInterval(timer3);

    botleftTri.setAttribute("style", "display:none");
    circle.setAttribute("style", "display:block");
    background.setAttribute("style", "background-color: yellow");
  }, 3000);

  var timer4 = setInterval(function () {
    console.log(count++);
  }, 1000);

  setTimeout(function () {
    clearInterval(timer4);
    background.setAttribute("style", "background-color: white");
    circle.setAttribute("style", "display:none");

    circleOne.setAttribute("style", "display:block");
    circleTwo.setAttribute("style", "display:block");
    circleThree.setAttribute("style", "display:block");


  }, 4000);
});
