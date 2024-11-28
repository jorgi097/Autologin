window.onload = () => {
    const intervalTimeout = 200;
    const loginPage = "http://tickets.corporativoes.com/login";
    const homePage = "http://tickets.corporativoes.com/home";
    let currentPage = window.location.href;

    function startRemoveTutorial() {
        const removeTutorialInterval = setInterval(() => {
            //Elimina Tutorial
            console.log("Intento desde: Tutorial");
            currentPage = window.location.href;
            if (currentPage === homePage) {
                try {
                    let tutorial = document.querySelector(
                        "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(2)"
                    );
                    if (!!tutorial) {
                        // console.log(tutorial.style.display === 'none');

                        tutorial.setAttribute("style", "display: none;");
                    }
                } catch (error) {
                    // console.error(error);
                }
            }
        }, intervalTimeout);
    }

    function startRemoveBackground() {
        const removeBackgroundInterval = setInterval(() => {
            //Elimina Fondo
            console.log("Intento desde: Background");
            currentPage = window.location.href;
            if (currentPage === homePage) {
                try {
                    let back = document.querySelector(
                        "#root > ion-app > ion-router-outlet > div"
                    );
                    if (!!back) {
                        back.removeAttribute("style");
                        clearInterval(removeBackgroundInterval);
                    }
                } catch (error) {
                    // console.error(error);
                }
            }
        }, intervalTimeout);
    }

    if (currentPage === loginPage) {
        const toggleDarkModeInterval = setInterval(() => {
            //Dark Theme
            console.log("Intento desde: Dark");
            try {
                let dark = document.querySelector(
                    "#main > div > ion-header > ion-toolbar > ion-chip > ion-toggle"
                );
                if (!!dark) {
                    dark.setAttribute("checked", true);
                    clearInterval(toggleDarkModeInterval);
                }
            } catch (error) {
                // console.error(error);
            }
        }, intervalTimeout);

        const loginInterval = setInterval(() => {
            // Inicia Sesion
            console.log("Intento desde: Login");
            currentPage = window.location.href;
            if (currentPage === loginPage) {
                // loginAttempts++;
                try {
                    let username = document.querySelector(
                        "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(1) > ion-card-content > ion-list > ion-item:nth-child(1) > ion-input"
                    );

                    let password = document.querySelector(
                        "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(1) > ion-card-content > ion-list > ion-item:nth-child(2) > ion-input"
                    );

                    let loginButton = document.querySelector(
                        "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(1) > ion-card-content > ion-button"
                    );

                    // Si los elementos existen, asigna los valores y haz clic en el botón de login
                    if (!!username && !!password && !!loginButton) {
                        username.value = "jgarcia";
                        password.value = "Lacosa05.";

                        username.dispatchEvent(
                            new Event("input", { bubbles: true })
                        );
                        password.dispatchEvent(
                            new Event("input", { bubbles: true })
                        );

                        function login() {
                            loginButton.dispatchEvent(
                                new Event("click", {
                                    bubbles: true,
                                })
                            );
                        }
                        if (
                            username.value === "jgarcia" &&
                            password.value === "Lacosa05."
                        ) {
                            setTimeout(login, intervalTimeout);
                        }
                    }
                } catch (error) {
                    // console.error(error);
                }
            } else {
                startRemoveBackground();
                startRemoveTutorial();
                clearInterval(loginInterval);
            }
        }, intervalTimeout);
        
    } else {
        startRemoveTutorial();
        startRemoveBackground();
    }
};
