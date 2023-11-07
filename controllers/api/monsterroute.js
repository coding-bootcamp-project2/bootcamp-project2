const router = require("express").Router();

// Create a character page route
router.get("/", async (req, res) => {
  try {
    res.render("monster", {
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
