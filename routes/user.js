const router = require("express").Router();
const User = require("../models/User.model");

router.get("/profile", async (req, res, next) => {

  const user = await User.findById(req.session.user._id).populate('favorites')

  console.log(user)

  res.render("./user/profile", {characters : user.favorites});
});

module.exports = router;