/*==================================================
    Henry Tech Solutions
    Enterprise Theme V2
==================================================*/

/***************************************************
 * Typing Animation
 ***************************************************/

const words = [
    "Deploy.",
    "Automate.",
    "Scale.",
    "Secure.",
    "Modernize.",
    "Monitor.",
    "Innovate."
];

const typingElement = document.getElementById("typing");

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent =
            currentWord.substring(0, letterIndex);

        letterIndex++;

        if(letterIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }else{

        typingElement.textContent =
            currentWord.substring(0, letterIndex);

        letterIndex--;

        if(letterIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 45 : 100);

}

typeEffect();

/***************************************************
 * Animated Counters
 ***************************************************/

const counters = document.querySelectorAll(".counter");

const observerCounter = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target/120;

            function update(){

                count += speed;

                if(count < target){

                    counter.innerHTML = Math.floor(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerHTML = target;

                }

            }

            update();

            observerCounter.unobserve(counter);

        }

    });

},{
    threshold:.5
});

counters.forEach(counter=>{

    observerCounter.observe(counter);

});

/***************************************************
 * Scroll Reveal
 ***************************************************/

const revealElements=document.querySelectorAll(
".stat-card,.tech,.card,.cta,.technologies,.services"
);

revealElements.forEach(el=>{

    el.classList.add("reveal");

});

const revealObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:.15
});

revealElements.forEach(el=>{

    revealObserver.observe(el);

});

/***************************************************
 * Navbar Shrink
 ***************************************************/

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

});

/***************************************************
 * Smooth Anchor Links
 ***************************************************/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

/***************************************************
 * Hero Fade
 ***************************************************/

window.addEventListener("load",()=>{

    document.querySelector(".hero-content").style.opacity=0;

    document.querySelector(".hero-content").style.transform=
    "translateY(30px)";

    setTimeout(()=>{

        document.querySelector(".hero-content").style.transition=
        "1s";

        document.querySelector(".hero-content").style.opacity=1;

        document.querySelector(".hero-content").style.transform=
        "translateY(0)";

    },250);

});

/***************************************************
 Mouse Spotlight
***************************************************/

const spotlight=document.getElementById("spotlight");

window.addEventListener("mousemove",(e)=>{

    spotlight.style.left=e.clientX+"px";

    spotlight.style.top=e.clientY+"px";

});

/****************************************************
 Interactive Technology Cards
****************************************************/

document.querySelectorAll(".tech").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 18;
        const rotateX = ((0.5 - y / rect.height)) * 18;

        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");

        card.style.setProperty("--rotateX", rotateX + "deg");
        card.style.setProperty("--rotateY", rotateY + "deg");

    });

    card.addEventListener("mouseleave", () => {

        card.style.setProperty("--rotateX","0deg");
        card.style.setProperty("--rotateY","0deg");

    });

});
