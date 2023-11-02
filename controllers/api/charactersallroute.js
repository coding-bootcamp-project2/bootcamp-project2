const express = require('express');
const router = express.Router();
const Character = require('../../models/Character'); // Adjust the path as needed

// GET: Retrieve a list of all characters
router.get('/charactersall', async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.render('characters-all', { characters });
  } catch (err) {
    console.error('Error fetching all characters:', err);
    res.status(500).send('Internal Server Error');
  }
});

// DELETE: Delete a character by ID
router.delete('/charactersall/:id', async (req, res) => {
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

