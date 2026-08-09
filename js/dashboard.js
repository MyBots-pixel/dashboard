```javascript
document.addEventListener("DOMContentLoaded", function () {

    console.log("PixelBot Dashboard loaded!");


    /* =====================================
       THEME
    ===================================== */

    const themeButton =
        document.getElementById("theme-toggle");

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");

        if (themeButton) {
            themeButton.textContent = "☀️";
        }
    }


    if (themeButton) {

        themeButton.addEventListener("click", function () {

            document.body.classList.toggle("light");

            const light =
                document.body.classList.contains("light");

            localStorage.setItem(
                "theme",
                light ? "light" : "dark"
            );

            themeButton.textContent =
                light ? "☀️" : "🌙";

        });

    }



    /* =====================================
       PAGES
    ===================================== */

    const pages =
        document.querySelectorAll(".dashboard-page");

    const navLinks =
        document.querySelectorAll(".nav-link");

    const pageTitle =
        document.getElementById("page-title");


    function showPage(pageName) {

        console.log("Opening page:", pageName);


        /* Hide every page */

        pages.forEach(function (page) {

            page.classList.remove("active-page");

        });


        /* Find requested page */

        const selectedPage =
            document.getElementById(pageName);


        /* Show requested page */

        if (selectedPage) {

            selectedPage.classList.add(
                "active-page"
            );

        } else {

            console.error(
                "Page not found:",
                pageName
            );

            return;

        }


        /* Update sidebar */

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("data-page")
                === pageName
            ) {

                link.classList.add("active");

            }

        });


        /* Update title */

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


        window.scrollTo(0, 0);

    }



    /* =====================================
       ALL DATA-PAGE BUTTONS
    ===================================== */

    document
        .querySelectorAll("[data-page]")
        .forEach(function (element) {

            element.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    const pageName =
                        element.getAttribute(
                            "data-page"
                        );

                    showPage(pageName);

                }
            );

        });



    /* =====================================
       QUICK CONTROL BUTTONS
    ===================================== */

    document
        .querySelectorAll(".open-control")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    const pageName =
                        button.getAttribute(
                            "data-target"
                        );

                    showPage(pageName);

                }
            );

        });



    /* =====================================
       SETTINGS SWITCHES
    ===================================== */

    document
        .querySelectorAll(".switch input")
        .forEach(function (toggle) {

            const setting =
                toggle.getAttribute(
                    "data-setting"
                );


            if (setting) {

                const saved =
                    localStorage.getItem(
                        "setting_" + setting
                    );

                if (saved !== null) {

                    toggle.checked =
                        saved === "true";

                }


                toggle.addEventListener(
                    "change",
                    function () {

                        localStorage.setItem(
                            "setting_" + setting,
                            toggle.checked
                        );

                    }
                );

            }

        });



    /* =====================================
       NOTIFICATIONS
    ===================================== */

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
            function (event) {

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
            function () {

                notificationPanel.classList.remove(
                    "open"
                );

            }
        );

    }



    /* =====================================
       PREMIUM
    ===================================== */

    const premiumButton =
        document.querySelector(
            ".premium-button"
        );


    if (premiumButton) {

        premiumButton.addEventListener(
            "click",
            function () {

                alert(
                    "Premium will be connected later!"
                );

            }
        );

    }



    /* =====================================
       SERVER SELECTOR
    ===================================== */

    const serverBox =
        document.querySelector(
            ".server-box"
        );


    if (serverBox) {

        serverBox.addEventListener(
            "click",
            function () {

                alert(
                    "Server selection will be connected later!"
                );

            }
        );

    }



    /* =====================================
       START ON DASHBOARD
    ===================================== */

    showPage("dashboard");

});
```
