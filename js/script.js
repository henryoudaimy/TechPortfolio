// Fade in cards

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity=0;

card.style.transform="translateY(60px)";

card.style.transition="1s";

observer.observe(card);

});

// Smooth scrolling

document.querySelectorAll("a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

if(this.hash!==""){

e.preventDefault();

document.querySelector(this.hash)?.scrollIntoView({

behavior:"smooth"

});

}

});

});
