const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const charactersController = require("../controllers/characters");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/', ensureAuth, charactersController.getAllCharacters)

router.post('/createCharacter', upload.single("file"), charactersController.createCharacter)

// router.get('/createCharacter', ensureAuth, charactersController.createCharacter)

router.get('/:id', ensureAuth, charactersController.getCharacter)


router.delete('/deleteCharacter/:id', ensureAuth, charactersController.deleteCharacter)


module.exports = router