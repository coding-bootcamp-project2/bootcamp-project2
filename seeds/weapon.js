const { Weapon } = require("../models"); // placeholder route

const weaponData = [
  {
    name: "greatsword", //Barbarian
    bonus: 6,
    damage: "2d6",
    description: "Heavy Two-Handed Melee Weapon",
  },
  {
    name: "rapier", // Bard
    bonus: 8,
    damage: "1d8",
    description: "One handed piercing finesse weapon",
  },
  {
    name: "mace", // Cleric
    bonus: 4,
    damage: "1d6",
    description: "One handed bludgeoning weapon",
  },
  {
    name: "warhammer", // Druid
    bonus: 4,
    damage: "1d8",
    description: "Versatile bludgeoning weapon",
  },
  {
    name: "longsword", // Paladin
    bonus: 5,
    damage: "1d8",
    description: "Versatile slashing weapon",
  },
  {
    name: "longbow", // Ranger
    bonus: 7,
    damage: "1d8",
    description: "Long-ranged two-handed piercing weapon",
  },
  {
    name: "light crossbow", // Sorcerer
    bonus: 4,
    damage: "1d6",
    description: "Standard-ranged two-handed piercing weapon",
  },
  {
    name: "daggers", // Warlock
    bonus: 3,
    damage: "2d4",
    description: "Two light melee weapons",
  },
  {
    name: "quarterstaff", // Wizard
    bonus: 4,
    damage: "1d6",
    description: "Versatile light bludgeoning weapon",
  },
];

const weapons = () => Weapon.bulkCreate(weaponData);

module.exports = weapons;
