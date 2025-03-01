document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('.nav-list');
    const overlay = document.querySelector('.overlay');

    // Открытие/закрытие меню
    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Закрытие меню при клике на затемнение
    overlay.addEventListener('click', function() {
        navList.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});