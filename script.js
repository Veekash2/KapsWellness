document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');
    
    // Target the form by its new ID
    const contactForm = document.getElementById('contact-form'); 

    // Define your EmailJS Credentials (REPLACE THESE PLACEHOLDERS)
    const SERVICE_ID = 'service_ff6ckrp';  
    const TEMPLATE_ID = 'template_kqtt8c6'; 
    const PUBLIC_KEY = '3sBBSCISY5f-5HMrG'; // This should also be in the HTML <head>

    // --- 1. Hamburger Menu and Navigation Logic ---
    if (hamburgerMenu && mainNav) { 
        // Logic to toggle hamburger menu and nav remains here...
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
    }

    // --- 2. Profile Toggle Logic ---
    const toggleProfileBtn = document.getElementById('toggle-profile-btn');
    const profileContentArea = document.getElementById('profile-content-area');

    if (toggleProfileBtn && profileContentArea) {
        toggleProfileBtn.addEventListener('click', function() {
            const isHidden = profileContentArea.classList.contains('hidden');

            if (isHidden) {
                profileContentArea.classList.remove('hidden');
                toggleProfileBtn.textContent = 'Hide Full Professional Profile';
            } else {
                profileContentArea.classList.add('hidden');
                toggleProfileBtn.textContent = 'Show Full Professional Profile';
            }
        });
    }

    // --- 3. EmailJS Form Submission Logic (FIXED POST ISSUE) ---
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // 🛑 THIS IS THE FIX 🛑: Stops the default browser POST action and prevents the 405 error
            event.preventDefault(); 

            // Get the submit button for feedback
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton ? submitButton.textContent : 'Send Message';
            
            if (submitButton) submitButton.textContent = 'Sending...';

            // Send the form data to EmailJS
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this, PUBLIC_KEY)
                .then(function() {
                    console.log('SUCCESS! Email Sent.');
                    if (submitButton) submitButton.textContent = 'Message Sent!';
                    alert('Thank you! Your message has been sent successfully.');
                    contactForm.reset(); // Clear the form
                    // Reset button text after a short delay
                    setTimeout(() => { 
                         if (submitButton) submitButton.textContent = originalButtonText;
                    }, 5000); 
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Message failed to send. Please check your network or try again later.');
                    if (submitButton) submitButton.textContent = originalButtonText;
                });
        });
    }
});