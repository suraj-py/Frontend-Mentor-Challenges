const toggleButton = document.querySelector('.toggle__button')
const toggleBall = document.querySelector('.ball')



toggleButton.addEventListener('click', () => {
    toggleBall.classList.toggle('toggle')
    toggleButton.classList.toggle('toggleBg')
})