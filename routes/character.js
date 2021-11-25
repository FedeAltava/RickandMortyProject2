const router = require("express").Router();

const Character = require("../models/Character.model");

router.get("/characters", (req, res) => {


  res.render("characters/characters", Character);
});

module.exports = router;