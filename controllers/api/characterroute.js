const router = require("express").Router();

const { Character, User, Class, Race } = require("../../models");

// Get all characters
router.get("/", async (req, res) => {
  try {
    const characterDataArr = await Character.findAll({
      include: [{ model: User }, { model: Class }, { model: Race }],
    });
    res.status(200).json(characterDataArr);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a character page route
router.get("/create", async (req, res) => {
  try {
    console.log("Render create character page!!!!!!!!!!!!!!");
    res.render("createcharacter");
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a character
router.post("/create", async (req, res) => {
  try {
    console.log("create character------------");
    console.log(req.body);
    const newCharacter = await Character.create({
      ...req.body,
      user_id: 1,
    });
    console.log(newCharacter);
    res.status(200).json(newCharacter);
    // res.render(character, { newCharacter });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get single character
router.get("/:id", async (req, res) => {
  try {
    const characterData = await Character.findByPk(req.params.id, {
      include: [{ model: User }, { model: Class }, { model: Race }],
    });

    if (!characterData) {
      res.status(404).json({ message: "No character found with this id!" });
      return;
    }
    const character = characterData.get({ plain: true });
    console.log(character);
    res.render("character", { character });
    // res.status(200).json(characterData);
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
    const characterData = await Character.destroy({
      where: {
        id: req.params.id,
      },
    });
    console.log(characterData, "TEST");
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
