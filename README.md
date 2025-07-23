# Portfolio Website - Static Site Generator

A modern, responsive portfolio website built with Python, Jinja2 templates, and Tailwind CSS. Features dark/light mode, advanced search functionality, and accessibility compliance.

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

#### 3. **Progressive Enhancement**
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

[[experiences.responsibilities]]
title = "Responsibility Title"
description = "Detailed description of the responsibility"

[project]
name = "Project Name"
details = [
    "Project detail 1",
    "Project detail 2"
]

[project.research_paper]
title = "Research Paper Title"
link = "https://arxiv.org/abs/..."

[awards]
name = "Awards Section Title"
details = [
    "Award 1",
    "Award 2"
]

[education]
[[education.degrees]]
degree = "Degree Name"
school = "University Name"
gpa = "3.95/4"
start_date = "Aug 2019"
end_date = "May 2021"

[skillset]
Languages = ["Python", "JavaScript", "SQL"]
"Frameworks / Backend" = ["Flask", "FastAPI", "Django"]
Infrastructure = ["Docker", "AWS", "Kubernetes"]
"ML & Data" = ["Machine Learning", "Data Science", "Analytics"]

# Enhanced Technical Expertise Section
[technical_expertise]
[[technical_expertise.categories]]
name = "Backend Development"
proficiency = 95
description = "Expert-level backend development with focus on scalable APIs and microservices"
technologies = ["FastAPI", "Flask", "Django", "Pydantic", "SQLAlchemy"]
achievements = [
    "Built production APIs handling 100+ portfolios/day",
    "Scaled FastAPI backend on Kubernetes",
    "Implemented async processing for real-time data"
]

[[technical_expertise.categories]]
name = "Data Science & ML"
proficiency = 90
description = "Advanced machine learning and data science with focus on fintech applications"
technologies = ["CatBoost", "GBM", "Graph Analytics", "Scikit-learn", "Pandas"]
achievements = [
    "Improved risk model accuracy by 20%",
    "Reduced fraud by 10% with ML models",
    "Applied graph analytics for fraud detection"
]

# Enhanced Domain Knowledge Section
[domain_knowledge]
[[domain_knowledge.areas]]
name = "Fintech & Quantitative Finance"
description = "Deep expertise in financial technology and quantitative modeling"
expertise_level = "Expert"
key_areas = [
    "Portfolio Optimization",
    "Risk Modeling",
    "Index Management",
    "Financial APIs",
    "Real-time Trading Systems"
]
achievements = [
    "Generated $600k ARR through portfolio automation",
    "Managed 6,800+ indices with automated reporting",
    "Built real-time risk exposure estimation systems"
]

[[domain_knowledge.areas]]
name = "Machine Learning & AI"
description = "Advanced machine learning with focus on practical business applications"
expertise_level = "Advanced"
key_areas = [
    "Predictive Modeling",
    "Fraud Detection",
    "Graph Analytics",
    "Automated Decision Systems",
    "Model Productionization"
]
achievements = [
    "Deployed ML models in production environments",
    "Applied graph algorithms for fraud detection",
    "Built automated risk assessment systems"
]
```

### Adding New Sections
1. Create a new template file in `templates/html/`
2. Add the section data to `config.toml`
3. Include the template in `resume.html.jinja`
4. Update the navigation if needed

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
2. **JavaScript Animations**: Add to `resume.html.jinja` scripts
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

#### 2. **Missing Data**
- Check `config.toml` for required fields
- Ensure template variables match TOML structure
- Use `{{ variable | default('fallback') }}` for optional fields

#### 3. **Styling Issues**
- Check browser console for CSS errors
- Verify Tailwind classes are correct
- Test in both light and dark modes
- Check responsive behavior

#### 4. **JavaScript Errors**
- Open browser developer tools
- Check console for errors
- Verify DOM elements exist before JavaScript runs
- Test with JavaScript disabled

### Debugging Tools

#### 1. **Browser Developer Tools**
```javascript
// Check if elements have correct data attributes
document.querySelectorAll('[data-search]').forEach(el => {
    console.log(el.getAttribute('data-search'));
});

// Test theme switching
localStorage.setItem('theme', 'dark');
location.reload();
```

#### 2. **Template Debugging**
```html
<!-- Add this to templates for debugging -->
<pre>{{ variable | tojson(indent=2) }}</pre>
```

#### 3. **Performance Monitoring**
```javascript
// Check for performance issues
console.time('search');
// ... search code ...
console.timeEnd('search');
```

### Testing Checklist

#### ✅ **Functionality**
- [ ] All navigation links work
- [ ] Search functionality works
- [ ] Dark/light mode toggle works
- [ ] Contact links are correct
- [ ] Responsive design on all screen sizes

#### ✅ **Accessibility**
- [ ] Screen reader compatibility
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Color contrast ratios
- [ ] Alt text for images

#### ✅ **Performance**
- [ ] Page loads quickly
- [ ] No console errors
- [ ] Smooth animations
- [ ] Efficient search filtering

## 🔄 Update Workflow

### 1. **Content Updates**
```bash
# Edit config.toml
vim config.toml

# Regenerate site
python src/render_html.py

# Test locally
open index.html
```

### 2. **Template Updates**
```bash
# Edit template files
vim templates/html/section.html.jinja

# Regenerate and test
python src/render_html.py
open index.html
```

### 3. **Styling Updates**
```bash
# Edit base.html.jinja styles
vim templates/html/base.html.jinja

# Test in browser
python src/render_html.py
open index.html
```

### 4. **Adding New Features**
1. Create new template file
2. Add data to `config.toml`
3. Include in main template
4. Add JavaScript if needed
5. Test thoroughly
6. Update documentation

## 📚 Advanced Features

### 1. **Search System**
- Real-time filtering across all content
- Keyboard shortcuts (Ctrl/Cmd + K)
- Results counter
- Clear filters functionality

### 2. **Accessibility Features**
- Skip links
- ARIA labels
- Focus management
- Screen reader support
- High contrast mode

### 3. **Performance Optimizations**
- Reduced motion support
- Low power mode detection
- Throttled scroll events
- Lazy loading with Intersection Observer

### 4. **Theme System**
- CSS custom properties
- Persistent preferences
- Smooth transitions
- System preference detection

## 🚨 Troubleshooting

### Build Issues
```bash
# Check Python version
python --version

# Verify dependencies
pip list | grep -E "(jinja2|tomli)"

# Test template rendering
python -c "from jinja2 import Template; print(Template('Hello {{ name }}').render(name='World'))"
```

### Browser Issues
- Clear browser cache
- Test in incognito mode
- Check for browser extensions interfering
- Test in different browsers

### Deployment Issues
- Ensure `index.html` is in the root directory
- Check file permissions
- Verify all assets are included
- Test locally before deploying

## 🤝 Contributing

### Code Style
- Use consistent indentation (4 spaces)
- Follow Jinja2 template conventions
- Use semantic HTML
- Maintain accessibility standards

### Testing
- Test on multiple browsers
- Test on mobile devices
- Test with screen readers
- Test with JavaScript disabled

### Documentation
- Update README.md for new features
- Add comments for complex logic
- Document any breaking changes
- Include examples for new functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For issues and questions:
1. Check this README first
2. Review the debugging section
3. Test with the provided debugging tools
4. Create an issue with detailed information

## 🐳 How to deploy on minikube

```bash
minikube start
eval $(minikube docker-env)
docker build -t portfolio-website .
kubectl apply -f deployment.yaml && kubectl apply -f service.yaml
minikube service portfolio-website --url
```

---

**Happy coding! 🎉**

