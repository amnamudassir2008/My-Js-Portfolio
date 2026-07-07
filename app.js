// ===========================
// LOADER
// ===========================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);

        }, 800);
    }

    // Load saved theme
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");

        const icon = document.querySelector("#themeToggle i");
        if (icon) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    }
});


// ===========================
// AOS
// ===========================

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true
    });
}


// ===========================
// TYPING EFFECT
// ===========================

const typing = document.getElementById("typing");

if (typing) {

    const words = [
        "Frontend Developer",
        "Web Designer",
        "JavaScript Learner",
        "Responsive UI Developer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        let current = words[wordIndex];

        if (!deleting) {

            typing.textContent = current.substring(0, charIndex++);

            if (charIndex > current.length) {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }

        } else {

            typing.textContent = current.substring(0, charIndex--);

            if (charIndex < 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

        }

        setTimeout(typeEffect, deleting ? 60 : 120);

    }

    typeEffect();
}


// ===========================
// SCROLL PROGRESS BAR
// ===========================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    if (progressBar) {

        const scrollTop = document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        progressBar.style.width =
            (scrollTop / scrollHeight) * 100 + "%";
    }

});


// ===========================
// BACK TO TOP
// ===========================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.style.display = "flex";
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

}


// ===========================
// DARK / LIGHT MODE
// ===========================

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("light")) {

            localStorage.setItem("theme", "light");

            if (icon) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            }

        } else {

            localStorage.setItem("theme", "dark");

            if (icon) {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }

        }

    });

}


// ===========================
// ACTIVE NAV LINK
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        if (window.scrollY >= section.offsetTop - 120) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===========================
// SMOOTH SCROLL
// ===========================

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


function toggleCertificates() {

  let certificates = document.getElementById("certificate-box");

  certificates.classList.toggle("d-none");
}