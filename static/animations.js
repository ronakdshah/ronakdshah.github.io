// Animations Module - All animation-related functionality

// Optimized number animation
function animateNumbers() {
    if (window.isReducedMotion) return;
    
    const numbers = document.querySelectorAll('.text-4xl.font-bold.text-purple-600, .text-3xl.font-bold');
    numbers.forEach(number => {
        const finalValue = number.textContent;
        const isPercentage = finalValue.includes('%');
        const isCurrency = finalValue.includes('$');
        const isPlus = finalValue.includes('+');
        const numericValue = parseInt(finalValue.replace(/\D/g, ''));
        
        if (numericValue > 0) {
            let currentValue = 0;
            const increment = numericValue / (window.isLowPowerMode ? 20 : 50);
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(timer);
                }
                let displayValue = Math.floor(currentValue);
                if (isCurrency) displayValue = '$' + displayValue + 'k';
                else if (isPlus) displayValue = displayValue + '+';
                else if (isPercentage) displayValue = displayValue + '%';
                number.textContent = displayValue;
            }, window.isLowPowerMode ? 50 : 30);
        }
    });
}

// Counter animations
function animateCounters() {
    if (window.isReducedMotion) return;
    
    const counters = document.querySelectorAll('.text-3xl.font-bold');
    counters.forEach(counter => {
        const finalValue = counter.textContent;
        const numericValue = parseInt(finalValue.replace(/\D/g, ''));
        
        if (numericValue > 0) {
            let currentValue = 0;
            const increment = numericValue / (window.isLowPowerMode ? 15 : 30);
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(currentValue) + (finalValue.includes('+') ? '+' : '');
            }, window.isLowPowerMode ? 100 : 50);
        }
    });
}

// Enhanced hover effects
function initHoverEffects() {
    document.querySelectorAll('.tool-icon, .group').forEach(element => {
        element.addEventListener('mouseenter', function() {
            if (window.isReducedMotion) return;
            
            if (this.classList.contains('tool-icon')) {
                this.style.transform = 'translateY(-8px) scale(1.05)';
            } else {
                this.style.transform = 'translateY(-5px)';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Typing effect
function typeWriter(element, text, speed = 100) {
    if (window.isReducedMotion) {
        element.textContent = text;
        return;
    }
    
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, window.isLowPowerMode ? speed * 2 : speed);
        }
    }
    type();
}

// Parallax effect
function initParallax() {
    if (!window.isReducedMotion) {
        let parallaxTimeout;
        window.addEventListener('scroll', () => {
            if (parallaxTimeout) return;
            
            parallaxTimeout = setTimeout(() => {
                const hero = document.querySelector('#about');
                if (hero) {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * -0.5;
                    hero.style.transform = `translateY(${rate}px)`;
                }
                parallaxTimeout = null;
            }, 16);
        });
    }
}

// Project card animations
function initProjectAnimations() {
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !window.isReducedMotion) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.bg-white.rounded-2xl').forEach(card => {
        if (!window.isReducedMotion) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
        }
        projectObserver.observe(card);
    });
}

// Enhanced intersection observer with performance optimizations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill progress bars with reduced motion support
                if (entry.target.querySelector('.skill-progress') && !window.isReducedMotion) {
                    const progressBars = entry.target.querySelectorAll('.skill-progress');
                    progressBars.forEach((bar, index) => {
                        const width = bar.style.width;
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, window.isLowPowerMode ? 0 : 200 + (index * 50));
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Export for use in other modules
window.animateNumbers = animateNumbers;
window.animateCounters = animateCounters;
window.initHoverEffects = initHoverEffects;
window.typeWriter = typeWriter;
window.initParallax = initParallax;
window.initProjectAnimations = initProjectAnimations;
window.initIntersectionObserver = initIntersectionObserver; 