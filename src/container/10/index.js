const selectedText = document.getElementById('selectedText')

// Обробник події "selectionchange"
document.addEventListener('selectionchange', () => {
  const selection = window.getSelection()
  const selectedContent = selection.toString()

  if (selectedContent) {
    selectedText.textContent = `Вибраний текст: ${selectedContent}`
  } else {
    selectedText.textContent = 'Вибраний текст: '
  }
})
