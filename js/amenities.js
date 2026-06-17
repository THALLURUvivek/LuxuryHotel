// ==========================
// PAGE LOAD ANIMATION
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

const revealItems = document.querySelectorAll(
    ".facility-card, .activity-card, .stat-card"
);

function revealOnScroll() {

    revealItems.forEach((item) => {

        const windowHeight = window.innerHeight;
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < windowHeight - 100) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ==========================
// STATISTICS COUNTER
// ==========================

let statsStarted = false;

function startStatsCounter() {

    if (statsStarted) return;

    const statsSection =
        document.querySelector(".amenity-stats");

    if (!statsSection) return;

    const position =
        statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        statsStarted = true;

        const counters =
            document.querySelectorAll(".stat-card h2");

        counters.forEach((counter) => {

            const originalText =
                counter.innerText;

            const target =
                parseInt(
                    originalText.replace(/\D/g, "")
                );

            let count = 0;

            const increment =
                target / 100;

            function updateCounter() {

                count += increment;

                if (count < target) {

                    counter.innerText =
                        Math.ceil(count) + "+";

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.innerText =
                        originalText;

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener(
    "scroll",
    startStatsCounter
);

// ==========================
// HERO PARALLAX EFFECT
// ==========================

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".amenities-hero");

    if (!hero) return;

    const offset =
        window.pageYOffset;

    hero.style.backgroundPositionY =
        offset * 0.5 + "px";

});

// ==========================
// PREMIUM CARD HOVER EFFECT
// ==========================

const cards = document.querySelectorAll(
    ".facility-card, .activity-card"
);

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});

// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topButton =
    document.createElement("button");

topButton.innerHTML = "↑";

topButton.classList.add(
    "scroll-top-btn"
);

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show-btn");

    } else {

        topButton.classList.remove("show-btn");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});