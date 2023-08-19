const networkStatus =
  document.getElementById('networkStatus')

// Обробник події "offline"
window.addEventListener('offline', (e) => {
  console.log(e)
  networkStatus.textContent = 'Статус мережі: Офлайн'
  alert('Стан мережі: Офлайн')
})

// Обробник події "online"
window.addEventListener('online', (e) => {
  console.log(e)
  networkStatus.textContent = 'Статус мережі: Онлайн'
  alert('Стан мережі: Онлайн')
})
