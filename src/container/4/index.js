const form = document.querySelector('.form')

// Обробник події "reset"
form.addEventListener('reset', (event) => {
  console.log(event)
  alert('Форму скинуто до початкового стану.')
})

// Обробник події "submit"
form.addEventListener('submit', (event) => {
  console.log(event)
  event.preventDefault() // Відмінити типову відправку форми
  alert('Валідація та відправка даних...')
  // Тут можна додати код для валідації та відправки даних на сервер
})
