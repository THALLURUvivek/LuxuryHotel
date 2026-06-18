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
            passwordField.getAttribute("type") === "password"
            ? "text"
            : "password";

        passwordField.setAttribute("type", type);

        togglePassword.innerHTML =
            type === "password"
            ? '<i class="bi bi-eye"></i>'
            : '<i class="bi bi-eye-slash"></i>';

    });

}

// ==========================
// FORM VALIDATION
// ==========================

const signinForm =
    document.getElementById("signinForm");

if (signinForm) {

    signinForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const email =
            document.getElementById("email");

        const password =
            document.getElementById("password");

        let isValid = true;

        // Reset Border

        email.style.borderColor = "";
        password.style.borderColor = "";

        // Email Validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            email.value.trim() === "" ||
            !emailPattern.test(email.value)
        ) {

            email.style.borderColor = "red";
            isValid = false;

        }

        // Password Validation

        if (
            password.value.trim() === "" ||
            password.value.length < 6
        ) {

            password.style.borderColor = "red";
            isValid = false;

        }

        if (!isValid) {

            showMessage(
                "Please enter valid login details",
                false
            );

            return;

        }

        // Loading State

        const submitBtn =
            document.querySelector(".signin-btn");

        submitBtn.innerHTML =
            "Signing In...";

        submitBtn.disabled = true;

        setTimeout(() => {

            // Store Session

            localStorage.setItem(
                "isLoggedIn",
                "true"
            );

            localStorage.setItem(
                "userEmail",
                email.value
            );

            // Look up user name from stored users array

            const allUsers =
                JSON.parse(
                    localStorage.getItem("resortUsers") || "[]"
                );

            const matchedUser =
                allUsers.find(
                    u => u.email === email.value.trim()
                );

            const userFullName =
                matchedUser
                    ? matchedUser.fullName
                    : email.value.split("@")[0];

            localStorage.setItem(
                "userFullName",
                userFullName
            );

            // Save selected role for navbar

            const selectedRole =
                matchedUser
                    ? matchedUser.role
                    : document.getElementById("loginRole").value;

            localStorage.setItem(
                "userRole",
                selectedRole
            );

            // Also update resortUser for backward compatibility

            if (matchedUser) {

                localStorage.setItem(
                    "resortUser",
                    JSON.stringify(matchedUser)
                );

            }

            showMessage(
                "Login Successful",
                true
            );

            submitBtn.innerHTML =
                "Sign In";

            submitBtn.disabled = false;

            // Redirect Based On Selected Role

            let redirectUrl = "dashboard-guest.html";

            switch (selectedRole) {

                case "admin":
                    redirectUrl =
                        "dashboard-admin.html";
                    break;

                case "staff":
                    redirectUrl =
                        "dashboard-staff.html";
                    break;

                default:
                    redirectUrl =
                        "dashboard-guest.html";
            }

            setTimeout(() => {

                window.location.href =
                    redirectUrl;

            }, 1500);

        }, 1500);

    });

}

// ==========================
// SUCCESS / ERROR MESSAGE
// ==========================

function showMessage(message, success) {

    const existing =
        document.querySelector(".login-message");

    if (existing) {

        existing.remove();

    }

    const msg =
        document.createElement("div");

    msg.classList.add("login-message");

    msg.textContent = message;

    msg.style.background =
        success
        ? "#198754"
        : "#dc3545";

    document.body.appendChild(msg);

    setTimeout(() => {

        msg.classList.add("show-message");

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

// ==========================
// PRE-SELECT ROLE FROM STORED DATA
// ==========================

(function () {

    const roleSelect =
        document.getElementById("loginRole");

    if (!roleSelect) return;

    // Try from stored user first

    const allUsers =
        JSON.parse(
            localStorage.getItem("resortUsers") || "[]"
        );

    const lastEmail =
        localStorage.getItem("userEmail");

    if (lastEmail) {

        const matched =
            allUsers.find(
                u => u.email === lastEmail
            );

        if (matched && matched.role) {

            roleSelect.value =
                matched.role;

            return;

        }

    }

    // Fall back to resortUser

    const storedUser =
        localStorage.getItem("resortUser");

    if (storedUser) {

        const data =
            JSON.parse(storedUser);

        if (data.role) {

            roleSelect.value =
                data.role;

        }

    }

})();

// ==========================
// ENTER KEY SUPPORT
// ==========================

document.addEventListener("keydown", (e) => {

    if (
        e.key === "Enter" &&
        document.activeElement.tagName !==
        "TEXTAREA"
    ) {

        const form =
            document.getElementById("signinForm");

        if (form) {

            form.requestSubmit();

        }

    }

});