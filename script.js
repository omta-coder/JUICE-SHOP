let menu = document.getElementById("menubar");
let navbar = document.getElementById("navbar");
let nav = document.getElementById("nav");

menu.addEventListener("click",()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
})

window.onscroll = ()=>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if(window.scrollY > 200){
        nav.classList.add("active");
    }
    else{
        nav.classList.remove("active");
    }
}

var tl = gsap.timeline()
tl.from("#nav img , #navbar , #icons",{
    y:-100,
    duration:1,
    opcity:0,
    stagger:.4,
})
tl.from("#home img",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:.4,
})
tl.from("#home #txt",{
    x:-100,
    duration:1,
    scale:0,
    stagger:.4,
})
tl.from("#category h1",{
    x:-100,
    duration:1,
    scale:0,
    stagger:.4,
})
tl.from("#category #box",{
    x:-500,
    duration:1,
    opacity:0,
    stagger:.4,
    scrollTrigger:{
        trigger:"#category #box",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
        // pin:true
    }
})
tl.from("#services #box",{
    x:-500,
    duration:1,
    scale:0,
    stagger:.4,
    scrollTrigger:{
        trigger:"#services #box",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
        // pin:true
    }
})
tl.from("#products #txt",{
    x:-500,
    duration:1,
    opacity:0,
    stagger:.4,
    scrollTrigger:{
        trigger:"#products #txt",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
        // pin:true
    }
})