const router = require("express").Router();
const { Character, User } = require("../../models");

// Get all characters
router.get("/", async (req, res) => {
  try {
    const characterData = await Location.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get single character
router.get("/:id", async (req, res) => {
  try {
    const characterData = await Character.findByPk(req.params.id, {
      include: [{ model: User }],
    });

    if (!characterData) {
      res.status(404).json({ message: "No character found with this id!" });
      return;
    }
    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a character
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

// Update a character
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
      res.status(404).json({ message: "No character found with that id!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a character
router.delete("/:id", async (req, res) => {
  try {
    const characterData = await characterData.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!characterData) {
      res.status(404).json({ message: "No character found with that id!" });
      return;
    }

    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
