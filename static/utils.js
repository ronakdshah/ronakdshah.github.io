// Utilities Module - Performance optimizations, global variables, and utility functions

// Performance optimizations
window.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
window.isLowPowerMode = navigator.hardwareConcurrency <= 4;

// Performance monitoring
function initPerformanceMonitoring() {
    if (window.performance && window.performance.mark) {
        window.performance.mark('portfolio-loaded');
        window.performance.measure('portfolio-load-time', 'navigationStart', 'portfolio-loaded');
    }
}

// Service Worker registration for offline support (optional)
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // Uncomment to enable service worker
            // navigator.serviceWorker.register('/sw.js');
        });
    }
}

// Export for use in other modules
window.initPerformanceMonitoring = initPerformanceMonitoring;
window.initServiceWorker = initServiceWorker; 