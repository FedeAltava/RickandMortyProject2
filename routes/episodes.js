const router = require("express").Router();

const axios = require("axios");

const Character = require("../models/Character.model");
const User = require("../models/User.model");

//middleware
const isLoggedIn = require("../middleware/isLoggedIn")
router.get("/:page", isLoggedIn, async (req, res) => {
 
    try {
      const axiosCall = await axios(
        `https://rickandmortyapi.com/api/episode?page=${req.params.page}`
      );
      
      const episodesInfo = axiosCall.data.results; 
      
      res.render("./episodes", { episodesInfo });
    } catch (err) {
      console.log(err);
    }
  });

  module.exports = router;