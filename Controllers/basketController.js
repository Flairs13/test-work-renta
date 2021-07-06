const Basket = require('../schema/basket')


module.exports.getBasket = (req, res) => {
    Basket.find({}).then(profile => res.send(profile[profile.length - 1])).catch(error => res.send(error))
}


module.exports.newBasket = (req, res) => {
    Basket.findOne({}, () => {
        const newBasket = new Basket({
            street: req.body.street,
            home: req.body.home,
            total: req.body.total,
            delivery: req.body.delivery,
            basketList: req.body.basketList
        })

        newBasket.save((err, data) => {
            if (err) return res.json({Error: err});
            console.log(data)
            return res.json(data);
        })
    })
};




