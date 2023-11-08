const router = require("express").Router();
const capitalize = require("../../node_modules/lodash/capitalize");

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

// Create a character page route, render form page
router.get("/create", async (req, res) => {
  try {
    res.render("form", {
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a character
router.post("/create", async (req, res) => {
  try {
    const newCharacter = await Character.create({
      ...req.body,
      user_id: req.session.userId,
    });
    console.log("New Character------------", newCharacter);
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
    character.class.name = capitalize(character.class.name);
    character.race.name = capitalize(character.race.name);
    res.render("character", { character, loggedIn: req.session.loggedIn });
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
