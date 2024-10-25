const {Router}=require('express')
const controller=require('../dbcontrol')

const router=new Router
router.post('/',controller.dbfetch)
module.exports=router