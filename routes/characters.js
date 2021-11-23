const router = require("express").Router();

const axios = require("axios");

const Character = require("../models/Character.model");
const User = require("../models/User.model");

//middleware
const isLoggedIn = require("../middleware/isLoggedIn")
router.get("/:page", isLoggedIn, async (req, res) => {
    try {
      const axiosCall = await axios(
        `https://rickandmortyapi.com/api/character/?page=${req.params.page}`
      );
     
      const charactersInfo = axiosCall.data.results; 
      
      res.render("./characters", { charactersInfo });
    } catch (err) {
      console.log(err);
    }
  });

router.post('/favorite/:id', async(req,res)=>{

const axiosCall = await axios(`https://rickandmortyapi.com/api/character/${req.params.id}`)
const infoFavoriteCharacter = axiosCall.data


const dataToUpLoad ={
  name:infoFavoriteCharacter.name,
  status:infoFavoriteCharacter.status,
  species:infoFavoriteCharacter.species,
  gender:infoFavoriteCharacter.gender,
  origin:infoFavoriteCharacter.origin.name,
  image:infoFavoriteCharacter.image,
  location:infoFavoriteCharacter.location.name
} 

const createCharacter = await Character.create(dataToUpLoad)
console.log(createCharacter._id)

await User.findByIdAndUpdate(req.session.user._id,
  {$push:{favorites:createCharacter._id}},
  {new:true});

  res.render('./userProfile',)
})


  module.exports = router;