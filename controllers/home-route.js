const router = require("express").Router();
const { Character } = require("../models");

router.get("/", async (req, res) => {
  try {
    const characterData = await Character.findByPk(1,{
      include: [{ model: Class}]
    })
    const character = characterData.get({ plain: true})
    console.log(character)
    res.render("character",character );
  } catch (error) {
    res.status(500).json(error);
  }
});

// login route for the landing page
router.get("/login", async (req, res) => {
  try {
    // if it's already logged in, just render the homepage
    if (req.session.loggedIn) {
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
