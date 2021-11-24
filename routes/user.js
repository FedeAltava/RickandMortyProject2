const router = require("express").Router();


router.get("/user", (req, res, next) => {
  res.render("userProfile");
});

module.exports = router;