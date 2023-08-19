const details = document.getElementById('details')

// Обробник події "toggle"
details.addEventListener('toggle', (e) => {
  console.log(e)
  if (e.target.open) {
    alert('Деталі розгорнуті.')
  } else {
    alert('Деталі згорнуті.')
  }
})
