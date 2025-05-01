// Force mobile rendering για μικρές οθόνες
const mobileBreakpoint = 351;
if (window.innerWidth <= mobileBreakpoint || window.innerHeight <= mobileBreakpoint) {
    document.documentElement.classList.add('ultra-mobile');
    document.body.style.zoom = '0.85';

    CSS.registerProperty({
        name: '--disable-animations',
        syntax: '<number>',
        initialValue: 1,
        inherits: false
    });

    document.querySelectorAll('*').forEach(el => {
        el.style.setProperty('transition', 'none !important');
        el.style.setProperty('animation', 'none !important');
    });
}

// Επιλέγουμε το στοιχείο κουμπιού
const switchButton = document.querySelector('.switch');

// Όταν η σελίδα κάνει scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 80) {
        switchButton.style.transform = 'translateX(100px) scale(0.6) rotate(15deg)';
        switchButton.style.opacity = '0';
        switchButton.style.visibility = 'hidden';
        switchButton.style.pointerEvents = 'none';
    } else {
        switchButton.style.transform = 'translateX(0) scale(1) rotate(0deg)';
        switchButton.style.opacity = '1';
        switchButton.style.visibility = 'visible';
        switchButton.style.pointerEvents = 'auto';
    }
});

// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Smooth scrolling for internal links
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }

        menu.classList.remove('show');
    });
});

// Default to dark mode
document.body.classList.add('dark-mode');
const themeSwitch = document.querySelector('.input__check');
themeSwitch.checked = true;

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeSwitch.checked = true;
} else {
    document.body.classList.add('light-mode');
}

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});

// Χρώμα τίτλου
const title = document.querySelector('#home h1');
title.addEventListener('mouseenter', () => {
    title.style.transition = "all 0.3s ease";
    title.style.color = "#1677ff";
    title.style.textShadow = "2px 2px 8px rgba(0, 0, 0, 0.3)";
});

function search_vehicles() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let cards = document.querySelectorAll('.gallery .card');

    cards.forEach(card => {
        let title = card.querySelector('h6').textContent.toLowerCase();
        if (title.includes(input)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}
document.querySelectorAll('.description').forEach(description => {
    const shortText = description.querySelector('.short-text');
    const fullText = description.querySelector('.full-text');
    const button = description.querySelector('.show-more');

    if (window.innerWidth >= 500) {
        // Σε μεγάλα πλάτη, δείξε πάντα όλο το κείμενο, κρύψε το κουμπί
        if (shortText) shortText.style.display = 'none';
        if (fullText) fullText.style.display = 'inline';
        if (button) button.style.display = 'none';
    } else if (button) {
        // Σε μικρές οθόνες, δούλεψε με toggle
        button.addEventListener('click', () => {
            if (fullText.style.display === 'none') {
                shortText.style.display = 'none';
                fullText.style.display = 'inline';
                button.textContent = 'Show Less';
            } else {
                shortText.style.display = 'inline';
                fullText.style.display = 'none';
                button.textContent = 'Show More';
            }
        });
    }
});
