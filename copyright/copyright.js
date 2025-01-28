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
//
//
//
// Όταν η σελίδα κάνει scroll
window.addEventListener('scroll', () => {
    // Παίρνουμε την τρέχουσα θέση κύλισης
    const scrollPosition = window.scrollY;

    // Ελέγχουμε αν η θέση κύλισης είναι μεγαλύτερη από 80px
    if (scrollPosition > 80) {
        // Μετακινείται και αποκτά δυναμικό effect (με εφέ αναλαμπής και μεγέθυνσης)
        switchButton.style.transform = 'translateX(100px) scale(0.6) rotate(15deg)';
        switchButton.style.opacity = '0'; // Κρύβουμε το κουμπί
        switchButton.style.visibility = 'hidden'; // Το κάνει εντελώς αόρατο
        switchButton.style.pointerEvents = 'none'; // Απενεργοποιούμε το click
        
    } else {
        // Επιστρέφει στην αρχική του θέση με πιο μοντέρνα κίνηση
        switchButton.style.transform = 'translateX(0) scale(1) rotate(0deg)';
        switchButton.style.opacity = '1'; // Επαναφορά πλήρους διαφάνειας
        switchButton.style.visibility = 'visible'; // Το κάνει ξανά ορατό
        switchButton.style.pointerEvents = 'auto'; // Ενεργοποιούμε το click ξανά
    }
});