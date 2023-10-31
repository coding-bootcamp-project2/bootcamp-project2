const { User } = require('../models'); // placeholder route

const userData = [
  {
    id: 1,
    user_name: '',
    password: '',
  },
];

const userLogin = () => dnd_character_db.bulkCreate(userData);

module.exports = userLogin;