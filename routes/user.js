const router = require("express").Router();


router.get("/userProfile", (req, res, next) => {
  res.render("userProfile");
});

module.exports = router;