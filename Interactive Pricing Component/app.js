const toggleButton = document.querySelector('.toggle__button')
const toggleBall = document.querySelector('.ball')

const rangeInput = document.querySelector('input[type="range"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInput.addEventListener('input', handleInputChange)

rangeInput.addEventListener('mousedown', (e)=>{
  e.target.classList.add('grabbing')
  e.target.classList.remove('pointer')
})

rangeInput.addEventListener('mouseup', (e)=>{
  e.target.classList.remove('grabbing')
  e.target.classList.add('pointer')
})

toggleButton.addEventListener('click', () => {
    toggleBall.classList.toggle('toggle')
    toggleButton.classList.toggle('toggleBg')
})