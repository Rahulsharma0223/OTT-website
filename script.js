document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar');
    const navbarLinksItems = document.querySelectorAll('.navbar-links ul li a');

    toggleButton.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });

    // Automatically hide the menu when a link is clicked
    navbarLinksItems.forEach(item => {
    item.addEventListener('click', function() {
        navbarLinks.classList.remove('active');
        });
    });
});