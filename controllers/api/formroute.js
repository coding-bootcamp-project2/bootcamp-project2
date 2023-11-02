const router = require("express").Router();
const { Class } = require("../../models");

router.get("/:id", async (req, res) => {
    try {
      const classData = await Class.findByPk(req.params.id);
      if (!classData) {
        res.status(404).json({ message: "No class found with this id!" });
        return;
      }
      res.status(200).json(classData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;