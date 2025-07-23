// Navigation Module - Smooth scrolling and navigation functionality

// Enhanced smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                if (window.isReducedMotion) {
                    window.scrollTo(0, targetPosition);
                } else {
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Focus the target for accessibility
                setTimeout(() => {
                    target.focus();
                }, window.isReducedMotion ? 0 : 500);
            }
        });
    });
}

// Export for use in other modules
window.initSmoothScrolling = initSmoothScrolling; 