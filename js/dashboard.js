```javascript
document.addEventListener("DOMContentLoaded", function () {

    console.log("Dashboard JavaScript loaded!");

    /* THEME */

    const themeButton =
        document.getElementById("theme-toggle");

    if (themeButton) {

        themeButton.addEventListener("click", function () {

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


    /* SIDEBAR */

    const buttons =
        document.querySelectorAll(".nav-link");

    const pages =
        document.querySelectorAll(".dashboard-page");


    buttons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const pageName =
                button.getAttribute("data-page");


            pages.forEach(function (page) {

                page.classList.remove(
                    "active-page"
                );

            });


            const page =
                document.getElementById(pageName);

            if (page) {

                page.classList.add(
                    "active-page"
                );

            }


            buttons.forEach(function (item) {

                item.classList.remove("active");

            });

            button.classList.add("active");


            const title =
                document.getElementById("page-title");

            if (title) {

                title.textContent =
                    button.textContent.trim();

            }

        });

    });


    /* QUICK CONTROL BUTTONS */

    const controls =
        document.querySelectorAll(".open-control");


    controls.forEach(function (button) {

        button.addEventListener("click", function () {

            const pageName =
                button.getAttribute("data-target");


            pages.forEach(function (page) {

                page.classList.remove(
                    "active-page"
                );

            });


            const page =
                document.getElementById(pageName);

            if (page) {

                page.classList.add(
                    "active-page"
                );

            }


            buttons.forEach(function (item) {

                item.classList.remove("active");

                if (
                    item.getAttribute("data-page")
                    === pageName
                ) {

                    item.classList.add("active");

                }

            });


            const title =
                document.getElementById("page-title");

            if (title) {

                title.textContent =
                    pageName.charAt(0).toUpperCase()
                    + pageName.slice(1);

            }

        });

    });


    /* LOAD THEME */

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light");

        if (themeButton) {
            themeButton.textContent = "☀️";
        }

    }


});
```
