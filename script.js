// Force mobile rendering για μικρές οθόνες
const mobileBreakpoint = 351;
if (window.innerWidth <= mobileBreakpoint || window.innerHeight <= mobileBreakpoint) {
    document.documentElement.classList.add('ultra-mobile');
    document.body.style.zoom = '0.85';

    // Απενεργοποίηση όλων των animations
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

// Check user preference on reload and handle theme switching
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

// Λειτουργία αναζήτησης οχημάτων
function search_vehicles() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let cards = document.querySelectorAll('.gallery .card');

    cards.forEach(card => {
        let title = card.querySelector('h6').textContent.toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Προστασίες
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    showProtectionMessage('Right-click is disabled to protect our content.');
});

document.addEventListener('keydown', function (e) {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'u')
    ) {
        e.preventDefault();
        showProtectionMessage('Access to developer tools and source code is restricted.');
    }
    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        showProtectionMessage('Copying content is disabled to protect our work.');
    }
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        showProtectionMessage('Saving the page is disabled.');
    }
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        showProtectionMessage('Printing the page is disabled.');
    }
});

document.addEventListener('selectstart', function (e) {
    e.preventDefault();
    showProtectionMessage('Text selection is disabled to protect our content.');
});

document.addEventListener('dragstart', function (e) {
    e.preventDefault();
    showProtectionMessage('Dragging images is disabled.');
});

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        showProtectionMessage('Saving images is disabled to protect our content.');
    });
});

function showProtectionMessage(message) {
    const messageBox = document.createElement('div');
    messageBox.id = 'protection-message';
    messageBox.style.position = 'fixed';
    messageBox.style.top = '50%';
    messageBox.style.left = '50%';
    messageBox.style.transform = 'translate(-50%, -50%)';
    messageBox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    messageBox.style.color = '#fff';
    messageBox.style.padding = '20px 40px';
    messageBox.style.borderRadius = '10px';
    messageBox.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5)';
    messageBox.style.zIndex = '9999';
    messageBox.style.fontFamily = "'Poppins', sans-serif";
    messageBox.style.textAlign = 'center';
    messageBox.style.maxWidth = '400px';
    messageBox.style.fontSize = '16px';
    messageBox.style.lineHeight = '1.5';

    messageBox.innerHTML = `
        <h3 style="margin: 0 0 10px; font-size: 20px;">Content Protected</h3>
        <p>${message}</p>
        <button style="
            margin-top: 15px;
            padding: 10px 20px;
            background-color: #ff4d4d;
            border: none;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            font-size: 14px;
        ">Close</button>
    `;

    document.body.appendChild(messageBox);

    messageBox.querySelector('button').addEventListener('click', function () {
        messageBox.remove();
    });

    setTimeout(() => {
        if (document.body.contains(messageBox)) {
            messageBox.remove();
        }
    }, 5000);
}