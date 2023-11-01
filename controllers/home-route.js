const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const character = {
      id: 1,
      user_id: 1,
      class_id: 1,
      level: 10,
      hit_points: 100,
      createdAt: "10/30/2023",
    };
    res.render("character", { character, loggedIn: req.session.loggedIn });
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
