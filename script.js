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

    const merged = document.querySelector(".mergedPhoto");

    if(merged){
        merged.classList.remove("showPhoto");

        setTimeout(() => {
            merged.classList.add("showPhoto");
        }, 500);
    }

    setTimeout(() => {
        startFinalAnimation();
    }, 2500);

});
function startFinalAnimation(){

    showPage("finalScene");

    const text = document.querySelector(".birthdayText");

    const message = "LOVE YOU FOREVER ❤️";

    text.innerHTML = "";

    let i = 0;

    const typing = setInterval(() => {

        text.innerHTML += message.charAt(i);

        i++;

        if(i >= message.length){
            clearInterval(typing);
        }

    },100);
}