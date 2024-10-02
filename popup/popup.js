const enable = document.getElementById("enable");

function toggleEnable() {
    enable.innerHTML =
        enable.innerHTML === "Desactivar" ? "Activar" : "Desactivar";
}

toggleEnable();

enable.addEventListener("click", toggleEnable);