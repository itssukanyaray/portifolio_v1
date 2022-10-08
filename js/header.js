// Sidebar toggle menu 

const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const toggler = document.querySelector('.fa-bars');
// const toggler = document.getElementById('toggler');

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
    // toggler.classList.remove('fa-bars');
    toggler.classList.toggle('fa-xmark');

});