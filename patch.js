// script.js

// Λειτουργία για την απενεργοποίηση του δεξιού κλικ
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    showProtectionMessage('Right-click is disabled to protect our content.');
});

// Λειτουργία για την απενεργοποίηση συντομεύσεων πληκτρολογίου
document.addEventListener('keydown', function (e) {
    // Απενεργοποίηση F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'u')
    ) {
        e.preventDefault();
        showProtectionMessage('Access to developer tools and source code is restricted.');
    }

    // Απενεργοποίηση Ctrl+C (αντιγραφή)
    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        showProtectionMessage('Copying content is disabled to protect our work.');
    }

    // Απενεργοποίηση Ctrl+S (αποθήκευση σελίδας)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        showProtectionMessage('Saving the page is disabled.');
    }
});

// Λειτουργία για την εμφάνιση του UI μηνύματος
function showProtectionMessage(message) {
    // Δημιουργία του container για το μήνυμα
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

    // Προσθήκη του μηνύματος
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

    // Προσθήκη του container στο body
    document.body.appendChild(messageBox);

    // Κλείσιμο του μηνύματος με κλικ στο κουμπί
    messageBox.querySelector('button').addEventListener('click', function () {
        messageBox.remove();
    });

    // Αυτόματο κλείσιμο μετά από 5 δευτερόλεπτα
    setTimeout(() => {
        if (document.body.contains(messageBox)) {
            messageBox.remove();
        }
    }, 5000);
}

// Λειτουργία αναζήτησης οχημάτων (από το index.html)
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

// Απενεργοποίηση επιλογής κειμένου
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
    showProtectionMessage('Text selection is disabled to protect our content.');
});

// Απενεργοποίηση drag and drop εικόνων
document.addEventListener('dragstart', function (e) {
    e.preventDefault();
    showProtectionMessage('Dragging images is disabled.');
});

// Προστασία από εκτύπωση σελίδας (Ctrl+P)
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        showProtectionMessage('Printing the page is disabled.');
    }
});

// Απενεργοποίηση αποθήκευσης εικόνων μέσω δεξιού κλικ
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        showProtectionMessage('Saving images is disabled to protect our content.');
    });
});

// Ενεργοποίηση hamburger menu για το responsive navigation
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('active');
});