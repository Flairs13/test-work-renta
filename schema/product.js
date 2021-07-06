const {Schema, model} = require('mongoose')


const schema = new Schema({
    name: Object,
    price: Number,
    delivery: Boolean,
    category: String,
    img: String,
})

module.exports = model('product', schema)