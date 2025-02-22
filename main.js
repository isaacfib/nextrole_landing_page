document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');
    
    hamburger.addEventListener('click', () => {
        const isExpanded = nav.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
        hamburger.textContent = isExpanded ? '✕' : '☰';
    });
    
    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.textContent = '☰';
        });
    });
    
    // FAQ Section Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            question.setAttribute('aria-expanded', !isExpanded);
            
            // Close other open questions
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.setAttribute('aria-expanded', 'false');
                }
            });
        });
        
        // Add keyboard support
        question.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                question.click();
            }
        });
    });
});
