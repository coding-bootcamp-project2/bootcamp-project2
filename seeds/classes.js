const { Classes } = require('../models'); // placeholder route

const classes = [
    {
        id: 1,
      className: 'barbarian',
      description: 'A fierce warrior of primitive background who can enter a battle rage',
    },
    {
        id: 2,
        className: 'bard',
        description: 'An inspiring magician whose power echoes the music of creation',
      },
      {
        id: 3,
        className: 'cleric',
        description: 'A priestly champion who wields divine magic in service of a higher power',
      },
      {
        id: 4,
        className: 'druid',
        description: 'A priest of the Old Faith, wielding the powers of nature — moonlight and plant growth, fire and lightning — and adopting animal forms',
      },
      {
        id: 5,
        className: 'paladin',
        description: 'A holy warrior bound to a sacred oath',
      },
      {
        id: 6,
        className: 'ranger',
        description: 'A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization',
      },
      {
        id: 7,
        className: 'sorcerer',
        description: '',
      },
      {
        id: 8,
        className: 'warlock',
        description: 'A spellcaster who draws on inherent magic from a gift or bloodline',
      },
      {
        id: 9,
        className: 'wizard',
        description: 'A scholarly magic-user capable of manipulating the structures of reality',
      },
    
  ];
  
  const classNames = () => dnd_character_db.bulkCreate(classes);
  
  module.exports = classNames;