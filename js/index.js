// ==========================
// HERO ANIMATION
// ==========================

window.addEventListener("load", () => {

    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(50px)";

        setTimeout(() => {
            heroContent.style.transition = "all 1.2s ease";
            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";
        }, 300);
    }

});

// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements = document.querySelectorAll(
    ".villa-card, .amenity-card, .testimonial-card, .stat-box"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("show-animation");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

// ==========================
// STATS COUNTER
// ==========================

const counters = document.querySelectorAll(".stat-box h2");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats-section");

    if (!statsSection) return;

    const position = statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const targetText = counter.innerText;

            const target = parseInt(targetText.replace(/\D/g, ""));

            let current = 0;

            const increment = target / 100;

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.innerText = Math.ceil(current) + "+";

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = targetText;

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);

// ==========================
// PARALLAX HERO EFFECT
// ==========================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero-section");

    if (hero) {

        let offset = window.pageYOffset;

        hero.style.backgroundPositionY =
            offset * 0.5 + "px";

    }

});

// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.classList.add("scroll-top-btn");

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("show-btn");

    } else {

        scrollBtn.classList.remove("show-btn");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==========================
// SMOOTH NAVIGATION SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});