const express = require("express");
const router = express.Router();
const namesController = require("../controllers/names");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.post("/addName/:id", namesController.addName);

router.put('/markNameGiven/:id', namesController.markNameGiven)

router.put('/markNameIncomplete/:id', namesController.markNameIncomplete)

router.delete('/deleteName/:id', namesController.deleteName)



module.exports = router;