const {Schema, model} = require('mongoose')


const schema = new Schema({
    name: Object,
    products: Array,
})

module.exports = model('category', schema)