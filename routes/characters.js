const router = require("express").Router();

const axios = require("axios");



//middleware
const isLoggedIn = require("../middleware/isLoggedIn")
const Character = require("../models/Character.model");
const User = require("../models/User.model");
//takes character from api
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
//add character to favorites
router.post('/favorite/:id',isLoggedIn, async(req,res)=>{

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


const favoriteCharacterUpdate = await User.findByIdAndUpdate(req.session.user._id,
  {$push:{favorites:createCharacter._id}},
  {new:true}).populate("favorites");

  res.render('./userProfile',{favoriteCharacterUpdate})
});

//Delete character from favorites
router.post('/favorite/:id/delete', async(req,res)=>{

try{
  const favoriteCharacterUpdate = await User.findByIdAndDelete(req.session.user._id)
console.log(favoriteCharacterUpdate)
res.redirect('./userProfile')
}catch(err){

  console.log(err)
}



})



  module.exports = router;