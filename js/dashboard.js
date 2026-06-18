// ==========================
// AUTH CHECK
// ==========================

const isLoggedIn =
    localStorage.getItem("isLoggedIn");

if (!isLoggedIn) {

    window.location.href =
        "signinpage.html";

}

const storedUser =
    localStorage.getItem("resortUser");

const userRole =
    localStorage.getItem("userRole") || "guest";

const currentPage = window.location.pathname
    .split("/")
    .pop();

const pageRole = {

    "dashboard-admin.html": "admin",
    "dashboard-staff.html": "staff",
    "dashboard-guest.html": "guest"

}[currentPage];

if (userRole !== pageRole) {

    window.location.href =
        "signinpage.html";

}

// ==========================
// LOAD USER INFO
// ==========================

const loggedInName =
    localStorage.getItem("userFullName") || "User";

const loggedInEmail =
    localStorage.getItem("userEmail") || "-";

const initial = loggedInName
    ? loggedInName.charAt(0).toUpperCase()
    : "U";

const avatarEl =
    document.querySelector(".user-avatar");

const nameEl =
    document.querySelector(".user-details h5");

const displayNameEl =
    document.getElementById("displayName");

const displayEmailEl =
    document.getElementById("displayEmail");

const displayPhoneEl =
    document.getElementById("displayPhone");

if (avatarEl) {
    avatarEl.textContent = initial;
}

if (nameEl) {
    nameEl.textContent = loggedInName;
}

if (displayNameEl) {
    displayNameEl.textContent = loggedInName;
}

if (displayEmailEl) {
    displayEmailEl.textContent = loggedInEmail;
}

if (displayPhoneEl) {
    // Try to get phone from stored user data if available
    let phone = "-";
    if (storedUser) {
        const data = JSON.parse(storedUser);
        if (data.email === loggedInEmail) {
            phone = data.phone || "-";
        }
    }
    displayPhoneEl.textContent = phone;
}

// ==========================
// MOBILE SIDEBAR TOGGLE
// ==========================

const toggleBtn =
    document.getElementById("mobileToggle");

const sidebar =
    document.getElementById("sidebar");

if (toggleBtn && sidebar) {

    toggleBtn.addEventListener(
        "click",
        () => {

            sidebar.classList.toggle(
                "open"
            );

            const icon =
                toggleBtn.querySelector("i");

            if (icon) {

                icon.classList.toggle(
                    "bi-list"
                );

                icon.classList.toggle(
                    "bi-x-lg"
                );

            }

        }
    );

    document.addEventListener(
        "click",
        (e) => {

            if (
                window.innerWidth <= 991 &&
                !sidebar.contains(e.target) &&
                !toggleBtn.contains(e.target)
            ) {

                sidebar.classList.remove(
                    "open"
                );

                const icon =
                    toggleBtn.querySelector("i");

                if (icon) {

                    icon.classList.add(
                        "bi-list"
                    );

                    icon.classList.remove(
                        "bi-x-lg"
                    );

                }

            }

        }
    );

}

// ==========================
// LOGOUT
// ==========================

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        () => {

            localStorage.removeItem(
                "isLoggedIn"
            );

            localStorage.removeItem(
                "userEmail"
            );

            localStorage.removeItem(
                "userRole"
            );

            localStorage.removeItem(
                "userFullName"
            );

            window.location.href =
                "signinpage.html";

        }
    );

}
