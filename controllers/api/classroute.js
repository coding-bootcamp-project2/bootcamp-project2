const router = require("express").Router();
const { Class } = require("../../models");

router.get("/:id", async (req, res) => {
    try {
      console.log(req.params.id)
      console.log("IT WORKED--------")
      const classData = await Class.findByPk(req.params.id);
      console.log("Class Data:", classData)
      if (!classData) {
        res.status(404).json({ message: "No class found with this id!" });
        return;
      }
      res.status(200).json(classData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
router.get("/", async (req, res) => {
  res.render("test")
})
  module.exports = router;