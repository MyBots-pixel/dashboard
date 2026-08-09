```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       THEME TOGGLE
    ========================================= */

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

            const lightMode =
                document.body.classList.contains("light");

            localStorage.setItem(
                "theme",
                lightMode ? "light" : "dark"
            );

            themeButton.textContent =
                lightMode ? "☀️" : "🌙";

        });

    }



    /* =========================================
       PAGE NAVIGATION
    ========================================= */

    const navLinks =
        document.querySelectorAll(".nav-link");

    const pages =
        document.querySelectorAll(".dashboard-page");

    const pageTitle =
        document.getElementById("page-title");


    function openPage(pageName) {

        if (!pageName) return;


        /* Hide all pages */

        pages.forEach(page => {

            page.classList.remove(
                "active-page"
            );

        });


        /* Show selected page */

        const selectedPage =
            document.getElementById(pageName);

        if (selectedPage) {

            selectedPage.classList.add(
                "active-page"
            );

        }


        /* Update active sidebar button */

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



    /* =========================================
       SIDEBAR BUTTONS
    ========================================= */

    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                openPage(
                    link.dataset.page
                );

            }
        );

    });



    /* =========================================
       BUTTONS WITH data-page
    ========================================= */

    document
        .querySelectorAll("[data-page]")
        .forEach(element => {

            /*
             * Skip sidebar links because they
             * already have their own listener.
             */

            if (
                element.classList.contains(
                    "nav-link"
                )
            ) {
                return;
            }


            element.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    openPage(
                        element.dataset.page
                    );

                }
            );

        });



    /* =========================================
       QUICK CONTROL BUTTONS
    ========================================= */

    document
        .querySelectorAll(".open-control")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    event.stopPropagation();

                    const target =
                        button.dataset.target;

                    if (target) {

                        openPage(target);

                    }

                }
            );

        });



    /* =========================================
       SETTINGS SWITCHES
    ========================================= */

    document
        .querySelectorAll(".switch input")
        .forEach(toggle => {

            const setting =
                toggle.dataset.setting;


            /* Load saved setting */

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


            /* Save setting when changed */

            toggle.addEventListener(
                "change",
                () => {

                    if (!setting) return;

                    localStorage.setItem(
                        "setting_" + setting,
                        toggle.checked
                    );

                }
            );

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
            event => {

                event.stopPropagation();

                notificationPanel.classList.remove(
                    "open"
                );

            }
        );

    }


    /* Close notifications when clicking outside */

    document.addEventListener(
        "click",
        event => {

            if (
                notificationPanel &&
                notificationButton &&
                !notificationPanel.contains(
                    event.target
                ) &&
                !notificationButton.contains(
                    event.target
                )
            ) {

                notificationPanel.classList.remove(
                    "open"
                );

            }

        }
    );



    /* =========================================
       PREMIUM BUTTON
    ========================================= */

    document
        .querySelectorAll(".premium-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    alert(
                        "Premium checkout will be connected later."
                    );

                }
            );

        });



    /* =========================================
       SERVER SELECTOR
    ========================================= */

    const serverBox =
        document.querySelector(
            ".server-box"
        );


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



    /* =========================================
       DASHBOARD LOADED
    ========================================= */

    console.log(
        "PixelBot Dashboard loaded successfully!"
    );

});
```
