const menuRouter = require('./menu')
const userRouter = require('./user')

module.exports = app => {
    app.use('/menu', menuRouter)
    app.use('/user', userRouter)
}