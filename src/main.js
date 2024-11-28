import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Read More



// Scroll Up

const scrollUp = () => {
    const scrollUpBtn = document.querySelector('.scroll-up');

    if (window.scrollY >= 150) {
        scrollUpBtn.classList.remove('-bottom-1/2');
        scrollUpBtn.classList.add('bottom-4');
    }
    else {
        scrollUpBtn.classList.add('-bottom-1/2');
        scrollUpBtn.classList.remove('bottom-4');
    }
};

window.addEventListener('scroll', scrollUp);

// Active Link

const activeLink = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(item => {
        item.classList.remove('active');

        if (item.href.includes(`#${current}`)) {
            item.classList.add('active');
        }
    });
};

window.addEventListener('scroll', activeLink);

