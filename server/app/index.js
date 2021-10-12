const express = require('express')
const cors = require('cors')
// const mongo = require('./config/db')
const routes = require('./router')
const app = new express()

app.use(express.urlencoded({extended:false}))

app.use(cors())

// mongo(app)

routes(app)

app.listen(3000, () => {
    console.log('server listen at 3000')
})

