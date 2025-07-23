# Portfolio Website - Static Site Generator

A modern, responsive portfolio website built with Python, Jinja2 templates, and Tailwind CSS. Features dark/light mode, advanced search functionality, modular JavaScript architecture, and accessibility compliance.

## 🏗️ Project Architecture

### Core Structure
```
portfolio-website/
├── config.toml              # Data source - all content is managed here
├── src/
│   └── render_html.py       # Python script that generates static HTML
├── templates/
│   └── html/                # Modular Jinja2 templates
│       ├── base.html.jinja  # Base template with common layout
│       ├── resume.html.jinja # Main template that includes all sections
│       ├── summary.html.jinja # Hero section
│       ├── experience.html.jinja # Work experience timeline
│       ├── skills.html.jinja # Skills and technologies
│       ├── projects.html.jinja # Featured projects
│       ├── education.html.jinja # Education and credentials
│       ├── contact.html.jinja # Contact information
│       ├── search.html.jinja # Search and filter component
│       └── accessibility.html.jinja # Accessibility enhancements
├── static/                  # Modular JavaScript architecture
│   ├── utils.js            # Performance optimizations and utilities
│   ├── theme.js            # Dark/light mode functionality
│   ├── accessibility.js    # ARIA setup and keyboard navigation
│   ├── skills.js           # Skills tab switching
│   ├── experience.js       # Expandable experience sections
│   ├── animations.js       # All animation functionality
│   ├── navigation.js       # Smooth scrolling
│   ├── search.js           # Advanced search and filtering
│   └── main.js             # Application initialization
└── index.html               # Generated static output
```

### Design Philosophy

#### 1. **Data-Driven Architecture**
- All content is stored in `config.toml`
- Templates are purely presentational
- Easy to update content without touching code
- Maintains separation of concerns

#### 2. **Modular Template System**
- Each section is a separate template file
- Easy to add/remove/reorder sections
- Reusable components across sections
- Maintainable and scalable

#### 3. **Modular JavaScript Architecture**
- Separated concerns into logical modules
- Each module handles specific functionality
- Easy to maintain and extend
- Performance optimized with lazy loading

#### 4. **Progressive Enhancement**
- Works without JavaScript (basic functionality)
- Enhanced with JavaScript for better UX
- Accessibility-first approach
- Performance optimized

## 🚀 Getting Started

### Prerequisites
- Python 3.7+
- pip (Python package manager)

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd portfolio-website

# Install dependencies
pip install jinja2 tomli
```

### Development
```bash
# Generate the website
python src/render_html.py

# Open in browser
open index.html
```

### Deployment
The generated `index.html` is ready for deployment on:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## 📝 Content Management

### Adding/Editing Content
All content is managed in `config.toml`. Here's the structure:

```toml
[personal]
name = "Your Name"
location = "City, State"
email = "your.email@example.com"
phone = "(123) 456-7890"
linkedin = "https://linkedin.com/in/yourprofile"
webpage = "https://yourwebsite.com"

[summary]
text = "Your professional summary"

