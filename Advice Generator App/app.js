const quote = document.querySelector('.advice')
const refreshButton = document.querySelector('.refresh__button')
const adviceID = document.querySelector('.id')

function newQuote() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            console.log(data.slip)
            adviceID.textContent = data.slip.id
            quote.textContent = `"${data.slip.advice}"`
    })
}

refreshButton.addEventListener('click', newQuote)