window.onload = () => {
    // Selección de los elementos de login
    let username = document.querySelector(
        "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(1) > ion-card-content > ion-list > ion-item:nth-child(1) > ion-input"
    );

    let password = document.querySelector(
        "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(1) > ion-card-content > ion-list > ion-item:nth-child(2) > ion-input"
    );

    let loginButton = document.querySelector(
        "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(1) > ion-card-content > ion-button"
    );


    let back = null;

    setInterval(() => {
        try {
            back = document.querySelector("#root > ion-app > ion-router-outlet > div");

            back.removeAttribute("style");
        } catch (error) {
            console.log(error);
        }
    }, 50);

    try {
        let dark = document.querySelector("#main > div > ion-header > ion-toolbar > ion-chip > ion-toggle")
        dark.setAttribute("checked", true);
    } catch (error) {
        
    }

    // Si los elementos existen, asigna los valores y haz clic en el botón de login
    if (username && password && loginButton) {
        username.value = "jgarcia";
        password.value = "Lacosa05.";

        username.dispatchEvent(new Event("input", { bubbles: true }));
        password.dispatchEvent(new Event("input", { bubbles: true }));

        function login() {
            loginButton.dispatchEvent(new Event("click", { bubbles: true }));
        }

        setTimeout(login, 100);
    }

    let tutorial = null;

    setInterval(() => {
        try {
            tutorial = document.querySelector(
                "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(2)"
            );

            tutorial.setAttribute("style", "display: none;");
        } catch (error) {
            console.log(error);
        }
    }, 50);

    try {
        let dark = document.querySelector("#main > div > ion-header > ion-toolbar > ion-chip > ion-toggle")
        dark.setAttribute("checked", true);
    } catch (error) {
        
    }


};
