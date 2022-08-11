const bar = document.querySelector(".loading__bar--inner");
let c = 0;

let barInterval = setInterval(()=>{
    bar.style.width=c+"%";
    c++;
}, 500);