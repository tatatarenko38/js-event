// Обробник події "copy"
window.addEventListener('copy', (event) => {
  console.log(event)

  alert('Скопійовано')
})

// Обробник події "cut"
window.addEventListener('cut', (event) => {
  console.log(event)

  alert('Вирізано')
})

// Обробник події "paste"
window.addEventListener('paste', (event) => {
  console.log(event)
  event.preventDefault()
  const pastedContent =
    event.clipboardData.getData('text/plain')
  alert(`Вставлено: ${pastedContent}`)
})
