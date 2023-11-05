const router = require("express").Router();
const { Character } = require("../models");

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// login route for the landing page
router.get("/login", async (req, res) => {
  try {
    // if it's already logged in, just render the homepage
    if (req.session.loggedIn) {
      console.log(req.session.loggedIn);
      res.redirect("/");
      return;
    }
    // if it's not logged in, render the login handlebar
    res.render("login");
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
