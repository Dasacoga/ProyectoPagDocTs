const express=require('express');
const router=express.Router()
const PersonasController=require('../controllers/Controller')
//urls
router.get('/',PersonasController.inicio)
router.get('/citas',PersonasController.list)
router.get('/personas',PersonasController.personas)
router.post('/add',PersonasController.save)
router.get('/delete/:id',PersonasController.delete)

module.exports=router 