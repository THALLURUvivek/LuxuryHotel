// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements = document.querySelectorAll(
    ".room-card, .feature-card, .amenity-box, .pricing-card, .stat-box"
);

function revealElementsOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElementsOnScroll);
revealElementsOnScroll();

// ==========================
// STATS COUNTER
// ==========================

const stats = document.querySelectorAll(".stat-box h2");

let statsStarted = false;

function startCounter() {

    if (statsStarted) return;

    const statsSection = document.querySelector(".resort-stats");

    if (!statsSection) return;

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        statsStarted = true;

        stats.forEach((counter) => {

            const targetText = counter.innerText;

            const target = parseInt(
                targetText.replace(/\D/g, "")
            );

            let count = 0;

            const increment = target / 100;

            function updateCounter() {

                count += increment;

                if (count < target) {

                    counter.innerText =
                        Math.ceil(count) + "+";

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = targetText;

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounter);

// ==========================
// PARALLAX HERO EFFECT
// ==========================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".resort-hero");

    if (!hero) return;

    let scrollPosition = window.pageYOffset;

    hero.style.backgroundPositionY =
        scrollPosition * 0.5 + "px";

});

// ==========================
// PRICING CARD HIGHLIGHT
// ==========================

const pricingCards =
    document.querySelectorAll(".pricing-card");

pricingCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});