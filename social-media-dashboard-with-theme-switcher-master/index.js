const toggle_btn = document.querySelector('.box');
const ball = document.querySelector('.ball');


toggle_btn.addEventListener('click', () => {
    ball.classList.toggle('toggle');
    if (ball.classList.contains('toggle')) {
        console.log('true')
        document.body.classList.add('light')
    }
    else {
        console.log('false')
        document.body.classList.remove('light')
    }
})