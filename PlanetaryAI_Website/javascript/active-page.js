document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentPage = window.location.pathname.split('/').pop();
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Remove any existing active classes
    navLinks.forEach(link => {
        link.classList.remove('active');
        // If the href matches the current page, add active class
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Function to toggle the mobile menu
function toggleMenu() {
    const navMiddle = document.querySelector('.nav-middle');
    navMiddle.classList.toggle('active'); // Toggle the active class
}
