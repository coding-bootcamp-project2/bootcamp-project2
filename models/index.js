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
    
})
Character.hasOne(Class, {

})
Race.belongsTo(Character, {

})
Character.hasOne(Race, {

})
Skill.belongsTo(Character, {

})
Character.hasOne(Skill, {

})
Armor.belongsTo(Character, {

})
Character.hasOne(Armor, {

})
Character.hasMany(CharacterSpell, {

})
CharacterSpell.hasMany(Spell, {

})
Spell.belongsTo(CharacterSpell, {

})
Character.hasMany(CharacterWeapon, {

})
CharacterWeapon.hasMany(Weapon, {

})
Weapon.belongsTo(CharacterWeapon, {

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