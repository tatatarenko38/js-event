const statusElement = document.getElementById('status')

// Додаємо обробник події для pageshow
window.addEventListener('pageshow', (event) => {
  statusElement.textContent = 'Статус: Видима'
  alert(
    'Подія pageshow: Сторінка стала видимою для користувача',
  )
  console.log(event)
  console.log(document.visibilityState)
})

// Додаємо обробник події для pagehide
window.addEventListener('pagehide', (event) => {
  statusElement.textContent = 'Статус: Невидима'
  alert('Подія pagehide: Вікно переходить на іншу сторінку')
  console.log(event)
  console.log(document.visibilityState)
})
