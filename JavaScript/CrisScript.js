const i_menu = document.getElementById("i_menu");
const i_menu2 = document.getElementById("i_menu2");
const nav_bar = document.querySelector(".nav_bar");
const homepage = document.querySelector(".homepage");

i_menu.addEventListener("click",()=>{
    nav_bar.classList.toggle("open");
    homepage.classList.toggle("open");
});

i_menu2.addEventListener("click",()=>{
    nav_bar.classList.toggle("open");
    homepage.classList.toggle("open");
});
 


function toggleText(text) {
    var textContainer = document.getElementById("LogoText");

    if (textContainer.classList.contains("hidden")) {
        textContainer.textContent = text;
        textContainer.classList.remove("hidden");
    } else {
        textContainer.classList.add("hidden");
    }
}

function toggleText(text) {
    var textContainer = document.getElementById("MaidText");

    if (textContainer.classList.contains("hidden")) {
        textContainer.textContent = text;
        textContainer.classList.remove("hidden");
    } else {
        textContainer.classList.add("hidden");
    }
}

function toggleMessage() {
    var message = document.getElementById("hiddenMessage");

    if (message.style.display === "none" || message.style.display === "") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
}



