/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // ========================================
    // 🌐 Lógica de internacionalización
    // ========================================

    const changeLanguage = (lang) => {
        const elements = document.querySelectorAll('[data-es][data-en]');
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });
    };

    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    if (btnEs && btnEn) {
        btnEs.addEventListener('click', () => changeLanguage('es'));
        btnEn.addEventListener('click', () => changeLanguage('en'));
    }

    // Si querés que arranque en español por defecto:
    changeLanguage('es');

    // ========================================
    // 🌓 Modo oscuro con ícono dinámico
    // ========================================
    const switchInput = document.getElementById('darkModeSwitch');
    const body = document.body;
    const darkModeIcon = document.getElementById('darkModeIcon'); // 🌙/☀️

    // Aplicar modo oscuro si ya estaba activado
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        if (switchInput) switchInput.checked = true;
        if (darkModeIcon) darkModeIcon.textContent = '☀️';
    }

    // Escuchar cambios del switch
    if (switchInput) {
        switchInput.addEventListener('change', () => {
            if (switchInput.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('dark-mode', 'enabled');
                if (darkModeIcon) darkModeIcon.textContent = '☀️';
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('dark-mode', 'disabled');
                if (darkModeIcon) darkModeIcon.textContent = '🌙';
            }
        });
    }

});
