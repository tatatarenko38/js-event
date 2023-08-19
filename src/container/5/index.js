const searchInput = document.getElementById('search')

// Обробник події "search"
searchInput.addEventListener('search', (e) => {
  console.log(e)
  const searchText = e.target.value
  alert(`Здійснено пошук: ${searchText}`)
})

// Обробник події "invalid"
searchInput.addEventListener('invalid', (e) => {
  console.log(e)
  alert(
    'Введені дані недійсні. Будь ласка, введіть коректні дані.',
  )
})
