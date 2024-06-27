// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation for the contact form
document.querySelector('#contactForm').addEventListener('submit', function(e) {
    let isValid = true;
    const formElements = this.elements;

    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].type !== "submit" && formElements[i].value === "") {
            isValid = false;
            formElements[i].classList.add('border-red-500');
        } else {
            formElements[i].classList.remove('border-red-500');
        }
    }

    if (!isValid) {
        e.preventDefault();
        alert('Please fill in all required fields.');
    }
});
