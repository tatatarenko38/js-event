const transitionElement = document.querySelector(
  '.transition-element',
)
const startButton = document.getElementById(
  'startTransition',
)
const cancelButton = document.getElementById(
  'cancelTransition',
)

startButton.addEventListener('click', (event) => {
  event.preventDefault()

  transitionElement.style.width = '200px'
  transitionElement.style.height = '200px'
})

cancelButton.addEventListener('click', (event) => {
  event.preventDefault()
  transitionElement.style.transition = 'none'
  transitionElement.style.width = '100px'
  transitionElement.style.height = '100px'

  setTimeout(() => {
    transitionElement.style.transition =
      'width 2s, height 2s'
  })
})

transitionElement.addEventListener(
  'transitioncancel',
  (event) => {
    console.log('Transition Cancelled:', event)
  },
)

transitionElement.addEventListener(
  'transitionend',
  (event) => {
    console.log('Transition Ended:', event)
  },
)

transitionElement.addEventListener(
  'transitionrun',
  (event) => {
    console.log('Transition Started Again:', event)
  },
)

transitionElement.addEventListener(
  'transitionstart',
  (event) => {
    console.log('Transition Started:', event)
  },
)
