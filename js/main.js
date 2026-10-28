// Apex Auto - Premium Car Dealership Website
// GSAP Animations and Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1500);
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.custom-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Hero Section Animations
    const heroTl = gsap.timeline({ delay: 1.8 });
    
    heroTl.from('.hero-title-line', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    })
    .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.4')
    .from('.hero-btn', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    }, '-=0.3')
    .from('.hero-scroll', {
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.2');
    
    // Hero background parallax
    gsap.to('.hero-image', {
        scale: 1,
        duration: 2,
        ease: 'power2.out'
    });
    
    gsap.to('.hero-image', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
    
    // Stats Counter Animation
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        gsap.to(stat, {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
                trigger: stat,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Section Headers Animation
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header.children, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Car Cards Animation
    gsap.utils.toArray('.car-card').forEach((card, index) => {
        gsap.from(card, {
            y: 80,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // About Section Animation
    gsap.from('.about-image-wrapper', {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    gsap.from('.about-content > *', {
        x: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Service Cards Animation
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.from(card, {
            y: 60,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Testimonial Cards Animation
    gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
        gsap.from(card, {
            scale: 0.9,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Contact Section Animation
    gsap.from('.contact-form-wrapper', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    gsap.from('.contact-info-item', {
        x: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Smooth scroll for navigation links (only for same-page anchors)
    document.querySelectorAll('.navbar-nav .nav-link, .nav-cta').forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = href;
                if (targetId === '#') return;
                
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const navbarToggler = document.querySelector('.navbar-toggler');
                        navbarToggler.click();
                    }
                }
            });
        }
        // For page links (like .html), let normal navigation occur
    });
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation and submission feedback
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
                
                // Reset form
                this.reset();
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))';
                }, 3000);
            }, 1500);
        });
    }
    
    // Newsletter form
    const newsletterBtn = document.querySelector('.newsletter-btn');
    const newsletterInput = document.querySelector('.newsletter-input');
    
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', function() {
            if (newsletterInput.value && newsletterInput.value.includes('@')) {
                this.innerHTML = '<i class="fas fa-check"></i>';
                this.style.background = '#28a745';
                newsletterInput.value = '';
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-arrow-right"></i>';
                    this.style.background = 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))';
                }, 2000);
            }
        });
    }
    
    // Add hover effect to car cards with GSAP
    document.querySelectorAll('.car-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Parallax effect for about image
    gsap.to('.about-image', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
});
