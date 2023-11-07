const express = require('express');
const router = express.Router();
const Character = require('../../models/Character'); // Adjust the path as needed
const {User, Class, Race}=require('../../models')

// GET: Retrieve a list of all characters
router.get('/', async (req, res) => { 
  try { console.log ("Retreiving all characters")
    const charactersData = await Character.findAll({include: [{ model: User }, { model: Class }, { model: Race },{ model: Race }],});
    const characters = charactersData.map((character) =>
    character.get({ plain: true })
    );
    console.log(characters)
    res.render('charactersall', { characters });
  } catch (err) {
    console.error('Error fetching all characters:', err);
    res.status(500).send('Internal Server Error');
  }
});


// DELETE: Delete a character by ID
router.delete('/:id', async (req, res) => { 
  try {
    const characterId = req.params.id;
    // Delete the character from the database
    const deletedCharacterCount = await Character.destroy({ where: { id: characterId } });

    if (deletedCharacterCount === 1) {
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ message: 'Character not found' });
    }
  } catch (err) {
    console.error('Error deleting a character:', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

