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
    res.render("character", character);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
