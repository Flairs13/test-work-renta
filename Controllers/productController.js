const commonLangRu = require('../common/lang')

const Product = require('../schema/product')
const Category = require('../schema/category')


module.exports.getProduct = (req, res) => {
    Product.find({}).then(product => res.send(product)).catch(error => res.send(error))
}


module.exports.newProduct = (req, res) => {
    Product.findOne({}, async () => {
        const host = req.host;
        let filePath = null
        if (req.file){
            filePath = req.protocol + "://" + host + '/' + req.file.path;
        }
        const newProduct = new Product({
            name: {
                en: req.body.name,
                ru: commonLangRu[req.body.name]
            },
            price: req.body.price,
            delivery: req.body.delivery,
            category: req.body.category,
            img: filePath
        })

        Category.findOneAndUpdate({'name.en': newProduct.category}, {"$push": { "products": newProduct._id}})
            .then(res => console.log(res)).catch(err => console.log(err))

        newProduct.save((err, data) => {
            if (err) return res.json({Error: err});
            return res.json(data);
        })
    })
};




