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

// Sticky navigation
const nav = document.querySelector('.nav-bar');
const headerHeight = document.querySelector('.header').offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY >= headerHeight) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
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




