const { Classes } = require("../models"); // placeholder route

const classes = [
  {
    className: "barbarian",
    description:
      "A fierce warrior of primitive background who can enter a battle rage",
  },
  {
    className: "bard",
    description:
      "An inspiring magician whose power echoes the music of creation",
  },
  {
    className: "cleric",
    description:
      "A priestly champion who wields divine magic in service of a higher power",
  },
  {
    className: "druid",
    description:
      "A priest of the Old Faith, wielding the powers of nature — moonlight and plant growth, fire and lightning — and adopting animal forms",
  },
  {
    className: "paladin",
    description: "A holy warrior bound to a sacred oath",
  },
  {
    className: "ranger",
    description:
      "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization",
  },
  {
    className: "sorcerer",
    description: "",
  },
  {
    className: "warlock",
    description:
      "A spellcaster who draws on inherent magic from a gift or bloodline",
  },
  {
    className: "wizard",
    description:
      "A scholarly magic-user capable of manipulating the structures of reality",
  },
];

const classNames = () => db.bulkCreate(classes);

module.exports = classNames;
