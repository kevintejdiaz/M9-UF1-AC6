const switchCheckbox = document.querySelector('#switch-label');
const body = document.querySelector('.bodyIndex'); // Clase para el body
const navbar = document.querySelector('.navbar-pcs');
const logoWEB = document.querySelector('.logoWEB');
const navLinks = document.querySelectorAll('.navLink');
const footer = document.querySelector('.footer-index');
const imgIndex = document.querySelectorAll('.img-index img'); // Selecciona todas las imágenes en .img-index
const getStartedButton = document.getElementById('get-started-button');


window.onload = () => {
    switchCheckbox.addEventListener('change', () => {
        if (switchCheckbox.checked) {
            body.classList.add('night-mode'); 
            navbar.classList.add('night-mode');
            logoWEB.classList.add('night-mode');
            navLinks.forEach(navLink => {
                navLink.classList.add('night-mode');
            });
            imgIndex.forEach(img => {
                img.classList.add('night-mode');
            });
            footer.classList.add('night-mode');
        } else {
            body.classList.remove('night-mode'); 
            navbar.classList.remove('night-mode');
            logoWEB.classList.remove('night-mode');
            navLinks.forEach(navLink => {
                navLink.classList.remove('night-mode');
            });
            imgIndex.forEach(img => {
                img.classList.remove('night-mode');
            });
            footer.classList.remove('night-mode');
        }
    });
    
    getStartedButton.addEventListener('click', () => {
        window.location.href = 'pcs.html';
    });    


};

