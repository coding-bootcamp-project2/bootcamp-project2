const { ClassStats } = require('../models'); // placeholder route

const classData = [
  {
    className: 'barbarian',
    strength: 16,
    dexterity: 14,
    constitution: 16,
    intelligence: 10,
    wisdom: 12,
    charisma: 8,
  },
  {
    className: 'bard',
    strength: 8,
    dexterity: 16,
    constitution: 14,
    intelligence: 10,
    wisdom: 12,
    charisma: 16,
  },{
    className: 'cleric',
    strength: 16,
    dexterity: 8,
    constitution: 14,
    intelligence: 10,
    wisdom: 16,
    charisma: 12,
  },{
    className: 'druid',
    strength: 8,
    dexterity: 14,
    constitution: 16,
    intelligence: 10,
    wisdom: 16,
    charisma: 12,
  },{
    className: 'paladin',
    strength: 16,
    dexterity: 8,
    constitution: 14,
    intelligence: 10,
    wisdom: 12,
    charisma: 16,
  },{
    className: 'ranger',
    strength: 8,
    dexterity: 16,
    constitution: 14,
    intelligence: 10,
    wisdom: 16,
    charisma: 12,
  },{
    className: 'sorcerer',
    strength: 8,
    dexterity: 16,
    constitution: 14,
    intelligence: 10,
    wisdom: 12,
    charisma: 14,
  },{
    className: 'warlock',
    strength: 8,
    dexterity: 16,
    constitution: 14,
    intelligence: 10,
    wisdom: 12,
    charisma: 16,
  },{
    className: 'wizard',
    strength: 8,
    dexterity: 16,
    constitution: 14,
    intelligence: 16,
    wisdom: 12,
    charisma: 8,
  },
];

const classes = () => db.bulkCreate(classData);

module.exports = classes;