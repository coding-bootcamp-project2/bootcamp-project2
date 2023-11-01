const { User } = require("../models"); // placeholder route

const userData = [
  {
    id: 1,
    user_name: "test",
    password: "123456",
  },
];

const userLogin = () => User.bulkCreate(userData);

module.exports = userLogin;
