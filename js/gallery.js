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
// SCROLL REVEAL
// ==========================

const revealItems = document.querySelectorAll(
    ".gallery-card, .activity-card, .stat-card"
);

function revealElements() {

    revealItems.forEach((item) => {

        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - 100) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElements);
revealElements();

// ==========================
// STATS COUNTER
// ==========================

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const statsSection =
        document.querySelector(".gallery-stats");

    if (!statsSection) return;

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counterStarted = true;

        const counters =
            document.querySelectorAll(".stat-card h2");

        counters.forEach(counter => {

            const originalText =
                counter.innerText;

            const target =
                parseInt(
                    originalText.replace(/\D/g, "")
                );

            let count = 0;

            const increment = target / 100;

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
    startCounter
);

// ==========================
// HERO PARALLAX
// ==========================

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".gallery-hero");

    if (!hero) return;

    const offset =
        window.pageYOffset;

    hero.style.backgroundPositionY =
        offset * 0.5 + "px";

});

// ==========================
// LIGHTBOX POPUP
// ==========================

const images =
    document.querySelectorAll(".gallery-card img");

const lightbox =
    document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

images.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        const img =
            document.createElement("img");

        img.src = image.src;

        while (lightbox.firstChild) {

            lightbox.removeChild(
                lightbox.firstChild
            );

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

// ==========================
// SCROLL TOP BUTTON
// ==========================

const scrollBtn =
    document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.classList.add(
    "scroll-top-btn"
);

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