const mongoose = require('mongoose')
const { Schema, model } = mongoose
const connection = require('../config/menuDB')

const MenuSchema = new Schema({
    id: { type: String, require: true },
    authName: { type: String, require: true },
    path: { type: String, require: true },
    children: { type: String, require: true }  // json格式
})

const Menu = connection.model('Menu', MenuSchema)
module.exports = Menu
