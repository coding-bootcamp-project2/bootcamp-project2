const { Class } = require("../models"); // placeholder route

const classData = [
  {
    description:
      "A fierce warrior of primitive background who can enter a battle rage",
    hit_points: 20,
    name: "barbarian",
    strength: 16,
    dexterity: 14,
    constitution: 16,
    intelligence: 10,
    wisdom: 12,
    charisma: 8,
    image: "/asset/barbarian.png",
  },
  {
    description:
      "An inspiring magician whose power echoes the music of creation",
    hit_points: 20,
    name: "bard",
    strength: 8,
    dexterity: 16,
    constitution: 14,
    intelligence: 10,
    wisdom: 12,
    charisma: 16,
    image: "/asset/bard.png",
  },
  {
    description:
      "A priestly champion who wields divine magic in service of a higher power",
    hit_points: 20,
    name: "cleric",
    strength: 16,
    dexterity: 8,
    constitution: 14,
    intelligence: 10,
    wisdom: 16,
    charisma: 12,
    image: "/asset/cleric.png",
  },
  {
    description:
      "A priest of the Old Faith, wielding the powers of nature — moonlight and plant growth, fire and lightning — and adopting animal forms",
    hit_points: 20,
    name: "druid",
    strength: 8,
    dexterity: 14,
    constitution: 16,
    intelligence: 10,
    wisdom: 16,
    charisma: 12,
    image: "/asset/druid.png",
  },
  {
    description: "A holy warrior bound to a sacred oath",
    hit_points: 20,
    name: "paladin",
    strength: 16,
    dexterity: 8,
    constitution: 14,
    intelligence: 10,
    wisdom: 12,
    charisma: 16,
    image: "/asset/paladin.png",
  },
  {
    description:
      "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization",
    hit_points: 20,
    name: "ranger",
    strength: 8,
    dexterity: 16,
    constitution: 14,
    intelligence: 10,
    wisdom: 16,
    charisma: 12,
    image: "/asset/ranger.png",
  },
  {
    description:
      "A spellcaster who draws on inherent magic from a gift or bloodline",
    hit_points: 20,
    name: "sorcerer",
    strength: 8,
    dexterity: 16,
    constitution: 14,
    intelligence: 10,
    wisdom: 12,
    charisma: 14,
    image: "/asset/sorcerer.png",
  },
  {
    description:
      "A wielder of magic that is derived from a bargain with an extraplanar entity",
    hit_points: 20,
    name: "warlock",
    strength: 8,
    dexterity: 16,
    constitution: 14,
    intelligence: 10,
    wisdom: 12,
    charisma: 16,
    image: "/asset/warlock.png",
  },
  {
    description:
      "A scholarly magic-user capable of manipulating the structures of reality",
    hit_points: 20,
    name: "wizard",
    strength: 8,
    dexterity: 16,
    constitution: 14,
    intelligence: 16,
    wisdom: 12,
    charisma: 8,
    image: "/asset/wizard.png",
  },
];

const classes = () => Class.bulkCreate(classData);

module.exports = classes;
