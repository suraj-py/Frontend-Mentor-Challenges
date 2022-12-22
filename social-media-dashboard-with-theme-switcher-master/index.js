const toggle_btn = document.querySelector('.box');
const ball = document.querySelector('.ball');

const cards = document.querySelectorAll('.card')
const overview_cards = document.querySelectorAll('.overview_card')

toggle_btn.addEventListener('click', () => {
    ball.classList.toggle('toggle')
    document.body.classList.toggle('bg-color');
    cards.classList.toggle('card-bg')
    overview_cards.classList.toggle('card-bg')
})