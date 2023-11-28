// Header Scroll
const header = document.querySelector("header");

const headerChangeColor = function () {
    window.scrollY > 50
        ? header.classList.add("scroll")
        : header.classList.remove("scroll");
};
window.addEventListener("scroll", headerChangeColor);

// ts-features section
// ts-features tabs

let navTabsLi = document.querySelectorAll("#ts-features .featured-tab .nav-tabs li ");
let navTabs = document.querySelectorAll("#ts-features .featured-tab .nav-tabs li a");

function handleActiveClass() {
    navTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            navTabs.forEach(tab => {
                tab.closest("li").classList.remove("active");
            })
            this.closest("li").classList.add("active");
        })
    })
}
handleActiveClass();