// Important for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animation for sections
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-out';
    observer.observe(section);
});

// Mobile nav toggle (non-sticky, pushes content)
document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector('.nav-bar');
    if (!navBar) return;

    // Create toggle button if not present
    let toggle = navBar.querySelector('.nav-toggle');
    if (!toggle) {
        toggle = document.createElement('button');
        toggle.className = 'nav-toggle';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', 'primary-navigation');
        toggle.innerHTML = '<span class="burger" aria-hidden="true"></span> Menu';
        navBar.insertBefore(toggle, navBar.firstChild);
    }

    // Ensure nav links have an id for aria-controls
    const navLinks = navBar.querySelector('.nav-links');
    if (navLinks && !navLinks.id) {
        navLinks.id = 'primary-navigation';
    }

    toggle.addEventListener('click', () => {
        const isOpen = navBar.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });
});
let currentIndex = 0;
const images = document.querySelectorAll('.Gallery-img');
const totalImages = images.length;

function updateCarousel() {
    const offset = -currentIndex * (images[0].clientWidth + 20); // Calculate offset
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`; // Apply the offset
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
    updateCarousel();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop back to the last image
    updateCarousel();
}




