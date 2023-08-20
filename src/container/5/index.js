const searchInput = document.getElementById('search')
const emailInput = document.getElementById('email')

// Обробник події "search"
searchInput.addEventListener('search', (e) => {
  console.log(e)
  const searchText = e.target.value
  alert(`Здійснено пошук: ${searchText}`)
})

// Обробник події "invalid"
emailInput.addEventListener('invalid', (e) => {
  console.log(e)
  alert(
    'Введені дані недійсні. Будь ласка, введіть коректні дані.',
  )
})
