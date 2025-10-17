document.addEventListener("DOMContentLoaded", function() {

    // --- Mobile Navigation ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // --- Typing Effect ---
    const nameText = "Kunal Rohilla";
    const nameElement = document.getElementById("name-text");
    let i = 0;
    function typeWriter() {
        if (i < nameText.length) {
            nameElement.innerHTML += nameText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    // Start typing after a short delay
    setTimeout(typeWriter, 500);


    // --- Scroll Animations ---
    const sections = document.querySelectorAll('.content-section');

    const revealSection = function(entries, observer) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;

        entry.target.classList.add('visible');
        if(entry.target.id === 'experience'){
           entry.target.style.animation = `slideInFromLeft 1s ease-out forwards`;
        } else {
           entry.target.style.animation = `fadeIn 1s ease-out forwards`;
        }
        
        observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(function(section) {
        sectionObserver.observe(section);
    });

    // --- Navbar Hide on Scroll ---
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY && window.scrollY > 100) {
            // scroll down
            navbar.style.top = '-70px';
        } else {
            // scroll up
            navbar.style.top = '0';
        }
        lastScrollY = window.scrollY;
    });

});
