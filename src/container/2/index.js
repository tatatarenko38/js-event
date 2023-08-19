const input = document.querySelector('.form__input')

// Обробник події "change"
input.addEventListener('change', (event) => {
  console.log(event)
  alert(event.target.value)
})
