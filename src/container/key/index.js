const textInput = document.getElementById('textInput')

// Додаємо обробник події для keydown
textInput.addEventListener('keydown', (event) => {
  console.log(
    `Було натиснуто клавішу "${event.key}" (код: ${event.code})`,
  )
  // console.log(event)
})

// Додаємо обробник події для keypress
textInput.addEventListener('keypress', (event) => {
  console.log(
    `Була утримана клавіша "${event.key}" (код: ${event.code})`,
  )
  console.log(event)
})

// Додаємо обробник події для keyup
textInput.addEventListener('keyup', (event) => {
  //  може працювати некоректно на macbook
  console.log(`Було відпущено клавішу "${event.key}"`)
  // console.log(event)
})
