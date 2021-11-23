const router = require("express").Router();

const axios = require("axios");

const Character = require("../models/Character.model");
const User = require("../models/User.model");

//middleware
const isLoggedIn = require("../middleware/isLoggedIn")
router.get("/", isLoggedIn, async (req, res) => {
    try {
      const axiosCall = await axios(
        `https://rickandmortyapi.com/api/character`
      );
      console.log(axiosCall)
      const charactersInfo = axiosCall.data.results; 
      
      res.render("./characters", { charactersInfo });
    } catch (err) {
      console.log(err);
    }
  });

  module.exports = router;