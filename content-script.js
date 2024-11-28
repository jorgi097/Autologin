(function () {
    let username, password, loginButton, tutorial, back, dark;

    const intervalTimeout = 200;

    const toggleDarkMode = setInterval(() => {
        //Dark Theme
        try {
            let dark = document.querySelector(
                "#main > div > ion-header > ion-toolbar > ion-chip > ion-toggle"
            );
        } catch (error) {
            console.error(error);
        }
        if (!!dark) {
            dark.setAttribute("checked", true);
            clearInterval(toggleDarkMode);
        }
    }, intervalTimeout);

    const removeBAckground = setInterval(() => {
        //Elimina Fondo
        try {
            back = document.querySelector(
                "#root > ion-app > ion-router-outlet > div"
            );
        } catch (error) {
            console.error(error);
        }
        if (!!back) {
            back.removeAttribute("style");
            clearInterval(removeBAckground);
        }
    }, intervalTimeout);

    const login = setInterval(() => {
        //Inicia Sesion
        if (!username || !password || !loginButton) {
            try {
                username = document.querySelector(
                    "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(1) > ion-card-content > ion-list > ion-item:nth-child(1) > ion-input"
                );

                password = document.querySelector(
                    "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(1) > ion-card-content > ion-list > ion-item:nth-child(2) > ion-input"
                );

                loginButton = document.querySelector(
                    "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(1) > ion-card-content > ion-button"
                );
            } catch (error) {
                console.error(error);
            }
        }

        if (!!username && !!password && !!loginButton) {
            username.value = "jgarcia";
            password.value = "Lacosa05.";

            username.dispatchEvent(new Event("input", { bubbles: true }));
            password.dispatchEvent(new Event("input", { bubbles: true }));

            if (username.value === "jgarcia" && password === "Lacosa05.") {
                loginButton.dispatchEvent(
                    new Event("click", {bubbles: true})
                );
                clearInterval(login);
            }
        }
    }, intervalTimeout);

    const removeTutorial = setInterval(() => {
        //Elimina Tutorial

        if (!tutorial) {
            try {
                tutorial = document.querySelector(
                    "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(2)"
                );
            } catch (error) {
                console.error(error);
            }
        }

        if (!!tutorial) {
            tutorial = document.querySelector(
                "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(2)"
            );
            tutorial.setAttribute("style", "display: none;");
            if (tutorial.classList.contains("display: none"))
                console.log(tutorial.classList + "yes");
            // clearInterval(removeTutorial);
        }
    }, intervalTimeout);
})();
