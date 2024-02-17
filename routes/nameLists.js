const express = require('express')
const router = express.Router()
const nameListsController = require('../controllers/nameLists') 
const { ensureAuth } = require('../middleware/auth')


router.get('/', ensureAuth, nameListsController.getAllNameLists)

router.get('/:id', ensureAuth, nameListsController.getNameList)

router.post('/createNameList', nameListsController.createNameList)

router.delete('/deleteNameList/:id', ensureAuth, nameListsController.deleteNameList)


// router.delete("/deleteNameList/:id", nameLustsController.deleteNameList);


module.exports = router