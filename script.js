document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');

    // Add click listener to the hamburger menu icon
    if (hamburgerMenu && mainNav) { // Ensure both elements exist
        hamburgerMenu.addEventListener('click', function() {
            mainNav.classList.toggle('open');       // Toggles visibility of the nav
            hamburgerMenu.classList.toggle('open'); // Toggles hamburger icon animation
        });

        // Optional: Close menu when a nav link is clicked (for single-page sites)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('open')) { // Only close if it's open
                    mainNav.classList.remove('open');
                    hamburgerMenu.classList.remove('open');
                }
            });
        });
    } else {
        console.error("Hamburger menu or main navigation element not found. Check your HTML IDs.");
    }
});