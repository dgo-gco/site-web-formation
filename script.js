let menu = document.querySelector('.bars-menu');
let nav = document.querySelector('.menu');

const acceuil = document.querySelector('#top');
const portfolio = document.querySelector('#applications');
const github = document.querySelector('#github');
const details = document.querySelector('#details');

const menuBtn = document.querySelector('.menu');

menu.addEventListener('click', function(){
    nav.classList.toggle('mobile-menu');
})

menuBtn.addEventListener('click', function(){
    nav.classList.toggle('mobile-menu');
})
