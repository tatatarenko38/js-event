const pointerArea = document.getElementById('pointerArea')
const clickArea = document.getElementById('clickArea')

// Додаємо обробник події для click
clickArea.addEventListener('click', (event) => {
  alert('Подія click: Кнопку миші натиснуто')
  console.log('click event:', event)
})

// Додаємо обробник події для auxclick
clickArea.addEventListener('auxclick', (event) => {
  alert('Подія auxclick: Натиснуто додаткову кнопку миші')
  console.log(event)
})

// Додаємо обробник події для contextmenu
clickArea.addEventListener('contextmenu', (event) => {
  alert('Подія contextmenu: Відкликане контекстне меню')
  console.log(event)
})

// ====

// Додаємо обробник події для pointerdown
pointerArea.addEventListener('pointerdown', (event) => {
  console.log(
    'Подія pointerdown: Кнопку миші натиснуто або покажчик доторкнувся до елемента',
  )
  // console.log(event)
})

// Додаємо обробник події для pointerup
pointerArea.addEventListener('pointerup', (event) => {
  console.log(
    'Подія pointerup: Кнопку миші відпущено або покажчик відділився від елемента',
  )
  // console.log(event)
})

// Додаємо обробник події для pointermove
pointerArea.addEventListener('pointermove', (event) => {
  console.log(
    'Подія pointermove: Покажчик рухається над елементом',
  )
  // console.log(event)
})

// Додаємо обробник події для pointerenter
pointerArea.addEventListener('pointerenter', (event) => {
  console.log(
    "Подія pointerenter: Покажчик ввійшов в межі об'єкта",
  )
  // console.log(event)
})

// Додаємо обробник події для pointerleave
pointerArea.addEventListener('pointerleave', (event) => {
  console.log(
    "Подія pointerleave: Покажчик вийшов за межі об'єкта",
  )
  // console.log(event)
})

// Додаємо обробник події для pointerover
pointerArea.addEventListener('pointerover', (event) => {
  console.log(
    "Подія pointerover: Покажчик наведено на об'єкт",
  )
  // console.log(event)
})

// Додаємо обробник події для pointerout
pointerArea.addEventListener('pointerout', (event) => {
  console.log(
    "Подія pointerout: Покажчик виведено з об'єкта",
  )
  // console.log(event)
})

// Додаємо обробник події для pointercancel
pointerArea.addEventListener('pointercancel', (event) => {
  console.log(
    'Подія pointercancel: Взаємодію з покажчиком більше не можливо',
  )
  // console.log(event)
})
