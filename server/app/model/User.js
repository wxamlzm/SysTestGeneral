const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { Schema, model } = mongoose
const connection = require("../config/userDB.js")

const UserSchema = new Schema({
    username: { type: String, require: true },
    password: { 
        type: String, 
        require: true,
        set(val){
            return bcrypt.hashSync(val, 10)
        }
    },
    name: { type: String, require: true },
    isAdmin: { type: String, default: '0' } // 身份 1-> 管理员 ， 0-> 普通用户
})

const User = connection.model('UserList', UserSchema)

module.exports = User