// Додати обробник події "hashchange" для відстеження змін у фрагменті ідентифікатора URL
window.addEventListener('hashchange', (event) => {
  const newHash = event.newURL.split('#')[1]

  alert(`Змінено хеш на: ${newHash}`)
})
