// Experience Module - Expandable experience sections and related functionality

// Experience toggle functionality
function toggleExperience(index) {
    const details = document.getElementById(`experience-${index}`);
    const button = details.previousElementSibling.querySelector('.expand-button');
    
    if (details.classList.contains('expanded')) {
        details.classList.remove('expanded');
        button.classList.remove('expanded');
        button.setAttribute('aria-expanded', 'false');
    } else {
        details.classList.add('expanded');
        button.classList.add('expanded');
        button.setAttribute('aria-expanded', 'true');
        
        // Add a subtle animation to the content
        if (!window.isReducedMotion) {
            const items = details.querySelectorAll('.bg-gray-50');
            items.forEach((item, i) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    item.style.transition = 'all 0.3s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, window.isLowPowerMode ? 0 : i * 100);
            });
        }
    }
}

// Export for use in other modules
window.toggleExperience = toggleExperience; 