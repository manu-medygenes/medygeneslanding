// Form Popup Functionality
function initFormPopup() {
    const formPopup = document.getElementById('formPopup');
    const closeFormPopup = document.getElementById('closeFormPopup');
    const contactForm = document.getElementById('contactForm');
    
    // Function to open form popup
    function openFormPopup() {
        if (formPopup) {
            formPopup.classList.add('active');
        }
    }
    
    // Function to close form popup
    function closeFormPopupHandler() {
        if (formPopup) {
            formPopup.classList.remove('active');
        }
    }
    
    // Close form popup when X is clicked
    if (closeFormPopup) {
        closeFormPopup.addEventListener('click', closeFormPopupHandler);
    }
    
    // Close form popup when clicking outside
    if (formPopup) {
        formPopup.addEventListener('click', (e) => {
            if (e.target === formPopup) {
                closeFormPopupHandler();
            }
        });
    }
    
    // Handle form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                fullName: document.getElementById('fullName').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                age: document.getElementById('age').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the data to your server
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('תודה רבה! פרטיך התקבלו בהצלחה. ניצור איתך קשר בהקדם.');
            
            // Close the popup
            closeFormPopupHandler();
            
            // Reset form
            contactForm.reset();
            
            // You can add your form submission logic here:
            // Example: send to Google Sheets, email service, or your backend
            // fetch('/api/submit-form', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });
        });
    }
    
    // Attach click handlers to all CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button, .popup-cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            openFormPopup();
        });
    });
}

// Welcome Popup Modal Functionality
function initPopup() {
    const popupModal = document.getElementById('popupModal');
    const closePopup = document.getElementById('closePopup');
    const popupCTA = document.querySelector('.popup-cta-button');
    
    // Show popup on page load (after a short delay)
    setTimeout(() => {
        if (popupModal) {
            popupModal.classList.add('active');
        }
    }, 1000); // Show after 1 second
    
    // Close popup when X is clicked
    if (closePopup) {
        closePopup.addEventListener('click', () => {
            popupModal.classList.remove('active');
        });
    }
    
    // Close popup when clicking outside
    if (popupModal) {
        popupModal.addEventListener('click', (e) => {
            if (e.target === popupModal) {
                popupModal.classList.remove('active');
            }
        });
    }
    
    // Close welcome popup when its CTA button is clicked
    if (popupCTA) {
        popupCTA.addEventListener('click', () => {
            popupModal.classList.remove('active');
        });
    }
}

// Countdown Timer Functionality
function initCountdown() {
    // Set countdown end time (24 hours from now)
    const countdownEnd = new Date().getTime() + (24 * 60 * 60 * 1000);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownEnd - now;
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Format with leading zeros
        const formatNumber = (num) => num.toString().padStart(2, '0');
        
        // Update banner timer
        const bannerTimer = document.getElementById('banner-timer');
        if (bannerTimer) {
            bannerTimer.textContent = `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
        }
        
        // Update countdown sections
        updateCountdownSection('days', days);
        updateCountdownSection('hours', hours);
        updateCountdownSection('minutes', minutes);
        updateCountdownSection('seconds', seconds);
        
        updateCountdownSection('days-2', days);
        updateCountdownSection('hours-2', hours);
        updateCountdownSection('minutes-2', minutes);
        updateCountdownSection('seconds-2', seconds);
        
        // Update popup countdown
        updateCountdownSection('popup-days', days);
        updateCountdownSection('popup-hours', hours);
        updateCountdownSection('popup-minutes', minutes);
        updateCountdownSection('popup-seconds', seconds);
        
        // If countdown is finished
        if (distance < 0) {
            clearInterval(countdownInterval);
            if (bannerTimer) {
                bannerTimer.textContent = "00:00:00";
            }
        }
    }
    
    function updateCountdownSection(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value.toString().padStart(2, '0');
        }
    }
    
    // Update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Initial update
    updateCountdown();
}

// Smooth scroll functionality (if needed for other elements)
function initSmoothScroll() {
    // CTA buttons now handled by initFormPopup()
    // Add any other smooth scroll functionality here if needed
}

// Add animation on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.testimonial-card, .fb-post, .faq-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add sticky banner behavior
function initStickyBanner() {
    const topBanner = document.querySelector('.top-banner');
    
    if (topBanner) {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Add shadow when scrolled
            if (currentScroll > 10) {
                topBanner.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            } else {
                topBanner.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            }
            
            lastScroll = currentScroll;
        });
    }
}

// Track CTA clicks (for analytics)
function initAnalytics() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Send to analytics
            console.log(`CTA button ${index + 1} clicked`);
            
            // Example: Google Analytics event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                    'event_category': 'engagement',
                    'event_label': `CTA Button ${index + 1}`
                });
            }
            
            // Example: Facebook Pixel
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Lead');
            }
        });
    });
}

// Handle image loading errors
function initImageErrorHandling() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create a placeholder
            this.style.backgroundColor = '#f0f0f0';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.fontSize = '14px';
            this.style.color = '#999';
            this.alt = 'Image placeholder';
        });
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initFormPopup();
    initPopup();
    initCountdown();
    initSmoothScroll();
    initScrollAnimations();
    initStickyBanner();
    initAnalytics();
    initImageErrorHandling();
});

// Optional: Add exit intent popup
function initExitIntent() {
    let exitIntentShown = false;
    
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY <= 0 && !exitIntentShown) {
            exitIntentShown = true;
            
            // Show exit intent modal/popup
            console.log('Exit intent detected - show special offer');
            
            // Example: you can create a modal here
            // showExitIntentModal();
        }
    });
}

// Uncomment to enable exit intent
// initExitIntent();

