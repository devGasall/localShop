const express = require('express')
const { create, list, read, update, remove } = require('../controllers/categoryControllers')
const router = express.Router()

router.post("/category/create", create)
router.get('/categories', list)
router.route('/category/:id')
    .get(read)
    .put(update)
    .delete(remove)

module.exports = router