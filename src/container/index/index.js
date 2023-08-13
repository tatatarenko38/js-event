class Header {
  static #height = null
  static #wrapper = null
  static #button = null

  static init() {
    this.#height = document.querySelector(
      '.header__bottom',
    ).offsetHeight

    this.#wrapper = document.querySelector(
      '.header__wrapper',
    )
    this.#button = document.querySelector('.header__button')

    this.#button.onclick = this.#toggle
  }

  static #toggle = () => {
    this.isOpen = !this.isOpen

    if (this.isOpen) {
      this.#button.classList.replace(
        'header__button--close',
        'header__button--open',
      )

      this.#wrapper.style.height = `${this.#height}px`
    } else {
      this.#button.classList.replace(
        'header__button--open',
        'header__button--close',
      )

      this.#wrapper.style.height = 0
    }
  }
}

Header.init()

class Slider {
  static #content = null
  static #left = null
  static #right = null

  static #count = 1
  static #max = null

  static init = () => {
    this.#content = document.querySelector(
      '.slider__content',
    )
    this.#left = document.querySelector(
      '.slider__button--left',
    )
    this.#right = document.querySelector(
      '.slider__button--right',
    )

    this.#max = this.#content.childElementCount

    this.#left.onclick = () => this.#slide('left')
    this.#right.onclick = () => this.#slide('right')
  }

  static #slide = (side) => {
    const offsetWidth = this.#content.offsetWidth
    const scrollLeft = this.#content.scrollLeft
    const scrollWidth = this.#content.scrollWidth

    let scroll = 0

    if (side === 'left') {
      if (this.#count === 1) {
        scroll = scrollWidth
        this.#count = this.#max
      } else {
        scroll = -offsetWidth
        this.#count -= 1
      }
    }

    if (side === 'right') {
      if (this.#count === this.#max) {
        scroll = -scrollWidth
        this.#count = 1
      } else {
        scroll = offsetWidth
        this.#count += 1
      }
    }

    console.log(scrollLeft, scrollWidth)
    console.log(scrollLeft + offsetWidth)

    this.#content.scrollBy({
      top: 0,
      left: scroll,
      behavior: 'smooth',
    })
  }
}

Slider.init()
