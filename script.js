/* ==========================
   TOTALLY WICKED
   SCRIPT
========================== */

/*==========================
FADE IN ON SCROLL
==========================*/

const fadeElements = document.querySelectorAll(
".stat, .category-card, .why-us, .review, .visit, .loyalty"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade");
entry.target.classList.add("active");

}

});

},{
threshold:0.15
});

fadeElements.forEach(item=>{

observer.observe(item);

});

/*==========================
COUNTER ANIMATION
==========================*/

const counters = document.querySelectorAll(".stat h2");

let counted = false;

window.addEventListener("scroll",()=>{

const stats = document.querySelector(".stats");

if(!stats) return;

const trigger = stats.offsetTop - 500;

if(window.scrollY > trigger && !counted){

counted = true;

counters.forEach(counter=>{

const text = counter.innerText;

const number = parseInt(text);

if(isNaN(number)) return;

let current = 0;

const increment = Math.ceil(number/80);

const timer = setInterval(()=>{

current += increment;

if(current >= number){

counter.innerText = number + "+";

clearInterval(timer);

}else{

counter.innerText = current + "+";

}

},18);

});

}

});

/*==========================
NAVBAR SHRINK
==========================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 40){

header.style.boxShadow="0 8px 25px rgba(0,0,0,.15)";
header.style.background="#ffffffee";
header.style.backdropFilter="blur(12px)";

}else{

header.style.boxShadow="0 3px 18px rgba(0,0,0,.08)";
header.style.background="#fff";
header.style.backdropFilter="blur(0px)";

}

});

/*==========================
ACTIVE NAVIGATION
==========================*/

const links = document.querySelectorAll(".nav-links a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(l=>l.classList.remove("active"));

link.classList.add("active");

});

});

/*==========================
BUTTON RIPPLE
==========================*/

const buttons = document.querySelectorAll(".primary-btn,.secondary-btn,.shop-btn");

buttons.forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect = button.getBoundingClientRect();

button.style.setProperty("--x",(e.clientX-rect.left)+"px");

button.style.setProperty("--y",(e.clientY-rect.top)+"px");

});

});

/*==========================
PARALLAX HERO IMAGE
==========================*/

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

if(!heroImage) return;

const x = (window.innerWidth/2-e.clientX)/70;

const y = (window.innerHeight/2-e.clientY)/70;

heroImage.style.transform=`translate(${x}px,${y}px)`;

});

/*==========================
CATEGORY IMAGE ZOOM
==========================*/

document.querySelectorAll(".category-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

const img = card.querySelector("img");

img.style.transform="scale(1.08)";

});

card.addEventListener("mouseleave",()=>{

const img = card.querySelector("img");

img.style.transform="scale(1)";

});

});

/*==========================
SMOOTH SCROLL
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*==========================
CURRENT YEAR
==========================*/

const copyright=document.querySelector(".copyright");

if(copyright){

copyright.innerHTML=`© ${new Date().getFullYear()} Totally Wicked. All Rights Reserved.`;

}
