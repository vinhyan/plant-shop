const hamburger = document.getElementById('hamburger'); 
const navLinks = document.getElementById('navbar-mobile');
const socialLinks = document.getElementById('social-mobile')

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    socialLinks.classList.toggle('show');
});