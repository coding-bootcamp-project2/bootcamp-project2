const express = require("express");
const router = express.Router();
const Character = require("../../models/Character"); // Adjust the path as needed
const { User, Class, Race } = require("../../models");
const capitalize = require("../../node_modules/lodash/capitalize");

// GET: Retrieve a list of all characters
router.get("/", async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      return res.render("login");
    }
    console.log("Retreiving all characters");
    const charactersData = await Character.findAll({
      where: { user_id: req.session.userId },
      include: [
        { model: User },
        { model: Class },
        { model: Race },
        { model: Race },
      ],
    });
    const characters = charactersData.map((character) => {
      character = character.get({ plain: true });
      // console.log(character.race.name);
      character.class.name = capitalize(character.class.name);
      character.race.name = capitalize(character.race.name);
      return character;
    });
    console.log(characters);
    res.render("charactersall", { characters, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error("Error fetching all characters:", err);
    res.status(500).send("Internal Server Error");
  }
});

// DELETE: Delete a character by ID
router.delete("/:id", async (req, res) => {
  try {
    const characterId = req.params.id;
    // Delete the character from the database
    const deletedCharacterCount = await Character.destroy({
      where: { id: characterId },
    });

    if (deletedCharacterCount === 1) {
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ message: "Character not found" });
    }
  } catch (err) {
    console.error("Error deleting a character:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
