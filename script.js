// Ambil elemen-elemen yang dibutuhkan
const menuToggle = document.getElementById('menu-toggle');
const navCenter = document.querySelector('.nav-center');
const navbar = document.querySelector('nav');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    navCenter.classList.toggle('active');
});

// Shrink navbar saat scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

// Fade-in hero content setelah halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }
});

// Smooth scroll untuk link navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

