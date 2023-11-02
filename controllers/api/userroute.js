const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");

// create a user
router.post("/", async (req, res) => {
  try {
    console.log("Create a user!!!", req.body.username, req.body.password);
    const userData = await User.create({
      user_name: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userData.id;
      res.status(200).json(userData);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// login route
router.post("/login", async (req, res) => {
  // find the user
  const userData = await User.findOne({
    where: { user_name: req.body.username },
  });

  if (!userData) {
    res.status(400).json({ message: "Incorrect username or password!" });
    return;
  }
  // compare the password
  const validPassword = await userData.checkPassword(req.body.password);

  if (!validPassword) {
    res.status(400).json({ message: "Incorrect username or password!" });
    return;
  }

  req.session.save(() => {
    req.session.loggedIn = true;
    req.session.userId = userData.id;
    res.status(200).json({ user: userData, message: "You are logged in!" });
  });
});

// logout route
router.post("/logout", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      req.session.destroy(() => res.status(204).end());
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
