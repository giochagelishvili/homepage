document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const close = document.getElementById('close');
    const navMenu = document.getElementById('nav-menu');
    const dollars = document.getElementById('get-dollars');

    hamburger.addEventListener('click', show);
    close.addEventListener('click', hide);
    dollars.addEventListener('click', joke);

    function joke() {
        alert("Just kidding bro... Open nav menu 😉");
    }

    function show() {
        navMenu.style.top = '0';
    }

    function hide() {
        navMenu.style.top = '-100vh';
    }
});