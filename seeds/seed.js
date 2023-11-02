const classes = require("./class");
const races = require("./race");
const spells = require("./spell");
const weapons = require("./weapon");
const user = require("./user");
const character = require("./character");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log("\n----- DATABASE SYNCED -----\n");

  await user();
  console.log("\n----- USER DATA SEEDED -----\n");

  await classes();
  console.log("\n----- CLASSES SEEDED -----\n");

  await races();
  console.log("\n----- RACES SEEDED -----\n");

  await weapons();
  console.log("\n----- WEAPONS SEEDED -----\n");

  await spells();
  console.log("\n----- SPELLS SEEDED -----\n");

  await character();
  console.log("\n----- CHARACTER SEEDED -----\n");

  process.exit(0);
};

seedAll();
