
const pestanas = document.querySelectorAll(".pestana");
const paneles = document.querySelectorAll(".panel");

pestanas.forEach(pestana => {
    pestana.addEventListener("click", () => {

        pestanas.forEach(elemento => {
            elemento.classList.remove("activa");
        });

        paneles.forEach(panel => {
            panel.classList.remove("activo");
        });

        pestana.classList.add("activa");

        const id = pestana.dataset.tab;

        document.getElementById(id).classList.add("activo");

    });
});
