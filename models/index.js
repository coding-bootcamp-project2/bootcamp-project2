// Importing models
const Character = require("./Character");
const Class = require("./Class");
const Race = require("./Race");
// const Skill = require("./Skill");
// const Armor = require("./Armor");
const User = require("./User");
// const CharacterSpell = require("./CharacterSpell");
const Spell = require("./Spell");
// const CharacterWeapon = require("./CharacterWeapon");
const Weapon = require("./Weapon");

// Relationships
Character.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasMany(Character, {
  foreignKey: "user_id",
});
Class.belongsTo(Character, {
  foreignKey: "class_id",
});
Character.hasOne(Class, {
  foreignKey: "class_id",
});
Race.belongsTo(Character, {
  foreignKey: "race_id",
});
Character.hasOne(Race, {
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
// I believe we need to use belongsToMany here to define the relationshop.
// Spell.belongsToMany(Character, {through: CharacterSpell})
// Character.belongsToMany(Spell, {through: CharacterSpell})
// Weapon.belongsToMany(Character, {through: CharacterWeapon})
// Character.belongsToMany(Weapon, {through: CharacterWeapon})
Spell.belongsToMany(Character, {
  through: CharacterSpell
})
Character.belongsToMany(Spell, {
  through: CharacterSpell
})
Weapon.belongsToMany(Character, {
  through: CharacterWeapon
})
Character.belongsToMany(Weapon, {
  through: CharacterWeapon
})

// Exporting
module.exports = {
  Character,
  Class,
  Race,
  Skill,
  Armor,
  User,
  CharacterSpell,
  Spell,
  CharacterWeapon,
  Weapon,
};
