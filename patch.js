// Ολική απενεργοποίηση δεξιού κλικ
document.addEventListener('contextmenu', e => e.preventDefault());

// Απενεργοποίηση επιλογής κειμένου
document.addEventListener('selectstart', e => e.preventDefault());

// Εφαρμογή user-select: none σε όλα τα στοιχεία
document.documentElement.style.userSelect = 'none';
document.documentElement.style.webkitUserSelect = 'none';
document.documentElement.style.msUserSelect = 'none';

document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';
document.body.style.msUserSelect = 'none';

document.querySelectorAll('*').forEach(el => {
    el.style.userSelect = 'none';
    el.style.webkitUserSelect = 'none';
    el.style.msUserSelect = 'none';
});

// Απενεργοποίηση drag and drop
document.addEventListener('dragstart', e => e.preventDefault());

// Απενεργοποίηση long-press σε κινητά
document.addEventListener('touchstart', e => {
    if (e.touches.length > 1) e.preventDefault();
}, { passive: false });
document.addEventListener('gesturestart', e => e.preventDefault());

// Απενεργοποίηση όλων των shortcuts
document.addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey || e.altKey || e.key === 'F12') {
        e.preventDefault();
        showProtectionMessage('Shortcuts and developer tools are disabled.');
    }
});

// Απενεργοποίηση copy event
document.addEventListener('copy', e => {
    e.preventDefault();
    showProtectionMessage('Copying is disabled.');
});

// Μπλοκάρισμα clipboard API
if (navigator.clipboard) {
    navigator.clipboard.writeText = () => Promise.reject('Copying is disabled');
}

// Popup εμφάνισης προστασίας
function showProtectionMessage(message) {
    if (document.getElementById('protection-message')) return;
    const box = document.createElement('div');
    box.id = 'protection-message';
    box.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0,0,0,0.9);
        color: #fff;
        padding: 20px 40px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        z-index: 9999;
        font-family: 'Poppins', sans-serif;
        text-align: center;
        max-width: 400px;
    `;
    box.innerHTML = `
        <h3 style="margin:0 0 10px;">Content Protected</h3>
        <p>${message}</p>
        <button style="
            margin-top:15px;
            padding:10px 20px;
            background-color:#ff4d4d;
            border:none;
            border-radius:5px;
            color:#fff;
            cursor:pointer;
        ">Close</button>
    `;
    box.querySelector('button').addEventListener('click', () => box.remove());
    document.body.appendChild(box);
    setTimeout(() => {
        if (document.body.contains(box)) box.remove();
    }, 5000);
}
