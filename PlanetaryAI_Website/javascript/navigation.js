// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the burger menu element
    const burgerMenu = document.querySelector('.burger-menu');
    const navMiddle = document.querySelector('.nav-middle');
    const navRight = document.querySelector('.nav-right');

    // Add click event listener to burger menu
    burgerMenu.addEventListener('click', function() {
        navMiddle.classList.toggle('show');
        navRight.classList.toggle('show');
    });

    // Close menu when clicking outside (optional)
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.burger-menu') && 
            !event.target.closest('.nav-middle') && 
            !event.target.closest('.nav-right')) {
            navMiddle.classList.remove('show');
            navRight.classList.remove('show');
        }
    });

    // Close menu when window is resized to desktop size (optional)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMiddle.classList.remove('show');
            navRight.classList.remove('show');
        }
    });
});