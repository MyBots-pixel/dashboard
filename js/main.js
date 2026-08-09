```javascript
document.addEventListener("DOMContentLoaded", () => {

    const themeButton = document.getElementById("theme-toggle");


    /* =========================================
       LOAD SAVED THEME
    ========================================= */

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


    /* =========================================
       THEME TOGGLE
    ========================================= */

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
       SMOOTH NAVIGATION
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* =========================================
       PREMIUM BUTTON
    ========================================= */

    document.querySelectorAll(".premium-button").forEach(button => {

        button.addEventListener("click", event => {

            const href =
                button.getAttribute("href");

            if (!href) {

                event.preventDefault();

                alert(
                    "PixelBot Premium will be available soon!"
                );

            }

        });

    });

});
```
