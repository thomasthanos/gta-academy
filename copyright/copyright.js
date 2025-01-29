// Smooth scroll handler
let lastScroll = 0;
let ticking = false;
const switchButton = document.querySelector('.switch-button');

function updateSwitchButton(scrollPos) {
    if (scrollPos > 80) {
        switchButton.classList.add('hidden');
    } else {
        switchButton.classList.remove('hidden');
    }
}

window.addEventListener('scroll', () => {
    lastScroll = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateSwitchButton(lastScroll);
            ticking = false;
        });
        ticking = true;
    }
});

// Optimized hover effects with requestAnimationFrame
document.querySelectorAll('.permanent-image').forEach(img => {
    let hovering = false;
    
    const updateTransform = () => {
        if (hovering) {
            img.style.transform = 'scale(1.05)';
        } else {
            img.style.transform = 'scale(1)';
        }
        requestAnimationFrame(updateTransform);
    };

    img.addEventListener('mouseenter', () => {
        hovering = true;
        requestAnimationFrame(updateTransform);
    });
    
    img.addEventListener('mouseleave', () => {
        hovering = false;
        requestAnimationFrame(updateTransform);
    });
});

// Smooth description toggle
document.querySelector('.description-btn').addEventListener('click', function() {
    this.classList.toggle('active-description');
    const description = document.querySelector('.cyber-description');
    description.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    description.style.maxHeight = description.style.maxHeight ? null : `${description.scrollHeight}px`;
});