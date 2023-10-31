const { Weapons } = require('../models') // placeholder route

const weaponData = [
{
    id: 1,
    weapon: 'greatsword', //Barbarian
    bonus: 6,
    damage: '2d6',
    description: 'Heavy Two-Handed Melee Weapon'
  },
  {
    id: 2,
    weapon: 'rapier', // Bard
    bonus: 8,
    damage: '1d8',
    description: 'One handed piercing finesse weapon'
  },
  {
    id: 3,
    weapon: 'mace', // Cleric
    bonus: 4,
    damage: '1d6',
    description: 'One handed bludgeoning weapon'
  },
  {
    id: 4,
    weapon: 'warhammer', // Druid
    bonus: 4,
    damage: '1d8',
    description: 'Versatile bludgeoning weapon'
  },
  {
    id: 5,
    weapon: 'longsword', // Paladin
    bonus: 5,
    damage: '1d8',
    description: 'Versatile slashing weapon'
  },
  {
    id: 6,
    weapon: 'longbow', // Ranger
    bonus: 7,
    damage: '1d8',
    description: 'Long-ranged two-handed piercing weapon'
  },
  {
    id: 7,
    weapon: 'light crossbow', // Sorcerer
    bonus: 4,
    damage: '1d6',
    description: 'Standard-ranged two-handed piercing weapon'
  },
  {
    id: 8,
    weapon: 'daggers', // Warlock
    bonus: 3,
    damage: '2d4',
    description: 'Two light melee weapons'
  },
  {
    id: 9,
    weapon: 'quarterstaff', // Wizard
    bonus: 4,
    damage: '1d6',
    description: 'Versatile light bludgeoning weapon'
  },
]

const weapons = () => db.bulkCreate(weaponData);

module.exports = weapons;