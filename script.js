var redsquare = document.querySelector(".square");
var wholecross = document.querySelector(".cross");
var toprightTri = document.querySelector(".triangle-topright");
var botleftTri = document.querySelector(".triangle-bottomleft");
var circle = document.querySelector(".circle");


// var timer;

var count = 1;

redsquare.addEventListener("click", function () {
  redsquare.setAttribute("style", "display: none");

  wholecross.setAttribute("style", "display: block");

  var timer = setInterval(function () {
    console.log(count++);
  }, 1000);

  setTimeout(function () {
    clearInterval(timer);
    // console.log("its working, its working");

    wholecross.setAttribute("style", "display: none");

    toprightTri.setAttribute("style", "display:block");

    

  }, 2000);


  var timer2 = setInterval(function () {
    console.log(count++);
  }, 1000);

  setTimeout(function () {
    clearInterval(timer2);

    toprightTri.setAttribute("style", "display:none");

    botleftTri.setAttribute("style", "display:block");


    
  }, 4000);

  var timer3 = setInterval(function () {
    console.log(count++);
  }, 1000);

  setTimeout(function () {
    clearInterval(timer3);



    botleftTri.setAttribute("style", "display:none");
    circle.setAttribute("style", "display:block");


    
  }, 6000);






});
