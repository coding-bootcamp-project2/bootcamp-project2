const express = require('express');
const router = express.Router();
const Character = require('../../models/Character'); // Adjust the path as needed

// GET: Retrieve a list of all characters
router.get('/', async (req, res) => { 
  try {
    const characters = await Character.findAll();
    res.render('characters_all', { characters });
  } catch (err) {
    console.error('Error fetching all characters:', err);
    res.status(500).send('Internal Server Error');
  }
});

// POST: Create a new character to test rendering to page, should delete later
router.post('/', async (req, res) => {
  try {
    const { user_id, class_id, level, hit_points } = req.body;

    // Create a new character in the database
    const newCharacter = await Character.create({ user_id, class_id, level, hit_points });

    // Return the newly created character
    res.status(201).json(newCharacter);
  } catch (err) {
    console.error('Error creating a character:', err);
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

