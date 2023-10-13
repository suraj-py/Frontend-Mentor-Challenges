let openBtn = document.querySelector('.hamburger')
let closeBtn = document.querySelector('.hamburger__close')
let sideMenu = document.querySelector('.mobile__nav-menu')

openBtn.addEventListener('click', () => {
    sideMenu.classList.add('open')
})

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open')
})