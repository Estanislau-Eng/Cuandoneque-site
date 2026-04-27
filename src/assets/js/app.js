document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.querySelector(".menu");

    if (!menuToggle || !menu) return;

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        menu.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link (mobile)
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            menu.classList.remove("active");
        });
    });

    // Ajusta ao redimensionar a tela
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            menu.classList.remove("active");
            menuToggle.classList.remove("active");
        }
    });
});