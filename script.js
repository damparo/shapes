var redsquare = document.querySelector(".square");


var wholecross = document.querySelector(".cross");

var timer;

var count = 1

redsquare.addEventListener("click", function () {

var timer = setInterval(function(){
    console.log(count++);
            
    }, 1000);


setTimeout(function() {
    clearInterval(timer);
    console.log("its working, its working");
        
    
    redsquare.setAttribute("style", "display: none");
    
    
    wholecross.setAttribute("style", "display: block");
    
    
    
}, 5000);


});


