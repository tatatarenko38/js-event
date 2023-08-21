const textInput = document.getElementById('textInput')
const output = document.getElementById('output')

// Обробник події "beforeinput" для відстеження перед введенням даних
textInput.addEventListener('beforeinput', (event) => {
  alert(`Подія beforeinput`)
  console.log(event)
})

// Обробник події "input" для відстеження введення даних
textInput.addEventListener('input', (event) => {
  alert(`Подія input`)
  output.textContent = event.target.value
  console.log(event)
})
