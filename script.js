document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('.nav-list');
    const overlay = document.querySelector('.overlay');

    // ��������/�������� ����
    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // �������� ���� ��� ����� �� ����������
    overlay.addEventListener('click', function() {
        navList.classList.remove('active');
        overlay.classList.remove('active');
    });

    // �������� ���� ��� ����� �� ������
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});