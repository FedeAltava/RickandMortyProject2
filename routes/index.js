const router = require("express").Router();
const axios = require("axios");
const Character = require("../models/Character.model");
const User = require("../models/User.model");

// /* GET home page */
// router.get("/", (req, res, next) => {
//   res.render("index");
// });


router.get("/", async (req, res) => {
  try {
    const axiosCall = await axios(
      `https://rickandmortyapi.com/api/character`
    );
    const charactersInfo = axiosCall.data.results;
    res.render("index", { charactersInfo });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;