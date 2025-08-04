// Create theme toggle button
const toggleBtn = document.createElement('button');
toggleBtn.id = 'theme-toggle';
toggleBtn.textContent = '🌗 Toggle Theme';
toggleBtn.setAttribute('aria-label', 'Switch between light and dark mode');

// Append to header
document.querySelector('header').appendChild(toggleBtn);

// Get user's saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(`${savedTheme}-theme`);

// Theme switching logic
toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-theme');
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');

  const newTheme = isDark ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
});