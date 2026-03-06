var typed = new Typed("#typing", {

strings:[
"Embedded Engineer",
"STM32 Developer",
"RTOS Engineer",
"Embedded AI Developer"
],

typeSpeed:70,
backSpeed:50,
loop:true

});
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {
navLinks.classList.toggle("active");
};

document.querySelectorAll("a[href^='#']").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior: "smooth"
});

});

});
