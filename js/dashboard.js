document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const themeToggle = document.getElementById("theme-toggle");
    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".dashboard-page");
    const pageTitle = document.getElementById("page-title");
    const breadcrumb = document.getElementById("breadcrumb");

    const notificationButton =
        document.getElementById("notification-button");

    const notificationPanel =
        document.getElementById("notification-panel");

    const closeNotifications =
        document.getElementById("close-notifications");

    const pageButtons =
        document.querySelectorAll("[data-page-button]");


    /* =====================================================
       PAGE NAMES
    ===================================================== */

    const pageNames = {
        overview: "Overview",
        moderation: "Moderation",
        commands: "Commands",
        tickets: "Tickets",
        welcome: "Welcome",
        logs: "Logs",
        analytics: "Analytics",
        settings: "Settings",
        premium: "Premium"
    };


    /* =====================================================
       THEME
    ===================================================== */

    const savedTheme =
        localStorage.getItem("pixelbot-theme");

    if (savedTheme === "light") {

        document.body.dataset.theme = "light";

        if (themeToggle) {
            themeToggle.textContent = "☀️";
        }

    } else {

        document.body.dataset.theme = "dark";

        if (themeToggle) {
            themeToggle.textContent = "🌙";
        }

    }


    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            const currentTheme =
                document.body.dataset.theme;

            if (currentTheme === "dark") {

                document.body.dataset.theme = "light";

                localStorage.setItem(
                    "pixelbot-theme",
                    "light"
                );

                themeToggle.textContent = "☀️";

            } else {

                document.body.dataset.theme = "dark";

                localStorage.setItem(
                    "pixelbot-theme",
                    "dark"
                );

                themeToggle.textContent = "🌙";

            }

            createStars();

        });

    }


    /* =====================================================
       PAGE NAVIGATION
    ===================================================== */

    function openPage(pageName) {

        pages.forEach(page => {

            page.classList.remove("active-page");

        });


        const selectedPage =
            document.getElementById(
                `page-${pageName}`
            );

        if (selectedPage) {

            selectedPage.classList.add(
                "active-page"
            );

        }


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.dataset.page === pageName
            ) {

                link.classList.add("active");

            }

        });


        if (pageTitle) {

            pageTitle.textContent =
                pageNames[pageName] || "Dashboard";

        }


        if (breadcrumb) {

            breadcrumb.textContent =
                pageName === "overview"
                    ? "Dashboard"
                    : "Dashboard / " +
                      (pageNames[pageName] || pageName);

        }


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =====================================================
       SIDEBAR LINKS
    ===================================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const pageName =
                link.dataset.page;

            if (pageName) {

                openPage(pageName);

            }

        });

    });


    /* =====================================================
       DASHBOARD OPEN BUTTONS
    ===================================================== */

    pageButtons.forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();

            const pageName =
                button.dataset.pageButton;

            if (pageName) {

                openPage(pageName);

            }

        });

    });


    /* =====================================================
       NOTIFICATIONS
    ===================================================== */

    if (notificationButton) {

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


    if (closeNotifications) {

        closeNotifications.addEventListener(
            "click",
            () => {

                notificationPanel.classList.remove(
                    "open"
                );

            }
        );

    }


    document.addEventListener("click", event => {

        if (
            notificationPanel &&
            notificationPanel.classList.contains("open") &&
            !notificationPanel.contains(event.target) &&
            event.target !== notificationButton
        ) {

            notificationPanel.classList.remove(
                "open"
            );

        }

    });


    /* =====================================================
       SAVE BUTTONS
    ===================================================== */

    const saveButtons =
        document.querySelectorAll(
            ".primary-button"
        );

    saveButtons.forEach(button => {

        if (
            button.textContent
                .toLowerCase()
                .includes("save")
        ) {

            button.addEventListener(
                "click",
                () => {

                    const originalText =
                        button.textContent;

                    button.textContent =
                        "✓ Saved!";

                    setTimeout(() => {

                        button.textContent =
                            originalText;

                    }, 1800);

                }
            );

        }

    });


    /* =====================================================
       PREMIUM BUTTON
    ===================================================== */

    const premiumButton =
        document.querySelector(
            ".premium-button"
        );

    if (premiumButton) {

        premiumButton.addEventListener(
            "click",
            () => {

                premiumButton.textContent =
                    "Coming Soon ✨";

                setTimeout(() => {

                    premiumButton.textContent =
                        "Upgrade to Premium";

                }, 2000);

            }
        );

    }


    /* =====================================================
       SERVER SELECTOR
    ===================================================== */

    const serverBox =
        document.querySelector(".server-box");

    if (serverBox) {

        serverBox.addEventListener(
            "click",
            () => {

                alert(
                    "Server selector coming soon! 🌍"
                );

            }
        );

    }


    /* =====================================================
       SEARCH BUTTON
    ===================================================== */

    const searchButton =
        document.getElementById(
            "search-button"
        );

    if (searchButton) {

        searchButton.addEventListener(
            "click",
            () => {

                const search =
                    prompt(
                        "What would you like to find?"
                    );

                if (!search) return;

                const searchText =
                    search.toLowerCase();

                const matchingPage =
                    Object.keys(pageNames).find(
                        page =>
                            pageNames[page]
                                .toLowerCase()
                                .includes(searchText)
                    );

                if (matchingPage) {

                    openPage(matchingPage);

                } else {

                    alert(
                        "No matching dashboard page found."
                    );

                }

            }
        );

    }


    /* =====================================================
       STAR BACKGROUND
    ===================================================== */

    function createStars() {

        const background =
            document.getElementById(
                "dashboard-background"
            );

        if (!background) return;


        background
            .querySelectorAll(".pixel-star")
            .forEach(star => star.remove());


        if (
            document.body.dataset.theme !==
            "dark"
        ) {

            return;

        }


        const starCount = 80;


        for (
            let i = 0;
            i < starCount;
            i++
        ) {

            const star =
                document.createElement("div");

            star.className =
                "pixel-star";


            const size =
                Math.random() * 3 + 1;


            star.style.position =
                "absolute";

            star.style.width =
                `${size}px`;

            star.style.height =
                `${size}px`;

            star.style.borderRadius =
                "50%";

            star.style.background =
                "white";

            star.style.left =
                `${Math.random() * 100}%`;

            star.style.top =
                `${Math.random() * 100}%`;

            star.style.opacity =
                `${Math.random() * 0.7 + 0.2}`;

            star.style.boxShadow =
                "0 0 6px rgba(255,255,255,0.8)";

            star.style.animation =
                `starTwinkle ${
                    Math.random() * 3 + 2
                }s infinite ease-in-out`;

            star.style.animationDelay =
                `${Math.random() * 3}s`;


            background.appendChild(star);

        }

    }


    /* =====================================================
       STAR ANIMATION
    ===================================================== */

    const starStyle =
        document.createElement("style");

    starStyle.textContent = `

        @keyframes starTwinkle {

            0%, 100% {
                opacity: 0.2;
                transform: scale(0.8);
            }

            50% {
                opacity: 1;
                transform: scale(1.3);
            }

        }

    `;

    document.head.appendChild(starStyle);


    createStars();


    /* =====================================================
       LIVE-STYLE STATS
    ===================================================== */

    function animateNumber(
        element,
        target,
        duration = 1000
    ) {

        if (!element) return;

        let start = 0;

        const startTime =
            performance.now();


        function update(currentTime) {

            const progress =
                Math.min(
                    (currentTime - startTime) /
                    duration,
                    1
                );


            const value =
                Math.floor(
                    progress * target
                );


            element.textContent =
                value.toLocaleString();


            if (progress < 1) {

                requestAnimationFrame(
                    update
                );

            }

        }


        requestAnimationFrame(update);

    }


    /*
       These are temporary display values.
       Later we can replace them with
       real Discord bot/API data.
    */

    animateNumber(
        document.getElementById(
            "member-count"
        ),
        1284
    );


    animateNumber(
        document.getElementById(
            "moderated-count"
        ),
        347
    );


    animateNumber(
        document.getElementById(
            "ticket-count"
        ),
        12
    );


    /* =====================================================
       SWITCH FEEDBACK
    ===================================================== */

    const switches =
        document.querySelectorAll(
            ".switch input"
        );

    switches.forEach(toggle => {

        toggle.addEventListener(
            "change",
            () => {

                const setting =
                    toggle
                        .closest(".setting-row")
                        ?.querySelector("strong");

                if (setting) {

                    console.log(
                        `${setting.textContent} ${
                            toggle.checked
                                ? "enabled"
                                : "disabled"
                        }`
                    );

                }

            }
        );

    });


    /* =====================================================
       FINISHED
    ===================================================== */

    console.log(
        "🤖 PixelBot Dashboard V2 loaded successfully!"
    );

});
