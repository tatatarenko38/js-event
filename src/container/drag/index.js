const dragElement = document.getElementById('dragElement')
const dropZone = document.getElementById('dropZone')

// Обробники подій для перетягування
dragElement.addEventListener('dragstart', (event) => {
  console.log(event)

  event.dataTransfer.setData(
    'text/plain',
    'Перетягуваний текст',
  )
  console.log('Почато перетягування')
})

dragElement.addEventListener('drag', () => {
  console.log('Перетягування в процесі')
})

dragElement.addEventListener('dragend', () => {
  console.log('Перетягування завершено')
})

// Обробники подій для зони перетягування
dropZone.addEventListener('dragenter', () => {
  console.log("Об'єкт входить в зону перетягування")
})

dropZone.addEventListener('dragleave', () => {
  console.log("Об'єкт покидає зону перетягування")
})

dropZone.addEventListener('dragover', (event) => {
  event.preventDefault()
  console.log("Об'єкт над зоною перетягування")
})

dropZone.addEventListener('drop', (event) => {
  console.log(event)

  event.preventDefault()
  const data = event.dataTransfer.getData('text/plain')
  dropZone.textContent = `Впустили: ${data}`
  console.log("Об'єкт впущено")
})
