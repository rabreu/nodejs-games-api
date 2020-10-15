const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/gamesController");
const cors = require("cors");

router.put("/jogos/:id", cors(), gamesController.updateGamePut);
router.patch("/jogos/:id", cors(), gamesController.gameUpdatePatch);

module.exports = router