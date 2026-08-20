// ==========================================
// ELEMENTS
// ==========================================

const header = document.querySelector(".header");
const menuToggle = document.querySelector("#menu-toggle");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");


// ==========================================
// MOBILE MENU
// ==========================================

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");

        const isOpen = navbar.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.toggle("bx-menu", !isOpen);
            icon.classList.toggle("bx-x", isOpen);
        }
    });
}


// ==========================================
// CLOSE MOBILE MENU
// ==========================================

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.add("bx-menu");
                icon.classList.remove("bx-x");
            }
        }
    });
});


// ==========================================
// HEADER SCROLL EFFECT
// ==========================================

function updateHeader() {
    if (!header) return;

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateHeader);

updateHeader();


// ==========================================
// SCROLL REVEAL
// ==========================================

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections =
    document.querySelectorAll("section[id]");

function updateActiveNavigation() {
    const scrollPosition =
        window.scrollY + 200;

    sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (
            scrollPosition >= top &&
            scrollPosition < top + height
        ) {
            navLinks.forEach((link) => {
                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    `#${id}`
                ) {
                    link.classList.add("active");
                }
            });
        }
    });
}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


// ==========================================
// CURRENT YEAR
// ==========================================

const yearElement =
    document.querySelector("#year");

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}