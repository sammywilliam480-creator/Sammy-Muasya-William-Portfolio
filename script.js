document.addEventListener('DOMContentLoaded', () => {
    // --- SCROLL SPY ACTIVE SECTION RECOGNITION ---
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');

    const updateActiveNavLink = () => {
        let currentSectionId = 'home';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveNavLink);
    window.addEventListener('load', updateActiveNavLink);

    // --- INTERACTIVE SUBMIT LAYOUT REACTION ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.textContent = "Processing Record Transmission...";
            submitButton.style.backgroundColor = "transparent";
            submitButton.style.color = "var(--color-spms-orange)";
            submitButton.disabled = true;
        });
    }
});
