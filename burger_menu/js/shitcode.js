const menu = document.querySelector('.menu');
const burger_menu = document.querySelector('.burger_menu');
menu.addEventListener('click', function(){
    burger_menu.classList.toggle('hidden');
})