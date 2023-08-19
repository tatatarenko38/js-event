// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const event = require('./event')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', event)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
