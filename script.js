document.addEventListener('DOMContentLoaded', function () {

    const botaoMenu = document.querySelector('.botao-menu');
    const menuMobile = document.querySelector('.menu-mobile');

    botaoMenu.addEventListener('click', function () {

        menuMobile.classList.toggle('ativo');

        const menuAberto = menuMobile.classList.contains('ativo');

        botaoMenu.setAttribute('aria-expanded', menuAberto);

    });

});