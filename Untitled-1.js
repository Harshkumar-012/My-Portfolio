const btn = document.querySelectorAll(".button");
const main = document.querySelector("#main");
const about = document.querySelector("#about");
const education = document.querySelector("#education");
const skills = document.querySelector("#skills");
const projects = document.querySelector("#projects");
const platforms = document.querySelector("#platforms");
const contact = document.querySelector("#contact");

function hideAll(){
    main.classList.add("hide");
    about.classList.add("hide");
    education.classList.add("hide");
    skills.classList.add("hide");
    projects.classList.add("hide");
    platforms.classList.add("hide");
    contact.classList.add("hide");
}

function showHome(){
    hideAll();
    main.classList.remove("hide");
    skills.classList.remove("hide");
    projects.classList.remove("hide");
    platforms.classList.remove("hide");
}

btn.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        e.preventDefault();
        const value = button.innerText.trim();
        if(value === "Home"){
            showHome();
            window.scrollTo({
                top:0,
                scroll : "smooth"
            })
        }
        else if(value === "About"){
            hideAll();
            about.classList.remove("hide");
            window.scrollTo({
                top:0,
                scroll : "smooth"
            })
        }
        else if(value === "Education"){
            hideAll();
            education.classList.remove("hide");
            window.scrollTo({
                top:0,
                scroll : "smooth"
            })
        }
        else if(value === "Contact"){
            hideAll();
            contact.classList.remove("hide");
            window.scrollTo({
                top:0,
                scroll : "smooth"
            })
        }
    })
})

window.onload = () => {
    hideAll();
    main.classList.remove("hide");
    skills.classList.remove("hide");
    projects.classList.remove("hide");
    platforms.classList.remove("hide");
}

const text = "HI, I AM HARSH KUMAR";
const typingText = document.querySelector("#typing-text");

let index = 0;
function typeText(){
    if(index < text.length){
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText,100);
    }
}

typingText.textContent = "";
typeText();



