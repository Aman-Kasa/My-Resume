// Toggle navbar visibility on mobile devices
function toggleNav() {
    const navLinks = document.getElementById("navLinks");
    const overlay = document.getElementById("fullscreenOverlay");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
        overlay.style.display = "none"; // Hide the overlay
    } else {
        navLinks.style.display = "flex";
        overlay.style.display = "flex"; // Show the overlay
    }
}

// Contact form submission validation
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});
