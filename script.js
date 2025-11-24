// Animation de l'apparition des containers
document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.container');

    function reveal() {
        for (let i = 0; i < containers.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = containers[i].getBoundingClientRect().top;
            const revealPoint = 150;

            if (elementTop < windowHeight - revealPoint) {
                containers[i].classList.add('visible');
            }
        }
    }

    window.addEventListener('scroll', reveal);
    reveal();
});
// Navigation entre "pages"
const links = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
    link.addEventListener("click", () => {
        const pageName = link.dataset.page;

        pages.forEach(p => p.classList.remove("active"));
        document.getElementById(pageName).classList.add("active");

        window.scrollTo({top: 0, behavior: "smooth"});
    });
});

// Animation apparition
function reveal() {
    document.querySelectorAll('.container').forEach(elem => {
        const top = elem.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            elem.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", reveal);
reveal();
