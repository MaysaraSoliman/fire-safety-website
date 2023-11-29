// ts-features section
// ts-features tabs

let navTabsLi = document.querySelectorAll("#ts-features .featured-tab .nav-tabs li ");
let navTabs = document.querySelectorAll("#ts-features .featured-tab .nav-tabs li a");

function tsFeaturesHandleActiveClass() {
    navTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            navTabs.forEach(tab => {
                tab.closest("li").classList.remove("active");
            })
            this.closest("li").classList.add("active");
        })
    })
}
tsFeaturesHandleActiveClass();

// Project-area
// Project nav-tabs

const projectNavLi = document.querySelectorAll("#project-area .project-nav li ");

function projectAreaHandleActiveClass() {
    projectNavLi.forEach(tab => {
        tab.addEventListener("click", function () {
            projectNavLi.forEach(tab => {
                tab.classList.remove("active");
            })
            this.classList.add("active");
        })
    })
}
projectAreaHandleActiveClass();