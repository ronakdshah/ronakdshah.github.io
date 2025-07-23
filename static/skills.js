// Skills Module - Tab switching and skill-related functionality

// Skill tab functionality
function initSkillTabs() {
    const skillTabs = document.querySelectorAll('.skill-tab');
    const skillContents = document.querySelectorAll('.skill-content');

    console.log('Found skill tabs:', skillTabs.length);
    console.log('Found skill contents:', skillContents.length);
    
    // Log initial state
    skillContents.forEach(content => {
        console.log('Initial state -', content.id, 'classes:', content.className);
    });

    skillTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetId = this.getAttribute('data-tab');
            console.log('Clicked tab:', targetId);
            
            // Update tab buttons
            skillTabs.forEach(t => {
                t.classList.remove('active', 'bg-gradient-to-r', 'from-purple-600', 'to-blue-600', 'text-white', 'shadow-lg');
                t.classList.add('bg-gray-100', 'text-gray-700');
            });
            this.classList.add('active', 'bg-gradient-to-r', 'from-purple-600', 'to-blue-600', 'text-white', 'shadow-lg');
            this.classList.remove('bg-gray-100', 'text-gray-700');
            
            // Update content using inline styles
            skillContents.forEach(content => {
                console.log('Hiding content:', content.id);
                content.style.display = 'none';
                content.classList.remove('active');
            });
            
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                console.log('Showing content:', targetContent.id);
                targetContent.style.display = 'block';
                targetContent.classList.add('active');
                console.log('Showed content:', targetId);
                
                // Announce tab change for screen readers
                announceSkillTabChange(targetId);
            } else {
                console.error('Content not found:', targetId);
            }
        });
    });
}

// Live region announcements for skills
function announceSkillTabChange(category) {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
        liveRegion.textContent = `Switched to ${category} skills view`;
    }
}

// Export for use in other modules
window.initSkillTabs = initSkillTabs;
window.announceSkillTabChange = announceSkillTabChange; 