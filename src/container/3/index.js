const button = document.querySelector('.form__button')

// Обробник події "fullscreenchange"
document.addEventListener('fullscreenchange', (e) => {
  console.log(e)

  //не дає можливості увійти у повноекранний режим
  alert(
    `Повноекраний режим ${
      document.fullscreenElement !== null
        ? 'увімкнуто'
        : 'вимкнуто'
    }.`,
  )
})

// Обробник події "fullscreenerror"
document.addEventListener('fullscreenerror', (e) => {
  console.log(e)
  alert(
    'Помилка при спробі перейти до повноекранного режиму.',
  )
})

// Обробник натискання на кнопку повноекранного режиму
button.addEventListener('click', () => {
  //перевірка наявності елемента в повноекранному режимі
  if (document.fullscreenElement) {
    // перевіряємо наявність функції exitFullscreen в браузері
    if (document.exitFullscreen) {
      document.exitFullscreen
    }
  }

  const body = document.documentElement
  if (body.requestFullscreen) {
    body.requestFullscreen()
  } else {
    alert('Повноекранний режим не підтримується.')
  }
})
