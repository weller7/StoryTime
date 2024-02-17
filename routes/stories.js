const express = require("express");
const router = express.Router();
const storiesController = require("../controllers/stories");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/', ensureAuth, storiesController.getAllStories)

router.get('/createStory', ensureAuth, storiesController.createStory)

router.get('/:id', ensureAuth, storiesController.getStory)

router.get('/editStory/:id', ensureAuth, storiesController.editStory)

router.put('/submitEditedStory/:id', ensureAuth, storiesController.submitEditedStory)

router.post('/submitStory', ensureAuth, storiesController.submitStory)

router.delete('/deleteStory/:id', ensureAuth, storiesController.deleteStory)


module.exports = router