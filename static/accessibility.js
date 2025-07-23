// Accessibility Module - ARIA setup, keyboard navigation, and accessibility features

// ARIA setup and accessibility enhancements
function setupAccessibility() {
    // Add ARIA labels to interactive elements
    const skillTabs = document.querySelectorAll('.skill-tab');
    skillTabs.forEach((tab, index) => {
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    });
    
    const skillContents = document.querySelectorAll('.skill-content');
    skillContents.forEach((content, index) => {
        content.setAttribute('role', 'tabpanel');
        content.setAttribute('aria-labelledby', `tab-${index + 1}`);
    });
    
    // Add ARIA labels to expandable sections
    const expandButtons = document.querySelectorAll('.expand-button');
    expandButtons.forEach((button, index) => {
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', `experience-${index}`);
        button.setAttribute('aria-label', `Toggle experience details for position ${index + 1}`);
    });
    
    // Add ARIA labels to contact links
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        const text = link.textContent;
        if (text.includes('@')) {
            link.setAttribute('aria-label', `Send email to ${text}`);
        } else if (text.includes('linkedin.com')) {
            link.setAttribute('aria-label', 'Visit LinkedIn profile');
        } else if (text.includes('github.com')) {
            link.setAttribute('aria-label', 'Visit GitHub profile');
        }
    });
    
    // Add ARIA labels to theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.setAttribute('aria-label', 'Toggle dark mode');
        themeToggle.setAttribute('role', 'button');
    }
    
    // Add ARIA labels to floating action button
    const floatingAction = document.querySelector('.floating-action a');
    if (floatingAction) {
        floatingAction.setAttribute('aria-label', 'Contact me via email');
    }
}

// Keyboard navigation enhancements
function setupKeyboardNavigation() {
    // Enhanced keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Escape key to close modals or expanded sections
        if (e.key === 'Escape') {
            const expandedSections = document.querySelectorAll('.experience-details.expanded');
            expandedSections.forEach(section => {
                const index = section.id.replace('experience-', '');
                window.toggleExperience(parseInt(index));
            });
        }
        
        // Tab key navigation improvements
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // Remove keyboard navigation class on mouse use
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Export for use in other modules
window.setupAccessibility = setupAccessibility;
window.setupKeyboardNavigation = setupKeyboardNavigation; 