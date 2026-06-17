// ==========================
// SHOW / HIDE PASSWORD
// ==========================

const togglePassword =
    document.getElementById("togglePassword");

const passwordField =
    document.getElementById("password");

if (togglePassword && passwordField) {

    togglePassword.addEventListener("click", () => {

        const type =
            passwordField.type === "password"
            ? "text"
            : "password";

        passwordField.type = type;

        togglePassword.innerHTML =
            type === "password"
            ? '<i class="bi bi-eye"></i>'
            : '<i class="bi bi-eye-slash"></i>';

    });

}

// ==========================
// SIGNUP FORM
// ==========================

const signupForm =
    document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const fullName =
            document.getElementById("fullName");

        const email =
            document.getElementById("email");

        const phone =
            document.getElementById("phone");

        const password =
            document.getElementById("password");

        const confirmPassword =
            document.getElementById("confirmPassword");

        const terms =
            document.getElementById("terms");

        let isValid = true;

        // Reset Borders

        [
            fullName,
            email,
            phone,
            password,
            confirmPassword
        ].forEach(field => {

            field.style.borderColor = "";

        });

        // ==========================
        // FULL NAME VALIDATION
        // ==========================

        if (
            fullName.value.trim() === "" ||
            fullName.value.length < 3
        ) {

            fullName.style.borderColor = "red";
            isValid = false;

        }

        // ==========================
        // EMAIL VALIDATION
        // ==========================

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            !emailPattern.test(email.value)
        ) {

            email.style.borderColor = "red";
            isValid = false;

        }

        // ==========================
        // PHONE VALIDATION
        // ==========================

        const phonePattern =
            /^[0-9]{10}$/;

        if (
            !phonePattern.test(phone.value)
        ) {

            phone.style.borderColor = "red";
            isValid = false;

        }

        // ==========================
        // PASSWORD VALIDATION
        // ==========================

        if (
            password.value.length < 6
        ) {

            password.style.borderColor = "red";
            isValid = false;

        }

        // ==========================
        // CONFIRM PASSWORD
        // ==========================

        if (
            password.value !==
            confirmPassword.value
        ) {

            confirmPassword.style.borderColor =
                "red";

            isValid = false;

        }

        // ==========================
        // TERMS VALIDATION
        // ==========================

        if (!terms.checked) {

            showMessage(
                "Please accept Terms & Conditions",
                false
            );

            return;

        }

        if (!isValid) {

            showMessage(
                "Please fill all fields correctly",
                false
            );

            return;

        }

        // ==========================
        // STORE USER DATA
        // ==========================

        const userData = {

            fullName:
                fullName.value.trim(),

            email:
                email.value.trim(),

            phone:
                phone.value.trim(),

            password:
                password.value

        };

        localStorage.setItem(
            "resortUser",
            JSON.stringify(userData)
        );

        // ==========================
        // SUCCESS MESSAGE
        // ==========================

        showMessage(
            "Account Created Successfully!",
            true
        );

        signupForm.reset();

        // Redirect To Sign In

        setTimeout(() => {

            window.location.href =
                "signin.html";

        }, 2000);

    });

}

// ==========================
// MESSAGE FUNCTION
// ==========================

function showMessage(
    message,
    success
) {

    const existing =
        document.querySelector(
            ".signup-message"
        );

    if (existing) {

        existing.remove();

    }

    const msg =
        document.createElement("div");

    msg.classList.add(
        "signup-message"
    );

    msg.textContent = message;

    msg.style.background =
        success
        ? "#198754"
        : "#dc3545";

    document.body.appendChild(msg);

    setTimeout(() => {

        msg.classList.add(
            "show-message"
        );

    }, 100);

    setTimeout(() => {

        msg.classList.remove(
            "show-message"
        );

        setTimeout(() => {

            msg.remove();

        }, 500);

    }, 3000);

}