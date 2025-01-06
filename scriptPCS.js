
const switchCheckbox = document.querySelector('#switch-label');
const body = document.body;
const nabvar =document.querySelector(".navbar-pcs");
const logoWEB =document.querySelector(".logoWEB");
const navLinks =document.querySelectorAll(".navLink");
const buttons =document.querySelectorAll(".pcsPage");
const footer =document.querySelector(".footer-pcs");
const articlesText =document.querySelectorAll(".pcsPage");


window.onload = () => {
    const articles =document.querySelectorAll("article");
    articles.forEach(article => {
        article.addEventListener('mouseover',showText);
        article.addEventListener('mouseout',hideText);
    });

    const articlesTitle = document.querySelectorAll('.articleTitle');
    articlesTitle.forEach(articleTitle => {
        article=articleTitle.parentNode;
        article.addEventListener('mouseover',showText);
        article.addEventListener('mouseout',hideText);
    });

    const images = document.querySelectorAll('.articleImagePCS');
    images.forEach(image => {
        article=image.parentNode;
        article.addEventListener('mouseover',showText);
        article.addEventListener('mouseout',hideText);
    });
   
}



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
        articlesText.forEach(articleText => {
            articleText.classList.add('night-mode');
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
        articlesText.forEach(articleText => {
            articleText.classList.remove('night-mode');
        });
        footer.classList.remove('night-mode');
    }
});

//mostrat texto articulo
function showText(event){
    element = event.target;
    text = element.querySelector('.articleText');
    text.style.visibility = 'visible';
}

function hideText(event){
    element = event.target;
    text = element.querySelector('.articleText');
    text.style.visibility = 'hidden';
}
