const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialEl = document.querySelector(".social-lists");
const liEl = document.querySelectorAll(".social-lists li")


menuEl.addEventListener("click", ()=>{
    socialEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate")
});

liEl.forEach((liEl)=>{
    liEl.addEventListener("click", ()=>{
        menuTextEl.innerHTML = liEl.innerHTML;
        socialEl.classList.add("hide");
        menuEl.classList.toggle("rotate");
    });
});


