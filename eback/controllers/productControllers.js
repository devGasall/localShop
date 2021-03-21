const Product = require('../models/productModel')

exports.create = (req, res) => {
    const product = new Product(req.body)

    product.save((err, product) => {
        if (err) {
            return res.status(400).json({
                error: 'create product failed'
            })
        }
        res.json(product)
    })
}

exports.list = (req, res) => {
    Product.find({}).exec((error, data) => {
        if (error) {
            return res.status(400).json({
                error: 'impossible de charger les produits'
            })
        }
        res.json(data)
    })
}


exports.read = (req, res) => {
    Product.findOne({ _id: req.params.id }).exec((error, data) => {
        if (error) {
            return res.status(404).json({
                error: 'Product not found'
            })
        }
        res.json(data)
    })
}



exports.update = (req, res) => {
    Product.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    ).exec((error, updated) => {
        if (error) {
            return res.status(400).json({
                error: "product update failed"
            })
        }
        res.json(updated)
    })
}


exports.remove = (req, res) => {
    Product.findOneAndDelete({ _id: req.params.id }, function (err, docs) {
        if (err) {
            res.send(err)
        } else {
            res.json({ message: 'Product deleted' })
        }
    })
}