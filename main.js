// Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('active');
});

// FAQ Accordion with Accessibility Enhancements
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isOpen = button.getAttribute('aria-expanded') === 'true';
        
        button.setAttribute('aria-expanded', !isOpen);
        answer.style.display = isOpen ? 'none' : 'block';
        button.querySelector('.toggle').textContent = isOpen ? '+' : '−';
    });

    // Keyboard Accessibility for FAQ Accordion
    button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            button.click();
        }
    });
});
