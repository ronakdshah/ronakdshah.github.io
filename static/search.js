// Search Module - Simple and reliable search functionality

class SearchFilterManager {
    constructor() {
        this.searchInput = document.getElementById('search-input');
        this.searchButton = document.getElementById('search-button');
        this.clearButton = document.getElementById('clear-filters');
        this.activeFiltersContainer = document.getElementById('active-filters');
        
        // Cache all experience divs
        this.experienceDivs = [];
        this.searchTerm = '';
        
        this.init();
    }
    
    init() {
        this.cacheExperienceDivs();
        this.setupEventListeners();
        this.setupKeyboardShortcuts();
    }
    
    cacheExperienceDivs() {
        // Cache all experience cards
        this.experienceDivs = Array.from(document.querySelectorAll('.experience-card'));
        
        // Add search data to each div
        this.experienceDivs.forEach((div, index) => {
            const title = div.querySelector('h3')?.textContent?.trim() || '';
            const company = div.querySelector('.text-purple-600')?.textContent?.trim() || '';
            const description = div.querySelector('.text-gray-700')?.textContent?.trim() || '';
            
            // Get expandable details content
            const detailsDiv = div.querySelector('.experience-details');
            let detailsText = '';
            if (detailsDiv) {
                const responsibilities = Array.from(detailsDiv.querySelectorAll('.bg-gray-50')).map(item => {
                    const respTitle = item.querySelector('h4')?.textContent?.trim() || '';
                    const respDesc = item.querySelector('p')?.textContent?.trim() || '';
                    return `${respTitle} ${respDesc}`;
                }).join(' ');
                
                // Get skills/tags
                const skillsDiv = detailsDiv.querySelector('.bg-gray-50:last-child');
                if (skillsDiv) {
                    const skills = Array.from(skillsDiv.querySelectorAll('span')).map(skill => skill.textContent?.trim()).join(' ');
                    detailsText = `${responsibilities} ${skills}`;
                } else {
                    detailsText = responsibilities;
                }
            }
            
            const searchText = `${title} ${company} ${description} ${detailsText}`.toLowerCase();
            div.setAttribute('data-search', searchText);
        });
    }
    
    setupEventListeners() {
        // Search button click
        if (this.searchButton) {
            this.searchButton.addEventListener('click', () => {
                this.performSearch();
            });
        }
        
        // Clear button click
        if (this.clearButton) {
            this.clearButton.addEventListener('click', () => {
                this.clearSearch();
            });
        }
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K to focus search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                if (this.searchInput) {
                    this.searchInput.focus();
                }
            }
            
            // Enter key to perform search
            if (e.key === 'Enter' && document.activeElement === this.searchInput) {
                e.preventDefault();
                this.performSearch();
            }
            
            // Escape to clear search
            if (e.key === 'Escape' && document.activeElement === this.searchInput) {
                if (this.searchInput) {
                    this.searchInput.value = '';
                }
                this.clearSearch();
            }
        });
    }
    
    performSearch() {
        if (this.searchInput) {
            this.searchTerm = this.searchInput.value.toLowerCase().trim();
        }
        
        let matchCount = 0;
        
        // Check each cached experience div
        this.experienceDivs.forEach((div, index) => {
            const searchText = div.getAttribute('data-search') || '';
            const hasMatch = !this.searchTerm || searchText.includes(this.searchTerm);
            
            if (hasMatch) {
                // Show this div
                div.style.display = '';
                div.classList.remove('filtered-out');
                div.classList.add('filtered-in');
                matchCount++;
            } else {
                // Hide this div
                div.style.display = 'none';
                div.classList.remove('filtered-in');
                div.classList.add('filtered-out');
            }
        });
        
        // Update UI
        this.updateActiveFilters();
        this.updateResultsCount(matchCount, this.experienceDivs.length);
    }
    
    clearSearch() {
        this.searchTerm = '';
        
        if (this.searchInput) {
            this.searchInput.value = '';
        }
        
        // Show all experience divs
        this.experienceDivs.forEach((div, index) => {
            div.style.display = '';
            div.classList.remove('filtered-out', 'filtered-in');
        });
        
        // Update UI
        this.updateActiveFilters();
        this.updateResultsCount(this.experienceDivs.length, this.experienceDivs.length);
        
        // Focus search input
        if (this.searchInput) {
            this.searchInput.focus();
        }
    }
    
    updateActiveFilters() {
        if (this.activeFiltersContainer) {
            if (this.searchTerm) {
                this.activeFiltersContainer.innerHTML = 
                    `<span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">Search: "${this.searchTerm}"</span>`;
                this.activeFiltersContainer.classList.remove('hidden');
            } else {
                this.activeFiltersContainer.classList.add('hidden');
            }
        }
    }
    
    updateResultsCount(visibleCount, totalCount) {
        if (this.searchInput) {
            if (this.searchTerm) {
                this.searchInput.placeholder = `Found ${visibleCount} of ${totalCount} experiences...`;
            } else {
                this.searchInput.placeholder = 'Search experience, skills, or projects...';
            }
        }
    }
}

// Initialize search functionality
function initSearch() {
    // Only initialize if search elements exist
    if (document.getElementById('search-input')) {
        new SearchFilterManager();
    }
}

// Export for use in other modules
window.SearchFilterManager = SearchFilterManager;
window.initSearch = initSearch; 