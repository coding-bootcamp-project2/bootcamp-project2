const { Character } = require('../models'); // placeholder route

const characterData = [
    {
        id: 1,
        class_id: 1,
        race_id: 2,
        level: 1,
        date_created: '',
    },
];

const character = () => dnd_character_db.bulkCreate(Character);

module.exports = character;