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
    initializeScrollReveal();
    initializeNavbarScroll();
}

// ============================================
// RENDER IMPACT PROJECTS
// ============================================
function renderImpactProjects() {
    const grid = document.getElementById('impact-grid');
    if (!grid) return;

    grid.innerHTML = impactProjects.map((project, index) => `
        <div class="impact-card reveal" style="animation-delay: ${index * 0.1}s">
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
        <div class="testimonial-card reveal" style="animation-delay: ${index * 0.1}s">
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
        <div class="event-card reveal" style="animation-delay: ${index * 0.1}s">
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

    grid.innerHTML = galleryImages.map((image, index) => `
        <div class="gallery-item reveal" style="animation-delay: ${index * 0.05}s">
            <img src="${image.url}" alt="${image.caption}" loading="lazy">
            <div class="gallery-caption">
                <p>${image.caption}</p>
            </div>
        </div>
    `).join('');
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
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
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
