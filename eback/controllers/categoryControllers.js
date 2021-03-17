const Category = require('../models/categoryModel')

exports.create = (req, res) => {
    console.log(req.body)
    const category = new Category(req.body)
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                err: "impossible de creer ce categorie"
            })
        }
        res.json(data)
    })
}


exports.list = (req, res) => {
    Category.find({}).exec((error, data) => {
        if (error) {
            return res.status(400).json({
                error: 'impossible de charger les categories'
            })
        }
        res.json(data)
    })
}

exports.read = (req, res) => {
    Category.findOne({ _id: req.params.id }).exec((error, data) => {
        if (error) {
            return res.status(404).json({
                error: 'Category not found'
            })
        }
        res.json(data)
    })
}

exports.update = (req, res) => {
    const { name } = req.body;
    Category.findOneAndUpdate(
        { _id: req.params.id },
        { name },
        { new: true }
    )
        .exec((error, updated) => {
            if (error) {
                return res.status(400).json({
                    error: "category update failed"
                })
            }
            res.json(updated)
        })
}

exports.remove = (req, res) => {
    Category.findOneAndDelete({ _id: req.params.id }, function (err, docs) {
        if (err) {
            res.send(err)
        } else {
            res.json({ message: 'Category deleted' })
        }
    })
}