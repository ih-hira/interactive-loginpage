(function () {
    var canvas = document.getElementById("mainCanvas");
    var angle = -10;
    var alterRotation = 0;
    setInterval(function () 
    {
        canvas.setAttribute("style", "background:linear-gradient(" + angle + "deg, #00FF66, #33FF99, #00FFFF);");
        if (!alterRotation) 
        { 
            angle += 2; 
            if (angle > 360) 
            {
                alterRotation = 1;
            }
        }
        if (alterRotation) 
        { 
            angle -= 2; 
            if (angle < -10) 
            {
                alterRotation = 0;
            }
        }

        
    }, 100);
})();

var passElement = document.getElementById("password");
var userElement = document.getElementById("username");
var emoj = document.getElementById("emojs");

passElement.addEventListener("click", function(){
    emoj.src = "images/suspicious.png";
});

userElement.addEventListener("click", function(){
    emoj.src = "images/happy.png";
});