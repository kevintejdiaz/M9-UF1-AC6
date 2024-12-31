
const switchCheckbox = document.querySelector('#switch-label');
const body = document.body;
const nabvar =document.querySelector(".navbar-pcs");
const logoWEB =document.querySelector(".logoWEB");
const navLinks =document.querySelectorAll(".navLink");
const buttons =document.querySelectorAll(".pcsPage");
const footer =document.querySelector(".footer-pcs");


switchCheckbox.addEventListener('change', () => {
    if (switchCheckbox.checked) {
        body.classList.add('night-mode'); 
        nabvar.classList.add('night-mode');
        logoWEB.classList.add('night-mode');
        navLinks.forEach(navLink => {
            navLink.classList.add('night-mode');
        });
        buttons.forEach(button => {
            button.classList.add('night-mode');
        });
        footer.classList.add('night-mode');

    } else {
        body.classList.remove('night-mode'); 
        nabvar.classList.remove('night-mode');
        logoWEB.classList.remove('night-mode');
        navLinks.forEach(navLink => {
            navLink.classList.remove('night-mode');
        });
        buttons.forEach(button => {
            button.classList.remove('night-mode');
        });
        footer.classList.remove('night-mode');
    }
});
