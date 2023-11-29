// Header Scroll
const header = document.querySelector("header");

const headerChangeColor = function () {
    window.scrollY > 50
        ? header.classList.add("scroll")
        : header.classList.remove("scroll");
};
window.addEventListener("scroll", headerChangeColor);

