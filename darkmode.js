const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Default: light mode
body.classList.remove('dark-mode');
toggleBtn.textContent = "🌙";

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleBtn.textContent = body.classList.contains('dark-mode') ? "☀️" : "🌙";
});
