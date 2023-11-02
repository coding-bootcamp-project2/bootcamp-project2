const router = require("express").Router();
const { Character } = require("../../models");

router.get("/", async (req, res) => {});

router.post("/", async (req, res) => {
  try {
    const newCharacter = await Character.create({
      ...req.body,
    });
    res.json(newCharacter);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const [affectedRows] = await Character.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
