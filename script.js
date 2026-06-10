const pages = ["page1","page2","page3","page4","finalScene"];

function showPage(id){
    const pages = ["page1","page2","page3","page4","finalScene"];

    pages.forEach(p=>{
        document.getElementById(p).style.display="none";
    });

    const el = document.getElementById(id);

    if(id === "finalScene"){
        el.style.display = "block";
    } else {
        el.style.display = "flex";
    }

    window.scrollTo(0,0);
}
/* YES BUTTON */
document.getElementById("yesBtn").addEventListener("click",()=>{
    document.getElementById("spidermanSection").style.display="block";
    document.getElementById("spiderman").classList.add("swing");
});



    const final = document.getElementById("finalScene");
    final.style.display="flex";

    const boy = document.querySelector(".boy");
    const girl = document.querySelector(".girl");
    const merged = document.querySelector(".mergedPhoto");
    const text = document.querySelector(".birthdayText");

    // RESET (IMPORTANT - remove old classes too)
    boy.classList.remove("moveBoy","fadeOut");
    girl.classList.remove("moveGirl","fadeOut");
    merged.classList.remove("showPhoto");

    boy.style.opacity = "1";
    girl.style.opacity = "1";

    text.style.opacity = "0";

    // STEP 1: move
    setTimeout(() => {
        boy.classList.add("moveBoy");
        girl.classList.add("moveGirl");
    }, 300);

    // STEP 2: fade out
    setTimeout(() => {
        boy.classList.add("fadeOut");
        girl.classList.add("fadeOut");
    }, 2500);

    // STEP 3: show merged photo
    setTimeout(() => {
        merged.classList.add("showPhoto");
    }, 3800);

    // STEP 4: show text
    setTimeout(() => {
        text.style.opacity = "1";
    }, 5000);


/* NO BUTTON */
document.getElementById("noBtn").addEventListener("click",()=>{
    alert("Only YES allowed 😘");
});

/* DEFAULT */
document.addEventListener("DOMContentLoaded",()=>{
    showPage("page1");
});
document.getElementById("closeLetter").addEventListener("click", () => {

    showPage("finalScene");

    const boy = document.querySelector(".boy");
    const girl = document.querySelector(".girl");
    const merged = document.querySelector(".mergedPhoto");
    const text = document.querySelector(".birthdayText");

    boy.classList.remove("moveBoy","fadeOut");
    girl.classList.remove("moveGirl","fadeOut");
    merged.classList.remove("showPhoto");

    text.style.opacity = "0";

    setTimeout(() => {
        boy.classList.add("moveBoy");
        girl.classList.add("moveGirl");
    }, 300);

    setTimeout(() => {
        boy.classList.add("fadeOut");
        girl.classList.add("fadeOut");
    }, 2500);

    setTimeout(() => {
        merged.classList.add("showPhoto");
    }, 3800);

    setTimeout(() => {
        text.style.opacity = "1";
    }, 5000);
});