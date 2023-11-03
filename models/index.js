// Importing models
const Character = require("./Character");
const Class = require("./Class");
const Race = require("./Race");
// const Skill = require("./Skill");
// const Armor = require("./Armor");
const User = require("./User");
const CharacterSpell = require("./CharacterSpell");
const Spell = require("./Spell");
const CharacterWeapon = require("./CharacterWeapon");
const Weapon = require("./Weapon");

// Relationships
Character.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasMany(Character, {
  foreignKey: "user_id",
});
Class.hasMany(Character, {
  foreignKey: "class_id",
});
Character.belongsTo(Class, {
  foreignKey: "class_id",
});
Race.hasMany(Character, {
  foreignKey: "race_id",
});
Character.belongsTo(Race, {
  foreignKey: "race_id",
});
// Skill.belongsTo(Character, {
//   foreignKey: "skill_id",
// });
// Character.hasOne(Skill, {
//   foreignKey: "skill_id",
// });
// Armor.belongsTo(Character, {
//   foreignKey: "armor_id",
// });
// Character.hasOne(Armor, {
//   foreignKey: "armor_id",
// });
Spell.belongsToMany(Character, {
  through: CharacterSpell,
});
Character.belongsToMany(Spell, {
  through: CharacterSpell,
});
Weapon.belongsToMany(Character, {
  through: CharacterWeapon,
});
Character.belongsToMany(Weapon, {
  through: CharacterWeapon,
});

// Exporting
module.exports = {
  Character,
  Class,
  Race,
  User,
  CharacterSpell,
  Spell,
  CharacterWeapon,
  Weapon,
};
