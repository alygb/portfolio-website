// var tablinks = document.getElementsByClassName("tab-links");
//             var tabcontents = document.getElementsByClassName("tab-contents");
//             function opentab(tabname) {
//                 for (tablink of tablinks) {
//                     tablink.classList.remove("active-link");
//                 }
//                 for (tabcontent of tabcontents) {
//                     tabcontent.classList.remove("active-tab");
//                 }
//                 event.currentTarget.classList.add("active-link");
//                 document.getElementById(tabname).classList.add("active-tab");
//             }


//             var sidemenu = document.getElementById("sidemenu");
//             function openmenu() {
//                 sidemenu.style.right = "0";
//             }
//             function closemenu() {
//                 sidemenu.style.right = "-200px";
//             }




var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {

    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");
}

// new Typed(".hero-role", {
//     strings: [
//         "Web Developer",
//         "UI/UX Designer",
//         "Software Engineering Student",
//         "Frontend Developer"
//     ],
//     typeSpeed: 60,
//     backSpeed: 40,
//     loop: true
// });
// const topBtn = document.getElementById("topBtn");

// if(topBtn){
//     topBtn.addEventListener("click", function(){
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     });
// }

if (typeof ScrollReveal !== "undefined") {

    ScrollReveal({
        distance: "60px",
        duration: 1500,
        delay: 200
    });

    ScrollReveal().reveal('.hero-left', { origin: 'left' });
    ScrollReveal().reveal('.hero-right', { origin: 'right' });
    ScrollReveal().reveal('.about-card', { origin: 'bottom' });
    ScrollReveal().reveal('.service-card', { interval: 200 });
    ScrollReveal().reveal('.work-card', { interval: 200 });
    ScrollReveal().reveal('.contact-card', { origin: 'bottom' });

}
ScrollReveal({
    distance: "60px",
    duration: 1500,
    delay: 200
});

ScrollReveal().reveal('.hero-left', {
    origin: 'left'
});

ScrollReveal().reveal('.hero-right', {
    origin: 'right'
});

ScrollReveal().reveal('.about-card', {
    origin: 'bottom'
});

ScrollReveal().reveal('.service-card', {
    interval: 200
});

ScrollReveal().reveal('.work-card', {
    interval: 200
});

ScrollReveal().reveal('.contact-card', {
    origin: 'bottom'
});

const topBtn = document.getElementById("topBtn");

console.log("Button found:", topBtn);

if (topBtn) {
    topBtn.addEventListener("click", function () {
        console.log("Button clicked!");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}