// theme.js
// This script checks the saved theme preference and applies it to the page.
// It is kept simple so it's very beginner-friendly to understand.

// 1. Get the saved theme from the browser's Local Storage, defaulting to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';

// 2. Apply the dark theme class to the HTML element if 'dark' is saved
if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
}

// 3. This function toggles the theme when you click the button in Settings
function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark-theme');
    
    if (isDark) {
        // Switch to light mode
        document.documentElement.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        // Switch to dark mode
        document.documentElement.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}
