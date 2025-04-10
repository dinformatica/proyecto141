const menuOpenButton = document.getElementById("menu-abrir-button");
const menuCloseButton = document.getElementById("menu-cerrar-button");

// Abrir el menú
menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

// Cerrar el menú
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

// Smooth scroll para navegación y cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        
        // Cerrar el menú con transición suave
        document.body.classList.remove("show-mobile-menu");

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        // Desplazamiento suave hacia la sección
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Ajuste si tienes un navbar fijo
            behavior: "smooth" // Hace el desplazamiento suave
        });
    });
});


// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function (event) {
    const menu = document.getElementById('nav-menu');
    const menuButton = document.getElementById('menu-abrir-button');

    // Si el clic no es dentro del menú ni en el botón de abrir, cerramos el menú
    if (!menu.contains(event.target) && event.target !== menuButton) {
        document.body.classList.remove('show-mobile-menu');
    }
});

