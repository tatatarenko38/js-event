// Обробник події "DOMContentLoaded"
document.addEventListener('DOMContentLoaded', (e) => {
  console.log(e)

  const paragraph = document.createElement('p')

  paragraph.innerText =
    'DOM повністю завантажено i готовий для взаємодії.'

  document.querySelector('.form').appendChild(paragraph)
})

// Обробник події "appinstalled"
window.addEventListener('appinstalled', (e) => {
  console.log(e)

  alert(
    'PWA-додаток успішно встановлений на пристрій користувача.',
  )
})
