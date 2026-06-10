const yesBtn=document.getElementById("yesBtn");

yesBtn.addEventListener("click",()=>{

document.getElementById("spidermanSection").style.display="block";

document.getElementById("spiderman")
.classList.add("swing");

});
document
.getElementById("closeCard")
.addEventListener("click",()=>{

    document
        .querySelector(".boy")
        .classList.add("moveBoy");

    document
        .querySelector(".girl")
        .classList.add("moveGirl");

    setTimeout(()=>{
        document.querySelector(".heart").style.opacity="1";
    },3000);

    setTimeout(()=>{
        document.querySelector(".birthdayText").style.opacity="1";
    },3500);

});
document.getElementById("openGift")
.addEventListener("click",()=>{

    document.getElementById("page2")
    .scrollIntoView({
        behavior:"smooth"
    });

});

document.getElementById("nextBtn")
.addEventListener("click",()=>{

    document.getElementById("page3")
    .scrollIntoView({
        behavior:"smooth"
    });

});
document.getElementById("openCard")
.addEventListener("click",()=>{

    document.getElementById("page3").style.display="none";

    document.getElementById("page4").style.display="flex";

});
document.getElementById("openGift")
.addEventListener("click",()=>{

    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="flex";

});
document.getElementById("nextBtn")
.addEventListener("click",()=>{

    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display="flex";

});
document.getElementById("closeLetter")
.addEventListener("click",()=>{

    document.getElementById("page4").style.display="none";

    document.getElementById("finalScene").style.display="block";

    document.querySelector(".boy")
        .classList.add("moveBoy");

    document.querySelector(".girl")
        .classList.add("moveGirl");

    setTimeout(()=>{

        document.querySelector(".boy").style.display="none";
        document.querySelector(".girl").style.display="none";

        document.querySelector(".mergedPhoto")
            .classList.add("showPhoto");

    },3000);

    setTimeout(()=>{
        document.querySelector(".birthdayText").style.opacity="1";
    },4500);

});
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("click", () => {
    alert("❤️ Oii Pattu, only YES is allowed! Click Yes 😘");
});
