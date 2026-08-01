const fechaEvento = new Date(2026, 7, 22, 12, 0, 0).getTime();

const countdownInterval = setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    const elDays = document.getElementById("days");
    const elHours = document.getElementById("hours");
    const elMinutes = document.getElementById("minutes");
    const elSeconds = document.getElementById("seconds");

    if (elDays && elHours && elMinutes && elSeconds) {
        elDays.innerText = dias < 10 ? "0" + dias : dias;
        elHours.innerText = horas < 10 ? "0" + horas : horas;
        elMinutes.innerText = minutos < 10 ? "0" + minutos : minutos;
        elSeconds.innerText = segundos < 10 ? "0" + segundos : segundos;
    }

    if (distancia < 0) {
        clearInterval(countdownInterval);
        const countdownContainer = document.getElementById("countdown");
        if (countdownContainer) {
            countdownContainer.innerHTML =
                "<h3 style='color: #D90429; font-size: 1.1rem; margin: 5px 0;'>🍎 ¡La fiesta mágica ha comenzado! 🍎</h3>";
        }
    }
}, 1000);

// Botón de la Fiesta
const btnFiesta = document.querySelector(".btn-fiesta");
if (btnFiesta) {
    btnFiesta.addEventListener("click", () => {
        const direccionFiesta = encodeURIComponent("Calle Calvario 28, Atlacomulco, Cuernavaca, Morelos");
        window.open(`https://www.google.com/maps/search/?api=1&query=${direccionFiesta}`, "_blank");
    });
}