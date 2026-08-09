```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       THEME
    ========================================= */

    const themeButton =
        document.getElementById("theme-toggle");

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");

        if (themeButton) {
            themeButton.textContent = "☀️";
        }
    } else {
        document.body.classList.remove("light");

        if (themeButton) {
            themeButton.textContent = "🌙";
        }
    }


    if (themeButton) {

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("light");

            if (document.body.classList.contains("light")) {

                localStorage.setItem("theme", "light");

                themeButton.textContent = "☀️";

            } else {

                localStorage.setItem("theme", "dark");

                themeButton.textContent = "🌙";

            }

        });

    }


    /* =========================================
       SIDEBAR NAVIGATION
    ========================================= */

    const navLinks =
        document.querySelectorAll(".nav-link");

    const pages =
        document.querySelectorAll(".dashboard-page");

    const pageTitle =
        document.getElementById("page-title");

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const page =
                link.dataset.page;

            if (!page) return;


            /* Remove active links */

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");


            /* Hide pages */

            pages.forEach(section => {
                section.classList.remove("active-page");
            });


            /* Show selected page */

            const selectedPage =
                document.getElementById(page);

            if (selectedPage) {

                selectedPage.classList.add(
                    "active-page"
                );

            }


            /* Update title */

            if (pageTitle) {

                const titles = {

                    dashboard:
                        "Dashboard",

                    commands:
                        "Commands",

                    moderation:
                        "Moderation",

                    tickets:
                        "Tickets",

                    welcome:
                        "Welcome",

                    logs:
                        "Logs",

                    members:
                        "Members",

                    analytics:
                        "Analytics",

                    premium:
                        "Premium"

                };

                pageTitle.textContent =
                    titles[page] || "Dashboard";

            }


            /* Scroll to top */

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });


    /* =========================================
       CONTROL BUTTONS
    ========================================= */

    document
        .querySelectorAll(".open-control")
        .forEach(button => {

            button.addEventListener("click", () => {

                const target =
                    button.dataset.target;

                if (!target) {

                    alert(
                        "This control is ready to be configured."
                    );

                    return;
                }


                const targetElement =
                    document.getElementById(target);

                if (targetElement) {

                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            });

        });


    /* =========================================
       SETTINGS SWITCHES
    ========================================= */

    document
        .querySelectorAll(".switch input")
        .forEach(toggle => {

            toggle.addEventListener("change", () => {

                const setting =
                    toggle.dataset.setting;

                const enabled =
                    toggle.checked;

                if (setting) {

                    localStorage.setItem(
                        "setting_" + setting,
                        enabled
                    );

                }

            });


            /* Load saved setting */

            const setting =
                toggle.dataset.setting;

            if (setting) {

                const saved =
                    localStorage.getItem(
                        "setting_" + setting
                    );

                if (saved !== null) {

                    toggle.checked =
                        saved === "true";

                }

            }

        });


    /* =========================================
       NOTIFICATIONS
    ========================================= */

    const notificationButton =
        document.getElementById(
            "notification-button"
        );

    const notificationPanel =
        document.getElementById(
            "notification-panel"
        );

    const notificationClose =
        document.getElementById(
            "notification-close"
        );


    if (
        notificationButton &&
        notificationPanel
    ) {

        notificationButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                notificationPanel.classList.toggle(
                    "open"
                );

            }
        );

    }


    if (notificationClose) {

        notificationClose.addEventListener(
            "click",
            () => {

                notificationPanel.classList.remove(
                    "open"
                );

            }
        );

    }


    document.addEventListener(
        "click",
        event => {

            if (
                notificationPanel &&
                notificationButton &&
                !notificationPanel.contains(event.target) &&
                !notificationButton.contains(event.target)
            ) {

                notificationPanel.classList.remove(
                    "open"
                );

            }

        }
    );


    /* =========================================
       PREMIUM BUTTONS
    ========================================= */

    document
        .querySelectorAll(".premium-button")
        .forEach(button => {

            button.addEventListener("click", () => {

                alert(
                    "Premium features will be connected to your payment system later."
                );

            });

        });


    /* =========================================
       SERVER SELECTOR
    ========================================= */

    const serverBox =
        document.querySelector(".server-box");

    if (serverBox) {

        serverBox.addEventListener("click", () => {

            alert(
                "Server selector coming soon."
            );

        });

    }


    /* =========================================
       DASHBOARD READY
    ========================================= */

    console.log(
        "PixelBot Dashboard loaded successfully."
    );

});
```
