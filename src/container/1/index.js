const button = document.querySelector('.form__button')

// Обробник натискання на кнопку друку
button.addEventListener('click', () => {
  console.log('Ініційовано друк...')
  window.print() // Виклик функції друку браузера
})

// Обробник події "beforeprint"
window.addEventListener('beforeprint', (e) => {
  console.log(e)
  console.log('Підготовка до друку...')
  document.body.style.backgroundColor = 'red' // Змінити колір фону перед друком
})

// Обробник події "afterprint"
window.addEventListener('afterprint', (e) => {
  console.log(e)
  console.log('Друк завершено.')
  document.body.style.backgroundColor = '#fff' // Повернути колір фону до звичайного
})
