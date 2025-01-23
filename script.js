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

    menu.classList.remove('show'); // Close menu on mobile after click
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

// Toggle dark/light mode
themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
});

// Handle mousemove effect on image container
const container = document.querySelector('.image-container');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  const rotateX = ((yPercent - 50) / 10) * -1; // Περιστροφή στον X άξονα
  const rotateY = ((xPercent - 50) / 10);      // Περιστροφή στον Y άξονα

  container.style.transition = "transform 0.1s ease"; // Γρήγορο transition κατά την κίνηση
  container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Handle mouse enter and leave for box shadow effect
container.addEventListener('mouseenter', () => {
  container.style.transition = "transform 0.8s ease, box-shadow 1.5s ease"; // Προσθήκη transition
  if (document.body.classList.contains('dark-mode')) {
    container.style.boxShadow = "0 5px 10px rgba(50, 60, 90, 0.2), -10px 10px 15px rgba(60, 70, 100, 0.918), inset 0 5px 10px rgba(50, 60, 90, 0.2), inset 10px -10px 10px 5px rgba(60, 70, 100, 0.39)";
  } else {
    container.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.3), 0 15px 15px rgba(0, 0, 0, 0.2)";
  }
});

container.addEventListener('mouseleave', () => {
  container.style.transition = "transform 0.8s ease, box-shadow 1.5s ease"; // Επαναφορά transition
  container.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  if (document.body.classList.contains('dark-mode')) {
    container.style.boxShadow = "0 5px 10px rgba(50, 60, 90, 0.2), -10px 10px 15px rgba(60, 70, 100, 0.918), inset 0 5px 10px rgba(50, 60, 90, 0.2), inset 10px -10px 10px 5px rgba(60, 70, 100, 0.39)";
  } else {
    container.style.boxShadow = "0 25px 30px rgba(0, 0, 0, 0.2), 0 15px 10px rgba(0, 0, 0, 0.1)";
  }
});

// Title hover effect
// Διασφάλιση ότι το χρώμα είναι το μπλε όταν γίνεται refresh
document.querySelector('#home h1').style.color = '#1677ff';


title.addEventListener('mouseenter', () => {
    title.style.transition = "all 0.3s ease"; // Ομαλή μετάβαση
    title.style.color = "#1677ff"; // Αλλαγή χρώματος κατά το hover
    title.style.textShadow = "2px 2px 8px rgba(0, 0, 0, 0.3)"; // Ενίσχυση της σκιάς
    title.style.transform = "scale(1.05)"; // Ελαφριά αύξηση μεγέθους για ένταση
});

title.addEventListener('mouseleave', () => {
    title.style.transition = "all 0.3s ease"; // Ομαλή μετάβαση
    title.style.color = "#333"; // Επαναφορά του χρώματος
    title.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.2)"; // Επαναφορά της σκιάς
    title.style.transform = "scale(1)"; // Επαναφορά στο αρχικό μέγεθος
});
