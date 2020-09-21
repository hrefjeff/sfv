(function () {
    
    // Initialization
    const menu = document.querySelector('.nav-toggle');
    const navRight = document.querySelector('.nav-right');

    menu.addEventListener('click', toggleMenu);

    // Methods
    function toggleMenu() {
        menu
            .classList
            .toggle('is-active');
        navRight
            .classList
            .toggle('is-active');
    }
})();
