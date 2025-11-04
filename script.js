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
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');

    // --- 1. Hamburger Menu Logic (Existing) ---
    if (hamburgerMenu && mainNav) { 
        hamburgerMenu.addEventListener('click', function() {
            mainNav.classList.toggle('open');
            hamburgerMenu.classList.toggle('open');
        });

        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('open')) {
                    mainNav.classList.remove('open');
                    hamburgerMenu.classList.remove('open');
                }
            });
        });
    } else {
        console.error("Hamburger menu or main navigation element not found. Check your HTML IDs.");
    }

    // --- 2. New Profile Toggle Logic (ADD THIS) ---
    const toggleProfileBtn = document.getElementById('toggle-profile-btn');
    const profileContentArea = document.getElementById('profile-content-area');

    if (toggleProfileBtn && profileContentArea) {
        toggleProfileBtn.addEventListener('click', function() {
            // Check if the content is currently hidden
            const isHidden = profileContentArea.classList.contains('hidden');

            if (isHidden) {
                profileContentArea.classList.remove('hidden'); // Show the content
                toggleProfileBtn.textContent = 'Hide Full Professional Profile'; // Update button text
            } else {
                profileContentArea.classList.add('hidden'); // Hide the content
                toggleProfileBtn.textContent = 'Show Full Professional Profile'; // Update button text
            }
        });
    }
});