const mongoose = require('mongoose')
const Schema = mongoose.Schema

let PageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Page', PageSchema)