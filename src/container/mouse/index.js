const mouseArea = document.getElementById('mouseArea')
const clickArea = document.getElementById('clickArea')

// Додаємо обробник події для dblclick
clickArea.addEventListener('dblclick', (event) => {
  alert('Подія dblclick: Кнопку миші подвійно натиснуто')
  // console.log(event)
})

// =====

// Додаємо обробник події для mousedown
mouseArea.addEventListener('mousedown', (event) => {
  console.log('Подія mousedown: Кнопку миші натиснуто')
  // console.log(event)
})

// Додаємо обробник події для mouseup
mouseArea.addEventListener('mouseup', (event) => {
  console.log('Подія mouseup: Кнопку миші відпущено')
  // console.log(event)
})

// Додаємо обробник події для mouseenter
mouseArea.addEventListener('mouseenter', (event) => {
  console.log(
    "Подія mouseenter: Курсор миші ввійшов в межі об'єкта",
  )
  // console.log(event)
})

// Додаємо обробник події для mouseleave
mouseArea.addEventListener('mouseleave', (event) => {
  console.log(
    "Подія mouseleave: Курсор миші вийшов за межі об'єкта",
  )
  // console.log(event)
})

// Додаємо обробник події для mousemove
mouseArea.addEventListener('mousemove', (event) => {
  console.log(
    "Подія mousemove: Курсор миші рухається над об'єктом",
  )
  // console.log(event)
})

// Додаємо обробник події для mouseover
mouseArea.addEventListener('mouseover', (event) => {
  console.log(
    "Подія mouseover: Курсор миші наведено на об'єкт",
  )
  // console.log(event)
})

// Додаємо обробник події для mouseout
mouseArea.addEventListener('mouseout', (event) => {
  console.log(
    "Подія mouseout: Курсор миші виведено з об'єкта",
  )
  // console.log(event)
})
