const express = require('express')
const router = express.Router()

const {getAllBooks, getAllBooksStatic,} = require('../controllers/books')

router.route('/').get(getAllBooks)
router.route('/static').get(getAllBooksStatic)

module.exports = router