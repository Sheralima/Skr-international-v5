// =========================================
// SKR INTERNATIONAL V5
// script.js - Part 1
// =========================================

// Auto Bootstrap Slider
document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector("#homeSlider");

    if (slider) {
        new bootstrap.Carousel(slider, {
            interval: 4000,
            ride: "carousel",
            pause: false,
            touch: true
        });
    }

});

// Animated Counter
function animateCounter(id, target) {

    const element = document.getElementById(id);

    if (!element) return;

    let count = 0;

    const speed = Math.max(10, Math.floor(2000 / target));

    const timer = setInterval(() => {

        count++;

        element.innerText = count + "+";

        if (count >= target) {
            clearInterval(timer);
        }

    }, speed);

}

window.addEventListener("load", () => {
{

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
    animateCounter("clientsCounter", 500);
    animateCounter("projectsCounter", 120);
    animateCounter("countriesCounter", 15);
    animateCounter("experienceCounter", 10);

}); // =========================================
// SKR INTERNATIONAL V5
// script.js - Part 2
// =========================================

// Fade-up Animation on Scroll
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});
document.querySelectorAll(".fade-up").forEach(el => {
    observer.observe(el);
});


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Active Navbar Link
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar .nav-link").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {
        link.classList.add("active");
    }

});


// Back To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0d6efd";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";

window.addEventListener("scroll", ()
