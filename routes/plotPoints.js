const express = require("express");
const router = express.Router();
const plotPointController = require("../controllers/plotPoints");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.post("/addPlotPoint/:id", plotPointController.addPlotPoint);

router.put('/markPlotPointComplete/:id', plotPointController.markPlotPointComplete)

router.put('/markPlotPointIncomplete/:id', plotPointController.markPlotPointIncomplete)

router.delete('/deletePlotPoint/:id', plotPointController.deletePlotPoint)



module.exports = router;