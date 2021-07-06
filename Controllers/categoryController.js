const commonLangRu = require('../common/lang')

const Category = require('../schema/category')


module.exports.getCategory = (req, res) => {
    Category.find({}).then(profile => res.send(profile)).catch(error => res.send(error))
}


module.exports.newCategory = (req, res) => {
    Category.findOne({}, () => {
        console.log(commonLangRu.chicken + 'asdasdasdas')
        const newCategory = new Category({
            name: {
                en: req.body.name,
                rus: commonLangRu[req.body.name],
            },
            products: []
        })

        newCategory.save((err, data) => {
            if (err) return res.json({Error: err});
            console.log(data)
            return res.json(data);
        })
    })
};




