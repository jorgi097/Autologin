window.onload = () => {
    let username = document.querySelector(
        "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(1) > ion-card-content > ion-list > ion-item:nth-child(1) > ion-input"
    );

    let password = document.querySelector(
        "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(1) > ion-card-content > ion-list > ion-item:nth-child(2) > ion-input"
    );

    let loginButton = document.querySelector(
        "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(1) > ion-card-content > ion-button"
    );

    username.value = "jgarcia";
    password.value = "Lacosa05.";

    username.dispatchEvent(new Event("input", { bubbles: true }));
    password.dispatchEvent(new Event("input", { bubbles: true }));

    function login() {
        loginButton.dispatchEvent(new Event("click", { bubbles: true }));
    }
    setTimeout(login, 100);

    let tutorial = document.querySelector(
        "#main > div > ion-content > ion-grid > ion-row > ion-col > ion-card:nth-child(2)"
    );

    tutorial.style.display = "none";
};