[[experiences]]
company = "Company Name"
role = "Job Title"
duration = "Start Date -- End Date"
responsibilities = [
    { title = "Responsibility Title", description = "Description" }
]
```

### Adding New Sections
1. Create a new template file in `templates/html/`
2. Add the section data to `config.toml`
3. Include the template in `resume.html.jinja`
4. Update the navigation if needed

## ✨ Features

### 1. **Advanced Search System**
- **Real-time filtering** of experience cards
- **Comprehensive search** including expandable details
- **Keyboard shortcuts**: Ctrl+K (focus), Enter (search), Escape (clear)
- **Visual feedback** with results counter and active filters
- **Cached search** for optimal performance

### 2. **Dark/Light Mode Toggle**
- **Persistent theme** preference (localStorage)
- **Smooth transitions** between themes
- **Accessibility compliant** with proper ARIA labels
- **System preference** detection

### 3. **Interactive Skills Section**
- **Tabbed interface** for Core, Technical, and Domain skills
- **Progress bars** with animated loading
- **Detailed expertise** with technologies and achievements
- **Responsive design** for all screen sizes

### 4. **Expandable Experience Timeline**
- **Click to expand** detailed responsibilities
- **Smooth animations** for content reveal
- **Technology tags** for each experience
- **Professional timeline** design

### 5. **Accessibility Features**
- **ARIA labels** and roles throughout
- **Keyboard navigation** support
- **Screen reader** compatibility
- **High contrast** mode support
- **Reduced motion** preferences respected

### 6. **Performance Optimizations**
- **Modular JavaScript** architecture
- **Lazy loading** of animations
- **Intersection Observer** for scroll-triggered effects
- **Optimized animations** for low-power devices

## 🎨 Design System

### Color Scheme
- **Primary**: Purple (#8b5cf6) to Blue (#3b82f6) gradient
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Various colors for different sections (green, orange, etc.)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately on all devices

### Components

#### 1. **Cards**
- Rounded corners (`rounded-2xl`)
- Subtle shadows (`shadow-lg`)
- Hover effects with scale and shadow changes
- Consistent padding and spacing

#### 2. **Buttons**
- Gradient backgrounds
- Rounded corners (`rounded-full`)
- Hover animations (scale, shadow)
- Consistent sizing and spacing

#### 3. **Timeline**
- Vertical line with gradient
- Dots for timeline points
- Alternating left/right layout on desktop
- Responsive single-column on mobile

### Dark Mode
- CSS custom properties for theme switching
- Smooth transitions between themes
- Persistent theme preference (localStorage)
- High contrast support for accessibility

## 🔧 Customization Guide

### Changing Colors
1. **Primary Colors**: Update CSS custom properties in `base.html.jinja`
```css
:root {
    --gradient-primary: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

2. **Section Colors**: Modify gradient classes in individual templates
```html
<div class="bg-gradient-to-br from-purple-50 to-blue-50">
```

### Adding Animations
1. **CSS Animations**: Add to `base.html.jinja` styles
2. **JavaScript Animations**: Add to appropriate module in `static/`
3. **Intersection Observer**: For scroll-triggered animations

### Modifying Layout
1. **Grid Systems**: Use Tailwind's grid classes
2. **Spacing**: Use Tailwind's spacing scale
3. **Responsive**: Use Tailwind's responsive prefixes

## 🐛 Debugging Tips

### Common Issues

#### 1. **Template Rendering Errors**
```bash
# Check for syntax errors in templates
python -m py_compile templates/html/*.jinja

# Validate TOML syntax
python -c "import tomli; tomli.load(open('config.toml', 'rb'))"
```

#### 2. **Search Not Working**
- Check browser console for JavaScript errors
- Verify search input has correct ID (`search-input`)
- Ensure experience cards have `.experience-card` class
- Check that search.js is loaded after DOM elements

#### 3. **Skills Tabs Not Switching**
- Verify skills.js is loaded
- Check that tab buttons have correct data attributes
- Ensure skill content divs have proper IDs

#### 4. **Theme Toggle Not Working**
- Check localStorage permissions
- Verify theme.js is loaded
- Check for CSS custom property conflicts

### Performance Monitoring
```javascript
// Check if modules are loading
console.log('Theme Manager:', window.ThemeManager);
console.log('Search Manager:', window.SearchFilterManager);

// Monitor search performance
console.time('search');
// ... search code ...
console.timeEnd('search');
```

## 📋 Update Workflow

### 1. **Content Updates**
```bash
# Edit config.toml
nano config.toml

# Regenerate site
python src/render_html.py

# Test locally
open index.html
```

### 2. **Template Changes**
```bash
# Edit template files
nano templates/html/experience.html.jinja

# Regenerate and test
python src/render_html.py
```

### 3. **JavaScript Updates**
```bash
# Edit module files
nano static/search.js

# Regenerate and test
python src/render_html.py
```

### 4. **Styling Changes**
```bash
# Edit base template styles
nano templates/html/base.html.jinja

# Regenerate and test
python src/render_html.py
```

## 🚀 Advanced Features

### 1. **Search System**
- **Cached experience divs** for optimal performance
- **Comprehensive search** including expandable details
- **Real-time filtering** with visual feedback
- **Keyboard shortcuts** for power users

### 2. **Modular JavaScript**
- **Separated concerns** into logical modules
- **Easy maintenance** and debugging
- **Performance optimized** with lazy loading
- **Scalable architecture** for future features

### 3. **Accessibility**
- **WCAG 2.1 AA** compliance
- **Screen reader** support
- **Keyboard navigation** throughout
- **High contrast** mode support

### 4. **Performance**
- **Static generation** for fast loading
- **Optimized animations** for all devices
- **Reduced motion** support
- **Low power mode** detection

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Code Style
- **Python**: Follow PEP 8
- **JavaScript**: Use ES6+ features
- **HTML**: Semantic markup
- **CSS**: Tailwind utility classes

### Testing Checklist
- [ ] Site generates without errors
- [ ] All sections display correctly
- [ ] Search functionality works
- [ ] Theme toggle functions
- [ ] Skills tabs switch properly
- [ ] Experience sections expand
- [ ] Responsive design works
- [ ] Accessibility features function
- [ ] Performance is acceptable

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For issues and questions:
1. Check the debugging section above
2. Review browser console for errors
3. Test with different browsers
4. Create an issue with detailed information

---

**Built with ❤️ using Python, Jinja2, and Tailwind CSS**

