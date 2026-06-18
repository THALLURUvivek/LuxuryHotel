// ==========================
// HERO ANIMATION
// ==========================

window.addEventListener("load", () => {

    const heroContent =
        document.querySelector(".hero-content");

    if (heroContent) {

        heroContent.style.opacity = "0";
        heroContent.style.transform =
            "translateY(50px)";

        setTimeout(() => {

            heroContent.style.transition =
                "all 1.2s ease";

            heroContent.style.opacity = "1";

            heroContent.style.transform =
                "translateY(0)";

        }, 300);

    }

});

// ==========================
// SCROLL REVEAL
// ==========================

const revealElements =
    document.querySelectorAll(
        ".info-card, .contact-form-wrapper, .reservation-card, .hours-card, .dept-card, .dept-image-wrapper, .dept-intro, .dept-stats"
    );

function revealOnScroll() {

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// ==========================
// HERO PARALLAX
// ==========================

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".contact-hero");

    if (!hero) return;

    const scrollPosition =
        window.pageYOffset;

    hero.style.backgroundPositionY =
        scrollPosition * 0.5 + "px";

});

// ==========================
// CONTACT FORM VALIDATION
// ==========================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const inputs =
                this.querySelectorAll(
                    "input, textarea, select"
                );

            let isValid = true;

            inputs.forEach((input) => {

                if (
                    input.value.trim() === ""
                ) {

                    input.style.borderColor =
                        "red";

                    isValid = false;

                } else {

                    input.style.borderColor =
                        "#ddd";

                }

            });

            if (isValid) {

                showSuccessMessage();

                this.reset();

            }

        }
    );

}

// ==========================
// SUCCESS MESSAGE
// ==========================

function showSuccessMessage() {

    const existingMessage =
        document.querySelector(
            ".success-message"
        );

    if (existingMessage) {

        existingMessage.remove();

    }

    const message =
        document.createElement("div");

    message.classList.add(
        "success-message"
    );

    message.innerHTML =
        "✓ Message Sent Successfully";

    document.body.appendChild(
        message
    );

    setTimeout(() => {

        message.classList.add(
            "show-success"
        );

    }, 100);

    setTimeout(() => {

        message.classList.remove(
            "show-success"
        );

        setTimeout(() => {

            message.remove();

        }, 500);

    }, 3000);

}

// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const scrollTopButton =
    document.createElement("button");

scrollTopButton.innerHTML = "↑";

scrollTopButton.classList.add(
    "scroll-top-btn"
);

document.body.appendChild(
    scrollTopButton
);

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            scrollTopButton.classList.add(
                "show-btn"
            );

        } else {

            scrollTopButton.classList.remove(
                "show-btn"
            );

        }

    }
);

scrollTopButton.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    }
);