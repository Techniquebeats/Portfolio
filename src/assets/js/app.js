import gsap from "gsap";
import Swiper from 'swiper';
const bar = document.querySelector(".loading__bar--inner");
const counter_num= document.querySelector(".loading__counter--number");
let c = 0;

let barInterval = setInterval(()=>{
    bar.style.width=c+"%";
    counter_num.innerText=c+"%";
    c++;
    if(c===101){
        clearInterval(barInterval);
        gsap.to(".loading__bar", {                                  //loading bar fly away to the right side
            duration:5,
            rotate:"90deg",
            left: "1000%",
        });
        gsap.to(".loading__text,.loading__counter", {               //text & numbers disappear
            duration:0.5,
            opacity:0,
        });
        gsap.to(".loading__box", {
            duration:1,
            height: "500px",
            borderRadius: "50%",
        });
        gsap.to(".loading__svg", {
            duration:10,
            opacity: 1,
            rotate: "360deg",
        });
        gsap.to(".loading__box", {
            delay: 2,
            height: "500px",
            borderRadius: "50%",
            border: "none",
        });
        gsap.to(".loading", {
            delay: 2,
            duration:2,
            zIndex:1,
            background: "transparent",
            opacity:0.5,
        });
        gsap.to(".loading__svg", {
            delay: 2,
            duration:100,
            rotate: "360deg",
        });
    }
}, 18);

var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

