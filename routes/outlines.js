const express = require('express')
const router = express.Router()
const outlinesController = require('../controllers/outlines') 
const { ensureAuth } = require('../middleware/auth')


router.get('/', ensureAuth, outlinesController.getAllOutlines)

router.get('/:id', ensureAuth, outlinesController.getOutline)

router.post('/createOutline', outlinesController.createOutline)

router.delete('/deleteOutline/:id', ensureAuth, outlinesController.deleteOutline)




// router.delete("/deletePost/:id", postsController.deleteOutline);



module.exports = router