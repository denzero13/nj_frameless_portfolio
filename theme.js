const btn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement; // Звертаємось до <html>

// Функція перемикання
btn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('cv-theme', newTheme);
});

// Завантаження збереженої теми
const savedTheme = localStorage.getItem('cv-theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);