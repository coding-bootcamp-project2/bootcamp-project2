const { Character } = require("../models"); // placeholder route

const characterData = [
  {
    character_name: "testname",
    user_id: 1,
    class_id: 1,
    race_id: 2,
    level: 1,
  },
];

const character = () => Character.bulkCreate(characterData);

module.exports = character;
