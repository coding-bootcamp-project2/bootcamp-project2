const router = require("express").Router();
const { Class } = require("../../models");

router.get("/:id", async (req, res) => {
    try {
      const classData = await Class.findByPk(req.params.id);
      const dndClass = classData.get({plain: true})
      console.log("Class Data:", dndClass)
      if (!classData) {
        res.status(404).json({ message: "No class found with this id!" });
        return;
      }
      res.render("test", {dndClass});
    } catch (err) {
      res.status(500).json(err);
    }
  });
router.get("/", async (req, res) => {
  res.render("test")
})
  module.exports = router;