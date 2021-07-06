const {Schema, model} = require('mongoose')


const schema = new Schema({
    street: String,
    home: String,
    total: Number,
    delivery: String,
    basketList: Array
})

module.exports = model('basket', schema)