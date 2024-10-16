// Toggle navbar visibility on mobile devices
function toggleNav() {
    const navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}

// Contact form submission validation
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});
