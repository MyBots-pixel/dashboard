```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       THEME
    ================================= */

    const themeButton = document.getElementById("theme-toggle");

    function loadTheme() {
        const savedTheme = localStorage.getItem("theme");

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
    }

    loadTheme();

    if (themeButton) {
        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("light");

            const isLight =
                document.body.classList.contains("light");

            localStorage.setItem(
                "theme",
                isLight ? "light" : "dark"
            );

            themeButton.textContent =
                isLight ? "☀️" : "🌙";
        });
    }


    /* ================================
       PAGE NAVIGATION
    ================================= */

    const navLinks =
        document.querySelectorAll(".nav-link");

    const pages =
        document.querySelectorAll(".dashboard-page");

    const pageTitle =
        document.getElementById("page-title");


    function openPage(pageName) {

        if (!pageName) return;

        /* Hide every page */

        pages.forEach(page => {
            page.classList.remove("active-page");
        });


        /* Show selected page */

        const selectedPage =
            document.getElementById(pageName);

        if (selectedPage) {
            selectedPage.classList.add("active-page");
        }


        /* Update sidebar */

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.dataset.page === pageName
            ) {
                link.classList.add("active");
            }

        });


        /* Page titles */

        const titles = {

            dashboard: "Dashboard",
            commands: "Commands",
            moderation: "Moderation",
            tickets: "Tickets",
            welcome: "Welcome",
            logs: "Logs",
            members: "Members",
            analytics: "Analytics",
            premium: "Premium"

        };


        if (pageTitle) {

            pageTitle.textContent =
                titles[pageName] || "Dashboard";

        }


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* Sidebar buttons */

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            openPage(
                link.dataset.page
            );

        });

    });


    /* ================================
       ANY ELEMENT WITH data-page
    ================================= */

    document
        .querySelectorAll("[data-page]")
        .forEach(element => {

            element.addEventListener("click", event => {

                event.preventDefault();

                openPage(
                    element.dataset.page
                );

            });

        });


    /* ================================
       QUICK CONTROL BUTTONS
    ================================= */

    document
        .querySelectorAll(".open-control")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.preventDefault();
                event.stopPropagation();

                const target =
                    button.dataset.target;

                if (target) {
                    openPage(target);
                }

            });

        });


    /* ================================
       SETTINGS
    ================================= */

    document
        .querySelectorAll(".switch input")
        .forEach(toggle => {

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


            toggle.addEventListener("change", () => {

                if (!setting) return;

                localStorage.setItem(
                    "setting_" + setting,
                    toggle.checked
                );

            });

        });


    /* ================================
       NOTIFICATIONS
    ================================= */

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
            event => {

                event.stopPropagation();

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


    /* ================================
       PREMIUM
    ================================= */

    document
        .querySelectorAll(".premium-button")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.preventDefault();

                alert(
                    "Premium checkout will be connected later."
                );

            });

        });


    /* ================================
       SERVER SELECTOR
    ================================= */

    const serverBox =
        document.querySelector(".server-box");

    if (serverBox) {

        serverBox.addEventListener(
            "click",
            () => {

                alert(
                    "Server selection will be connected later."
                );

            }
        );

    }


    console.log(
        "PixelBot Dashboard loaded successfully."
    );

});
```
