document.addEventListener("DOMContentLoaded", function() {
	// Hero Carousel Functionality
function initHeroCarousel() {
    const carousel = document.querySelector('.hero-carousel');
    if (!carousel) return;

    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';
    
    // Create navigation dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });
    
    document.querySelector('.hero').appendChild(dotsContainer);
    const dots = document.querySelectorAll('.dot');
    
    // Set first dot as active
    dots[0].classList.add('active');
    
    // Update dots on scroll
    carousel.addEventListener('scroll', () => {
        const slideIndex = Math.round(carousel.scrollLeft / window.innerWidth);
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[slideIndex]) dots[slideIndex].classList.add('active');
    });

    
    // Click on dots to navigate
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            carousel.scrollTo({
                left: index * window.innerWidth,
                behavior: 'smooth'
            });
        });
    });
    
    // Auto-scroll (optional)
    let currentIndex = 0;
    let autoScrollInterval;
    
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            carousel.scrollTo({
                left: currentIndex * window.innerWidth,
                behavior: 'smooth'
            });
        }, 5000);
    }
    
    // Pause auto-scroll on interaction
    carousel.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
    carousel.addEventListener('touchstart', () => clearInterval(autoScrollInterval));
    carousel.addEventListener('mouseleave', startAutoScroll);
    
    startAutoScroll();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initHeroCarousel();
    
    // Keep your existing other JavaScript code here
    // (mobile navigation, search functionality, etc.)
});
    // Mobile Navigation Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function() {
            navLinks.classList.toggle("active");
        });
    }

    // Profile Icon Click - Only redirect if not on login page
    if (!window.location.pathname.includes('login.html')) {
        const profileIcon = document.querySelector(".profile-icon");
        if (profileIcon) {
            profileIcon.addEventListener("click", function() {
                window.location.href = "login.html";
            });
        }
    }

    // Auth Form Toggle - Only run on login page
    if (window.location.pathname.includes('login.html')) {
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');
        const showSignup = document.getElementById('show-signup');
        const showLogin = document.getElementById('show-login');

        // Initialize - hide signup form by default
        if (signupForm) signupForm.classList.add('hidden');
        
        // Set up toggle handlers
        if (showSignup) {
            showSignup.addEventListener('click', function(e) {
                e.preventDefault();
                if (loginForm) loginForm.classList.add('hidden');
                if (signupForm) signupForm.classList.remove('hidden');
            });
        }
        
        if (showLogin) {
            showLogin.addEventListener('click', function(e) {
                e.preventDefault();
                if (signupForm) signupForm.classList.add('hidden');
                if (loginForm) loginForm.classList.remove('hidden');
            });
        }

        // Form validation
        const signupFormElement = document.getElementById('signupForm');
        if (signupFormElement) {
            signupFormElement.addEventListener('submit', function(e) {
                const password = document.getElementById('signup-password')?.value;
                const confirmPassword = document.getElementById('confirm-password')?.value;
                
                if (password !== confirmPassword) {
                    e.preventDefault();
                    alert('Passwords do not match!');
                }
            });
        }
        
        // Social login buttons
        document.querySelectorAll('.social-icon').forEach(button => {
            button.addEventListener('click', function() {
                let provider = this.classList.contains('google') ? 'Google' :
                              this.classList.contains('apple') ? 'Apple' : 'Facebook';
                alert(`${provider} login would be implemented here`);
            });
        });
    }

    // Search Functionality (for other pages)
    function searchTours() {
// Tour buttons functionality
document.querySelectorAll('.tour-btn').forEach(button => {
    button.addEventListener('click', function() {
        const tourName = this.closest('.tour-card').querySelector('h3').textContent;
        alert(`You clicked on ${tourName}. This would redirect to tour details.`);
        // In production: window.location.href = 'tour-details.html';
    });
});
        const destination = document.getElementById("destination")?.value || "anywhere";
        const Tour = document.getElementById("Tour")?.value || "any tour";
        const activity = document.getElementById("activity")?.value || "any activity";
        const date = document.getElementById("date")?.value || "any date";
       

        alert(`Searching for: ${destination}, ${Tour} , ${activity}, ${date}`);
    }

    const searchButton = document.querySelector(".search-box button");
    if (searchButton) {
        searchButton.addEventListener("click", searchTours);
    }

    // Contact Form (for other pages)
    const contactForm = document.querySelector(".contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Your message has been sent!");
            contactForm.reset();
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".activity-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("bounce-in");
            }
        });
    }, {
        threshold: 0.5
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }



