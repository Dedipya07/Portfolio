
// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');
let vantaEffect = null;

// Initialize Vanta.js effect
function initVanta() {
    if (vantaEffect) vantaEffect.destroy();
    vantaEffect = VANTA.NET({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x6b46c1,
        backgroundColor: document.body.classList.contains('light-theme') ? 0xffffff : 0x000000,
        maxDistance: 19.00,
        spacing: 17.00
    });
}

// Initialize the effect
initVanta();

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
    initVanta(); // Reinitialize Vanta effect with new background color
});

// Side Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    menuToggle.classList.toggle('open');
});

// Close side menu when clicking outside
document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        sideMenu.classList.remove('open');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});



// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Observe project cards for animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    observer.observe(card);
});

// Observe all animated elements
const animatedElements = document.querySelectorAll('.skills-category, .timeline-card, .education-card, .volunteering-card');
animatedElements.forEach(element => {
    observer.observe(element);
});

// Initialize skill progress bars
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = `scaleX(${entry.target.parentElement.dataset.progress || 1})`;
        }
    });
}, observerOptions);

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Add hover effect for project tech tags
const techTags = document.querySelectorAll('.project-tech span');
techTags.forEach(tag => {
    tag.addEventListener('mouseover', () => {
        tag.style.transform = 'translateY(-2px)';
    });
    tag.addEventListener('mouseout', () => {
        tag.style.transform = 'translateY(0)';
    });
});

// Add hover effects for all tags
const allTags = document.querySelectorAll('.education-details span, .volunteering-tags span');
allTags.forEach(tag => {
    tag.addEventListener('mouseover', () => {
        tag.style.transform = 'translateY(-2px)';
    });
    tag.addEventListener('mouseout', () => {
        tag.style.transform = 'translateY(0)';
    });
});

// Add hover effect for buttons
const buttons = document.querySelectorAll('button, .download-resume');
buttons.forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        
        const ripple = document.createElement('span');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        e.target.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 1000);
    });
});

// Show/Hide floating home button based on scroll position
const floatingHome = document.querySelector('.floating-home');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        floatingHome.classList.add('visible');
    } else {
        floatingHome.classList.remove('visible');
    }
});

// Smooth scroll for floating home button
floatingHome.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
