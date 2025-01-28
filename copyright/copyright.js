// JavaScript - Προαιρετικό για additional interactions
document.querySelector('.description-btn').addEventListener('click', function() {
    this.classList.toggle('active-description');
});

// Προσθήκη hover effect με JS αν χρειάζεται
document.querySelectorAll('.permanent-image').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
    });
    
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});