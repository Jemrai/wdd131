


document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    document.getElementById('last-modified').textContent = lastModified.toLocaleDateString();
});


const hamburgerBtn = document.getElementById('hamburger-btn');
const navList = document.getElementById('nav-list');

hamburgerBtn.addEventListener('click', function() {
    const isVisible = navList.style.display === 'flex';
    navList.style.display = isVisible ? 'none' : 'flex';
    
  
    hamburgerBtn.textContent = isVisible ? '☰' : '✕';
});