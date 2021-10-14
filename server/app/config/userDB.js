const mongoose = require('mongoose')
const mongoUrl = 'mongodb://127.0.0.1:27017/user'
const connection = mongoose.createConnection(mongoUrl, () => {
    console.log('mongodb/login connect')
})

module.exports = connection