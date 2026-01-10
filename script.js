// ============================================
// WAIT FOR DOM TO LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// ============================================
// INITIALIZE ALL WEBSITE FEATURES
// ============================================
function initializeWebsite() {
    renderImpactProjects();
    renderTestimonials();
    renderEvents();
    renderGallery();
    renderGivingStats();
    initializeSmoothScroll();
    initializeNavbarScroll();
    initializeMobileMenu();
    initializeContactForm();
    initializeAOS();
}

// ============================================
// RENDER IMPACT PROJECTS
// ============================================
function renderImpactProjects() {
    const grid = document.getElementById('impact-grid');
    if (!grid) return;

    grid.innerHTML = impactProjects.map((project, index) => `
        <div class="impact-card reveal" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="impact-image" style="background-image: url('${project.image}')">
                <div class="impact-overlay">
                    <span class="impact-tag">${project.tag}</span>
                </div>
            </div>
            <div class="impact-content">
                <h3 class="impact-title">${project.title}</h3>
                <p class="impact-location">
                    <i class="fas fa-map-marker-alt"></i> ${project.location}
                </p>
                <p class="impact-description">${project.description}</p>
                <div class="impact-stats">
                    ${project.stats.map(stat => `
                        <div class="stat">
                            <div class="stat-number">${stat.number}</div>
                            <div class="stat-label">${stat.label}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================
// RENDER TESTIMONIALS
// ============================================
function renderTestimonials() {
    const grid = document.getElementById('testimonial-grid');
    if (!grid) return;

    grid.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial-card reveal" data-aos="zoom-in" data-aos-delay="${index * 100}">
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <div class="author-avatar">${testimonial.initial}</div>
                <div class="author-info">
                    <h4>${testimonial.author}</h4>
                    <p>${testimonial.location}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================
// RENDER EVENTS
// ============================================
function renderEvents() {
    const grid = document.getElementById('events-grid');
    if (!grid) return;

    grid.innerHTML = upcomingEvents.map((event, index) => `
        <div class="event-card reveal" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="event-header" style="background: ${event.gradient}">
                <div class="event-date">${event.date}</div>
                <div class="event-time">${event.time}</div>
            </div>
            <div class="event-content">
                <span class="event-tag">${event.tag}</span>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <a href="#" class="event-cta" onclick="handleEventClick(event, '${event.title}')">
                    Learn More <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');
}

// ============================================
// RENDER GALLERY
// ============================================
function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    // Group images by category
    const categories = [...new Set(galleryImages.map(img => img.category))];
    
    let galleryHTML = '';
    
    categories.forEach(category => {
        const categoryImages = galleryImages.filter(img => img.category === category);
        
        galleryHTML += `
            <div class="gallery-category">
                <h3 class="gallery-category-title">${category}</h3>
                <div class="gallery-items-grid">
                    ${categoryImages.map((image, index) => `
                        <div class="gallery-item reveal" data-aos="flip-left" data-aos-delay="${index * 50}">
                            <img src="${image.url}" alt="${image.caption}" loading="lazy">
                            <div class="gallery-caption">
                                <p>${image.caption}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    grid.innerHTML = galleryHTML;
}

// ============================================
// RENDER GIVING STATS
// ============================================
function renderGivingStats() {
    const statsContainer = document.getElementById('giving-stats');
    if (!statsContainer) return;

    statsContainer.innerHTML = givingStats.map(stat => `
        <div class="giving-stat">
            <div class="giving-stat-number">${stat.number}</div>
            <div class="giving-stat-label">${stat.label}</div>
        </div>
    `).join('');
}

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================
function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal anchor links on the current page
            if (href.startsWith('#')) {
                const targetId = href;
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    e.preventDefault();
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const menuToggle = document.querySelector('.menu-toggle');
                    const navLinksContainer = document.querySelector('.nav-links');
                    if (navLinksContainer.classList.contains('active')) {
                        navLinksContainer.classList.remove('active');
                    }
                }
            }
            // For other links (like contact.html or external sites), let them work normally
        });
    });
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
function initializeScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    };

    // Initial check
    revealOnScroll();
    
    // Check on scroll with throttling for better performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = window.requestAnimationFrame(() => {
            revealOnScroll();
        });
    });
}

// ============================================
// NAVBAR SCROLL BEHAVIOR
// ============================================
function initializeNavbarScroll() {
    const nav = document.getElementById('main-nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.padding = '0.5rem 2rem';
            nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.2)';
        } else {
            nav.style.padding = '1rem 2rem';
            nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        }
        
        lastScroll = currentScroll;
    });
}

// ============================================
// HANDLE EVENT CLICK
// ============================================
function handleEventClick(e, eventTitle) {
    e.preventDefault();
    alert(`Thank you for your interest in ${eventTitle}! Please contact us at the church for more details and registration.`);
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon if needed
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

// ============================================
// CONTACT FORM HANDLING
// ============================================
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('contact-success');
    
    if (contactForm && successMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.btn-submit');
            const originalText = submitBtn.innerText;
            
            // Show loading state
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission delay
            // In a production environment, you would use fetch() to send data to a backend or service like Formspree
            setTimeout(() => {
                contactForm.style.display = 'none';
                successMessage.style.display = 'block';
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                console.log('Form submitted successfully (simulated)');
            }, 1500);
        });
    }
}

// ============================================
// INITIALIZE AOS
// ============================================
function initializeAOS() {
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 120,
    });
    
    // Refresh AOS after a short delay to ensure dynamic content is accounted for
    setTimeout(() => {
        AOS.refresh();
    }, 500);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Add active class to navigation based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Update active nav link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c🙏 Dimension Abundant Life Ministries', 'font-size: 20px; font-weight: bold; color: #f39c12;');
console.log('%cHelping Ordinary People Live Extraordinary Lives', 'font-size: 14px; color: #1a1a2e;');
console.log('%cWebsite designed with love and purpose ❤️', 'font-size: 12px; color: #666;');
