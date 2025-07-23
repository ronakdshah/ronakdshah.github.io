// Main Module - Application initialization and coordination

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme manager
    const themeManager = new window.ThemeManager();
    
    // Setup accessibility
    window.setupAccessibility();
    window.setupKeyboardNavigation();
    
    // Listen for theme changes
    window.addEventListener('themeChanged', function(e) {
        window.announceThemeChange(e.detail.theme);
    });
    
    // Initialize intersection observer
    window.initIntersectionObserver();
    
    // Initialize skill tabs
    window.initSkillTabs();
    
    // Initialize smooth scrolling
    window.initSmoothScrolling();
    
    // Initialize hover effects
    window.initHoverEffects();
    
    // Initialize parallax
    window.initParallax();
    
    // Initialize project animations
    window.initProjectAnimations();
    
    // Initialize search functionality
    window.initSearch();
    
    // Initialize typing effect
    const heroTitle = document.querySelector('#about h1');
    if (heroTitle && !window.isReducedMotion) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            window.typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
    
    // Trigger number animation when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                window.animateNumbers();
                statsObserver.unobserve(entry.target);
            }
        });
    });

    const statsSection = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-3');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    // Trigger counter animation when achievements section is visible
    const achievementsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                window.animateCounters();
                achievementsObserver.unobserve(entry.target);
            }
        });
    });

    const achievementsSection = document.querySelector('.bg-gradient-to-r.from-purple-600.to-blue-600');
    if (achievementsSection) {
        achievementsObserver.observe(achievementsSection);
    }
    
    // Initialize performance monitoring
    window.initPerformanceMonitoring();
    
    // Initialize service worker
    window.initServiceWorker();
}); 