function addItinerary() {
    let destinations = document.getElementById("destinations").value;
    let date2 = document.getElementById("date2").value;
    let date1 = document.getElementById("date1").value;
    let activities = document.getElementById("activities").value;
    let onlyyou1 = document.getElementById("onlyyou1").value;
    let itineraryList = document.getElementById("itinerary-list");
    let listItem = document.createElement("li");
    listItem.textContent = `${destinations}--${date2}-to-${date1}--${activities}--${onlyyou1}`;
    
    itineraryList.appendChild(listItem);
}
/*function addItinerary() {
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    let activities = Array.from(document.getElementById("activities").selectedOptions)
                        .map(option => option.value)
                        .join(", ");

    if (!destination || !date || !activities) {
        alert("Please fill out all fields!");
        return;
    }

    let itineraryList = document.getElementById("itinerary-list");
    let listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${destination}</strong> - ${date} <br> 🌟 Activities: ${activities}`;
    
    itineraryList.appendChild(listItem);
}
/*let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial() {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.style.opacity = "0";
    });

    // Show the current one
    testimonials[index].style.opacity = "1";

    // Move to the next testimonial
    index = (index + 1) % testimonials.length;
}

// Run every 4 seconds
setInterval(showTestimonial, 4000);

// Show the first testimonial initially
showTestimonial();*/

const container = document.querySelector(".testimonial-container");
const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function slideTestimonials() {
    index++;
    if (index >= testimonials.length) {
        index = 0;
    }
    const offset = -index * 100;
    container.style.transform = `translateX(${offset}%)`;
}

// Slide every 4 seconds
setInterval(slideTestimonials, 4000);
// Like Button Functionality
function toggleLike(element) {
    element.classList.toggle("liked");
}

// Star Rating Functionality
function setRating(element, rating) {
    let stars = element.parentElement.querySelectorAll(".star");
    stars.forEach((star, index) => {
        star.classList.toggle("active", index < rating);
    });

    // Updating the rating value display (optional)
    let ratingValue = element.parentElement.querySelector(".rating-value");
    ratingValue.textContent = rating.toFixed(1);
}
// ======================
// 8. TOURS SLIDER
// ======================
function initToursSlider() {
    const slider = document.querySelector('.tours-grid');
    const leftArrow = document.querySelector('.slider-arrow.left');
    const rightArrow = document.querySelector('.slider-arrow.right');
    
    if (!slider || !leftArrow || !rightArrow) return;
    
    const cardWidth = document.querySelector('.tour-card').offsetWidth;
    const gap = 30; // Matches the gap in CSS
    const scrollAmount = cardWidth + gap;
    
    leftArrow.addEventListener('click', () => {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    
    rightArrow.addEventListener('click', () => {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    
    // Hide arrows when at extremes
    const checkArrows = () => {
        leftArrow.style.display = slider.scrollLeft <= 0 ? 'none' : 'flex';
        rightArrow.style.display = slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth ? 'none' : 'flex';
    };
    
    slider.addEventListener('scroll', checkArrows);
    window.addEventListener('resize', checkArrows);
    checkArrows();
}

// Initialize the slider when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initToursSlider();
});


/*document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("search-icon");
    const searchInput = document.getElementById("search-input");
    const footerMsg = document.getElementById("footer-message");
  
    // Toggle the search box
    searchIcon.addEventListener("click", function () {
      searchInput.classList.toggle("active");
      if (searchInput.classList.contains("active")) {
        searchInput.focus();
      }
    });
  
    // Handle Enter key
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (query) {
          alert(`Searching "${query}"`);
          footerMsg.textContent = `You searched for: ${query}`;
          searchInput.value = ""; // Clear after search
        } else {
          alert("Please enter a search term.");
        }
      }
    });
  });*/

  // JS for toggling search box and handling Enter key
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("search-toggle");
    const input = document.getElementById("search-box");

    toggle.addEventListener("click", () => {
        input.classList.toggle("active");
        if (input.classList.contains("active")) {
            input.focus();
        }
    });

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            const query = input.value.trim();
            if (query) {
                alert(`Searching "${query}"`);
                // Optional: write to footer or perform real search
                input.value = "";
            } else {
                alert("Please enter a search term.");
            }
        }
    });
});

  



