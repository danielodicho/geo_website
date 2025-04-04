document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Trail filters functionality
    const difficultyFilter = document.getElementById('difficulty');
    const featureFilter = document.getElementById('feature');
    const distanceFilter = document.getElementById('distance');
    const searchFilter = document.getElementById('search');
    
    if (difficultyFilter || featureFilter || distanceFilter || searchFilter) {
        const filters = [difficultyFilter, featureFilter, distanceFilter, searchFilter].filter(Boolean);
        
        filters.forEach(filter => {
            filter.addEventListener('change', filterTrails);
        });
        
        if (searchFilter) {
            searchFilter.addEventListener('input', filterTrails);
        }
    }
    
    function filterTrails() {
        // This would be implemented with actual trail filtering logic
        console.log('Filtering trails...');
        // In a real implementation, this would show/hide trail cards based on filter criteria
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput && emailInput.value) {
                // This would normally send the data to a server
                alert('Thanks for subscribing! You\'ll receive updates about new trail discoveries.');
                emailInput.value = '';
            }
        });
    }
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // This would normally send the data to a server
            alert('Thanks for your message! I\'ll get back to you soon.');
            this.reset();
        });
    }
    
    // Comment form submission
    const commentForm = document.querySelector('.comment-form');
    
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // This would normally send the data to a server
            alert('Thanks for sharing your experience! Your comment will appear after moderation.');
            this.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
