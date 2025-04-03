const menuOpenButton = document.querySelector("#menu-abrir-button");
const menuCloseButton = document.querySelector("#menu-cerrar-button");

menuOpenButton.addEventListener("click", () => {
    
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());