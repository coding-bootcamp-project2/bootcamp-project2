// Importing models
const Character = require('./Character')
const Class = require('./Class')
const Race = require('./Race')
const Skill = require('./Skill')
const Armor = require('./Armor')
const User = require('./User')
const CharacterSpell = require ('./CharacterSpell')
const Spell = require ('./Spell')
const CharacterWeapon = require('./CharacterWeapon')
const Weapon = require('./Weapon')

// Relationships
Character.belongsTo(User, {
    foreignKey: 'user_id'
})
User.hasMany(Character, {
    foreignKey: 'user_id'
})
Class.belongsTo(Character, {
    foreignKey: 'class_id'
})
Character.hasOne(Class, {
    foreignKey: 'class_id'
})
Race.belongsTo(Character, {
    foreignKey: 'race_id'
})
Character.hasOne(Race, {
    foreignKey: 'race_id'
})
Skill.belongsTo(Character, {
    foreignKey: 'skill_id'
})
Character.hasOne(Skill, {
    foreignKey: 'skill_id'
})
Armor.belongsTo(Character, {
    foreignKey: 'armor_id'
})
Character.hasOne(Armor, {
    foreignKey: 'armor_id'
})
Character.hasMany(CharacterSpell, {
    foreignKey: 'charcter_spell_id'
})
CharacterSpell.hasMany(Spell, {
    foreignKey: 'spell_id'
})
Spell.belongsTo(CharacterSpell, {
    foreignKey: 'spell_id'
})
Character.hasMany(CharacterWeapon, {
    foreignKey: 'charcter_weapon_id'
})
CharacterWeapon.hasMany(Weapon, {
    foreignKey: 'weapon_id'
})
Weapon.belongsTo(CharacterWeapon, {
    foreignKey: 'weapon_id'
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