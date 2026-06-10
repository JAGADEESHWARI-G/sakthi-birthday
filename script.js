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

/* OPEN GIFT */
document.getElementById("openGift").addEventListener("click",()=>{
    showPage("page2");
});

/* NEXT */
document.getElementById("nextBtn").addEventListener("click",()=>{
    showPage("page3");
});

/* OPEN LETTER */
document.getElementById("openCard").addEventListener("click",()=>{
    showPage("page4");
});

/* FINAL SCENE ANIMATION */
/* FINAL SCENE ANIMATION */
document.getElementById("closeLetter").addEventListener("click", () => {

    // show final scene FIRST
    document.querySelectorAll("section").forEach(sec=>{
        sec.style.display="none";
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
});

/* NO BUTTON */
document.getElementById("noBtn").addEventListener("click",()=>{
    alert("Only YES allowed 😘");
});

/* DEFAULT */
document.addEventListener("DOMContentLoaded",()=>{
    showPage("page1");
});
