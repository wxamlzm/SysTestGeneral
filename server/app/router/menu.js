const express = require('express')
const router = express.Router()
const Menu = require('../model/Menu')

router.get('/', async (req, res) => {
    // 查询商品清单并以id进行排序
    const list = await Menu.find().sort({id:1})
    res.send(list)
})

router.post('/add', async (req, res) => {
    const menu = await Menu.findOne({id: req.body.id})
    if(menu){ return res.status(409).send('表单已存在')}
    const newMenu = await new Menu(req.body).save()

    res.send(newMenu)
})

router.get('/del', async ( req, res ) => {
    const id = req.query

    res.send(id)
})

module.exports = router