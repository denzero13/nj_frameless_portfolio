document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Швидке встановлення збереженої теми
    const savedTheme = localStorage.getItem('cv-theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    btn.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', next);
        localStorage.setItem('cv-theme', next);
    });
});