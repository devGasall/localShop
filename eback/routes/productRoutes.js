const express = require('express')
const { create, list, read, update, remove } = require('../controllers/productControllers')


const router = express.Router()


router.post("/product/create", create)
router.get('/products', list)
router.route("/product/:id")
    .get(read)
    .put(update)
    .delete(remove)


module.exports = router