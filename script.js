let moon=document.createElement("i")
moon.className="fa-solid fa-moon"


let sun=document.createElement("i")
sun.className="fa-solid fa-sun"



let parent_m = document.getElementById("dark");
let parent_s = document.getElementById("light");


parent_m.append(moon);
sun.style.display = "none";  // Pehle se moon hide
document.body.style.backgroundImage="linear-gradient(to right,rgb(186, 229, 250),rgb(205, 223, 241))"
parent_s.append(sun);





    moon.addEventListener('click',function(){
    document.body.style.backgroundImage="linear-gradient(to right,rgb(61, 8, 57) 50%,rgb(24, 45, 67))"

moon.style.display="none"
sun.style.display="inline"
    }
    )

    sun.addEventListener('click',function(){
    document.body.style.backgroundImage="linear-gradient(to right,rgb(186, 229, 250),rgb(205, 223, 241))"
sun.style.display="none"
moon.style.display="inline"
    }
    )
    

// let light=document.querySelector()