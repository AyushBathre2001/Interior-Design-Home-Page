let hamb = document.getElementById("hamburger")
let mn = document.getElementsByClassName("menu")[0]
hamb.addEventListener('click',()=>{
    if(mn.style.left === "-100%"){
        mn.style.left = "0%"
    }
    else{
        mn.style.left = "-100%"
    }
})


let an = gsap.timeline()

an
.from(".navbar",{
    opacity:0,
    y:20,
    duration:0.5
})
.from([".left",".lleft"],{
    opacity:0,
    x:-100,
    duration:0.5
})

.from(".box",{
    opacity:0,
    duration:0.5,
    scale:1.5
})

.from(".lright",{
    opacity:0,
    duration:2,
    x:100
})
