const text = "HI, I AM HARSH KUMAR";
const typingText = document.querySelector("#typing-text");

let index = 0;

function typeText(){
    if(index < text.length){
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText,100);
    }else{
        typeRole(); 
    }
}

typingText.textContent = "";
typeText();

const roles = [
    "Frontend Web Developer",
    "CSE Student",
    "JavaScript Developer",
    "DSA Learner",
    "Problem Solver"
];

const role = document.getElementById("role");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole(){

    const current = roles[roleIndex];

    if(!deleting){
        role.textContent = current.substring(0,charIndex++);
    }else{
        role.textContent = current.substring(0,charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if(!deleting && charIndex > current.length){
        deleting = true;
        speed = 1200;
    }

    if(deleting && charIndex < 0){
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
    }

    setTimeout(typeRole,speed);
}


const menu = document.getElementById("menu-icon");
const nav = document.querySelector(".nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menu.innerHTML = "✖";
    }else{
        menu.innerHTML = "☰";
    }

});

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menu.innerHTML = "☰";

    });

});

