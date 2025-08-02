const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller.js");


router.get("/characters", controller.getAllCharacters);
router.post("/characters", controller.addCharacter);
router.get("/characters/:id", controller.getCharacterById);
router.put("/characters/:id", controller.updateCharacter);
router.delete("/characters/:id", controller.deleteCharacter);

module.exports = router;