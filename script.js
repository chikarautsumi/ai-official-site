document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const nav = document.querySelector('#nav');
    
    // Mobile hamburger toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    

    // Hash-based routing and active states
    function updateActiveNavigation() {
        const currentHash = window.location.hash || '#intro';
        
        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current nav link
        const activeLink = document.querySelector(`.nav-link[href="${currentHash}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Show/hide panels (smooth scrolling to section)
        const targetPanel = document.querySelector(currentHash);
        if (targetPanel) {
            targetPanel.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    // Update navigation on hash change  
    window.addEventListener('hashchange', updateActiveNavigation);
    
    // Initialize navigation on page load
    updateActiveNavigation();
    
    // Smooth scroll for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Update URL hash
                history.pushState(null, null, targetId);
                
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active state
                updateActiveNavigation();
            }
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const sections = ['intro', 'news', 'music', 'live', 'contact', 'about'];
        const currentHash = window.location.hash.replace('#', '') || 'intro';
        const currentIndex = sections.indexOf(currentHash);
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % sections.length;
            window.location.hash = sections[nextIndex];
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
            window.location.hash = sections[prevIndex];
        } else if (e.key === 'Home') {
            e.preventDefault();
            window.location.hash = 'intro';
        } else if (e.key === 'End') {
            e.preventDefault();
            window.location.hash = 'about';
        }
    });
    
    // Add loading animation for external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            this.classList.add('loading');
            setTimeout(() => {
                this.classList.remove('loading');
            }, 2000);
        });
    });
    
    // Add subtle entrance animations to content elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    // Observe content elements for animations
    document.querySelectorAll('.content > *').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});