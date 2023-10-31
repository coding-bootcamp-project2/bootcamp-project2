const { User } = require('../models'); // placeholder route

const userData = [
  {
    id: 1,
    user_name: '',
    password: '',
  },
];

const userLogin = () => db.bulkCreate(userData);

module.exports = User;