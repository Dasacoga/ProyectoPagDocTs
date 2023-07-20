const express=require('express');
const router=express.Router()
const PersonasController=require('../controllers/Controller')
//urls
router.get('/',PersonasController.inicio)
router.get('/citas',PersonasController.list)
router.get('/personas',PersonasController.personas)
router.post('/add',PersonasController.save)
router.get('/delete/:id',PersonasController.delete)

//urls doc
router.get('/doctor',PersonasController.doctor)
router.post('/adddoc',PersonasController.savedoc)
router.get('/deletedoc/:id',PersonasController.deletedoc)

//urls cit
router.post('/addcita',PersonasController.savecita)
router.get('/deletecita/:id',PersonasController.deletecita)


module.exports=router 