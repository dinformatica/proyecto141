// ============================
// 1. Referencias a elementos del DOM
// ============================

// Botón para abrir el menú (ícono de hamburguesa)
const menuOpenButton = document.getElementById("menu-abrir-button");

// Botón para cerrar el menú (ícono de "X")
const menuCloseButton = document.getElementById("menu-cerrar-button");

// ============================
// 2. Funcionalidad: abrir el menú móvil
// ============================
menuOpenButton.addEventListener("click", () => {
    // Agrega la clase que muestra el menú móvil
    document.body.classList.add("show-mobile-menu");
});

// ============================
// 3. Funcionalidad: cerrar el menú móvil
// ============================
menuCloseButton.addEventListener("click", () => {
    // Elimina la clase que muestra el menú móvil
    document.body.classList.remove("show-mobile-menu");
});

// ============================
// 4. Smooth scroll y cierre de menú al hacer clic en un enlace del menú
// ============================

// Selecciona todos los enlaces de navegación
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Evita el comportamiento por defecto del enlace

        // Cierra el menú al hacer clic en cualquier enlace
        document.body.classList.remove("show-mobile-menu");

        // Obtiene el ID del destino (ej. "inicio", "sobre-mi", etc.)
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        // Hace scroll suave hasta la sección correspondiente
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Ajuste para dejar espacio al navbar
            behavior: "smooth"
        });
    });
});

// ============================
// 5. Cerrar el menú si se hace clic fuera de él
// ============================

document.addEventListener('click', function (event) {
    const menu = document.getElementById('nav-menu');
    const menuButton = document.getElementById('menu-abrir-button');

    // Si el clic no es dentro del menú ni en el botón de abrir menú, se cierra
    if (!menu.contains(event.target) && event.target !== menuButton) {
        document.body.classList.remove('show-mobile-menu');
    }
});
