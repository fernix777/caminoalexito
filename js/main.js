// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
});

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const slideCount = slides.length;

    // Inicializar el primer slide como activo
    slides[0].classList.add('active');

    function nextSlide() {
        // Remover la clase active del slide actual
        slides[currentSlide].classList.remove('active');
        
        // Calcular el siguiente slide
        currentSlide = (currentSlide + 1) % slideCount;
        
        // Agregar la clase active al nuevo slide
        slides[currentSlide].classList.add('active');
    }

    // Cambiar slides cada 8 segundos
    setInterval(nextSlide, 8000);
});
