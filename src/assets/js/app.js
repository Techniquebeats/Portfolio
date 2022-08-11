import gsap from "gsap";
const bar = document.querySelector(".loading__bar--inner");
const counter_num= document.querySelector(".loading__counter--number");
let c = 0;

let barInterval = setInterval(()=>{
    bar.style.width=c+"%";
    counter_num.innerText=c+"%";
    c++;
    if(c===101){
        clearInterval(barInterval);
        gsap.to(".loading__bar", {
            duration:5,
            rotate:"90deg",
            left: "1000%",
        });
        gsap.to(".loading__text,.loading__counter", {
            duration:1,
            opacity:0,
        });
    }
}, 18);

